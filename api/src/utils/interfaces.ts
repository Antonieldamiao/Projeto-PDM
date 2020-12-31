import User from "../models/entities/user";
import Message from "../models/entities/message";
import { Document } from "mongoose";


interface Users extends Document {
    email: string;
    nome: string;
    sobrenome: string;
    telefone: string;
    dataNascimento: string;
    senha: string;
    foto: string;
}

interface Rooms extends Document {
    codigo: string;
    nome: string;
    descricao: string;
    assunto: string;
    icone: string;
    usuarios: User[];
    mensagens: Message[];
}

interface Messages extends Document {
    id: string;
    corpo: string;
    data: Date;
    hora: Date;
    emailUser: string;
}

export {
    Users,
    Rooms,
    Messages,
}
