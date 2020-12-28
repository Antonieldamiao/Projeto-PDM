import { Schema, SchemaType } from 'mongoose';
import connection from '../config/connection';

const userSchema = new connection.Schema(
    {
        email: { type: String, index: true, unique: true },
        nome: { type: String },
        sobrenome: { type: String },
        telefone: { type: String },
        dataNascimento: { type: Date },
        senha: { type: String },
        foto: { type: String },
    }, { versionKey: false },
);

export default connection.model('user', userSchema);
