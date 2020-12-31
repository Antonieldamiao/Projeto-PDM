import express from 'express';
import routes from './routes/index';
import path from 'path';

const server = express();
server.use(express.json());
server.use(routes);
server.use('/upload',express.static(path.join(__dirname,'..','upload')))

server.listen('8080', ()=>{
    console.log('RODANDO NA PORTA 8080!');
});
