import connection from '../config/connection';

const messageSchema = new connection.Schema(
    {
        id: { type: String, index: true, unique: true },
        corpo: { type: String },
        data: { type: Date },
        hora: { type: Date },
        emailUser: { type: String },

    }, { versionKey: false }
);

export default connection.model('message', messageSchema);
