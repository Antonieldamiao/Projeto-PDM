import MongoConfig from '../mongoConfig';

const mensagemSchema = new MongoConfig.Schema(
  {
    id: { type: String, index: true, unique: true },
    corpo: { type: String },
    data: { type: Date },
    hora: { type: Date },
    emailUsuario: { type: String },
  },
  { versionKey: false },
);

export default MongoConfig.model('mensagens', mensagemSchema);
