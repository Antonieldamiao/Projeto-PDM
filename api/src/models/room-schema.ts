import connection from '../config/connection';

const roomSchema = new connection.Schema(
    {
        codigo: { type: String, index: true, unique: true },
        nome: { type: String, unique: true },
        descricao: { type: String },
        assunto: { type: String },
        icone: { type: String },
        usuarios: { type: Array },
        mensagens: { type: Array },
    }, { versionKey: false }
);

roomSchema.index({ nome: 'text', descricao: 'text', assunto: 'text' }, 
{ default_language: 'none' });

export default connection.model('room', roomSchema);
