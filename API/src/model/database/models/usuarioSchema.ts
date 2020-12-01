import MongoConfig from '../mongoConfig';

const usuarioSchema = new MongoConfig.Schema(
  {
    email: { type: String, index: true, unique: true },
    nome: { type: String },
    sobrenome: { type: String },
    telefone: { type: String },
    dataNascimento: { type: Date },
    senha: { type: String },
    foto: { type: String },
  },
  { versionKey: false },
);

export default MongoConfig.model('usuarios', usuarioSchema);
