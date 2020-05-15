const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('Database running')
);

const {
	authRoute,
	studentsRoute,
	groupsRoute,
	postsRoute,
	teachersRoute,
	homeworkRoute,
} = require('./routes/index.route');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(
	'/',
	authRoute,
	studentsRoute,
	groupsRoute,
	postsRoute,
	teachersRoute,
	homeworkRoute
);

app.listen(4000, () => console.log('Server running'));
