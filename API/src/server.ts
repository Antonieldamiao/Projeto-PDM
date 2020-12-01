import express from 'express';
import Router from './routes/index';

const server = express();
server.use(express.json());
server.use(Router);

server.listen('8080', () => {
  console.log('RODANDO NA PORTA 8080!');
});
