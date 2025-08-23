import express from 'express';

const server = express();

server.get('/', (_, res)=>{
    return res.send('Olá, mundo!');
});

server.listen(3333, ()=> console.log('Servidor rodando!'))