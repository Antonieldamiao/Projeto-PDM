import mongoose from "../config/connection"
import {ObjectId} from 'mongoose';
import User from "../models/entities/user";
import Message from "../models/entities/message";


interface Users {
    _id: ObjectId;
    email: string;
    nome: string;
    sobrenome: string;
    telefone: string;
    dataNascimento: string;
    senha: string;
    foto: string;
}

interface Rooms{
    _id: ObjectId;
    codigo: string;
    nome: string;
    descricao: string;
    assunto: string;
    icone: string;
    usuarios: User[];
    mensagens: Message[];
}

export {
    Users,
    Rooms,
}
