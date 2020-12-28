import { Request, response, Response } from 'express';
import { removeFile, toDate } from '../utils/funcs-utils';
import User from '../models/entities/user';
import userSchema from '../models/user-schema';
import { Document } from 'mongoose';
import { Users } from '../utils/interfaces';


export default class UserCtrl {


    public static async add(req: Request, resp: Response): Promise<Response | any> {
        const {
            email,
            nome,
            sobrenome,
            telefone,
            dataNascimento,
            senha,
        } = req.body;

        const user = new User(email, nome, sobrenome, telefone, toDate(dataNascimento),
            senha, req.file.filename);

        try {
            const doc = await new userSchema(user).save();
            return resp.status(201).json({ message: 'Adicionado' });
        } catch (err) {
            console.log(err);
            return resp.status(500).json({ message: 'Erro ao salvar' });
        }
    }


    public static async delete(req: Request, resp: Response): Promise<Response | any> {
        const key = req.params.id;
        try {
            await userSchema.deleteOne({ email: key });
            return resp.status(200).json({ message: 'Sucesso ao excluir' });
        } catch (err) {
            console.log(err);
            return resp.status(500).json({ message: 'Erro ao excluir' });
        }
    }


    public static async update(req: Request, resp: Response): Promise<Request | any> {
        const {
            email,
            nome,
            sobrenome,
            telefone,
            dataNascimento,
            senha,
        } = req.body;

        console.log(email)
        const user: Users = await UserCtrl.searchAux(email);
        removeFile(user.foto);

        try {
            await userSchema.replaceOne({ email: email }, {
                email: email,
                nome: nome,
                sobrenome: sobrenome,
                telefone: telefone,
                dataNascimento: toDate(dataNascimento),
                senha: senha,
                foto: req.file.filename,
            });
            return resp.status(200).json({ message: 'Usuario atualizado' });
        } catch (err) {
            console.log(err);
            return resp.status(200).json({ message: 'Erro ao atualizar' });
        }
    }

    public static async search(req: Request, resp: Response): Promise<Response | any> {
        const { email, senha } = req.body;
        const doc: Users = await userSchema.findOne({ email: email });
        console.log(doc);
        if ((doc != null) && (doc.email == email) && (doc.senha == senha)) {
            return resp.status(200).json({ message: 'Ok!' });
        }
        return resp.status(500).json({ message: 'Senha ou email inválidos' });
    }

    private static async searchAux(key: string): Promise<Document<Users> | null> {
        const user = userSchema.findOne({ email: key });
        if (user != null) return user;
        return user;
    }
}
