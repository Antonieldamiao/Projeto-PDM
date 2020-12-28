import express from 'express';
import routes from './routes/index';

const server = express();
server.use(express.json());
server.use(routes);

server.listen('8080', ()=>{
    console.log('RODANDO NA PORTA 8080!');
});
