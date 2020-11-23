import express from "express";

const server = express();
server.use(express.json());

server.listen("8080", () => {
  console.log("RODANDO NA PORTA 8080!");
});
