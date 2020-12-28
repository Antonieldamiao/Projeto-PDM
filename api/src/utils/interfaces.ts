import mongoose from "../config/connection"
import {ObjectId} from 'mongoose';


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

export {
    Users,
}
