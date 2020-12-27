import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import indexRouter from './routes/index';
import postRouter from './routes/posts';
import categoriesRouter from './routes/categories';

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async (connection) => {
    const app = express()
    app.use(bodyParser.json());

    app.use('/', indexRouter);
    app.use('/posts', postRouter);
    app.use('/categories', categoriesRouter);

    app.listen(3000);
    console.log('Express application is up and running on port 3000')
  })
  .catch((error) => console.log('TypeORM connection error: ', error))
