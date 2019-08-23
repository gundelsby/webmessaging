import { server } from './server/index.js';
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('client'));

server(app, PORT);
