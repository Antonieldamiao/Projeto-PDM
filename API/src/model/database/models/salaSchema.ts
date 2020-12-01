import MongoConfig from '../mongoConfig';

const salaSchema = new MongoConfig.Schema(
  {
    codigo: { type: String, index: true, unique: true },
    nome: { type: String, unique: true },
    descricao: { type: String },
    assunto: { type: String },
    icone: { type: String },
    usuarios: { type: Array },
    mensagens: { type: Array },
  },
  { versionKey: false },
);

export default MongoConfig.model('salas', salaSchema);
