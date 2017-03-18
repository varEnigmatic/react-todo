const pg = require('pg');

const pool = new pg.Pool({
	user: process.env.USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.TODO_DB,
	host: process.env.APP_HOST,
	max: 10, // max number of clients in pool
	idleTimeoutMillis: 1000,
	port: 5432
});

let querystring = '';

module.exports = function(app){
	// routing
	// GET list of all todos
	app.get('/api/todos', (req, res) => {
		pool.connect((err, client, release) => {
			if (err) {
				throw err;
			}

			client.query('SELECT * FROM todos', (err, result) => {
				if (err) {
					throw err;
				}

				// was successful
				release();
				if(result && result.rows) {
					res.send(result.rows);
				}
			});
		});
	});

	// GET todo by id
	app.get('/api/todos/:id', (req, res) => {
		pool.connect((err, client, release) => {
			if (err) {
				throw err;
			}

			client.query(`SELECT * FROM todos WHERE id = ${req.params.id}`, (err, result) => {
				if (err) {
					throw err;
				}

				// was successful
				release();
				if(result && result.rows) {
					res.send(result.rows);
				}
			});
		});
	});

	// POST new todo
	app.post('/api/todos', (req, res) => {
		pool.connect((err, client, release) => {
			if (err) {
				throw err;
			}

			querystring = `INSERT INTO todos (id, title, iscomplete)
				VALUES ('${req.body.id}', '${req.body.title}', '${req.body.iscomplete}')
			`;

			client.query(querystring, (err, result) => {
				if (err) {
					throw err;
				}

				// was successful
				release();
				if(result && result.rows) {
					res.send('created todo');
				}
			});
		});
	});

	// UPDATE todo by id
	app.put('/api/todos/:id', (req, res) => {
		pool.connect((err, client, release) => {
			if (err) {
				throw err;
			}

			querystring = `UPDATE todos SET
				title = '${req.body.title}',
				iscomplete = '${req.body.iscomplete}'
				WHERE id = '${req.params.id}'
			`;

			client.query(querystring, (err, result) => {
				if (err) {
					throw err;
				}

				// was successful
				// return the new rows
				release();
				if(result && result.rows) {
					res.send('updated todo');
				}
			});
		});
	});

	// DELETE todo by id
	app.delete('/api/todos/:id', (req, res) => {
		pool.connect((err, client, release) => {
			if (err) {
				throw err;
			}

			querystring = `DELETE FROM todos WHERE id = '${req.params.id}'`;
			client.query(querystring, (err) => {
				if (err) {
					throw err;
				}

				// was successful
				release();
				res.send('deleted todo');
			});
		});
	});
}
