import { Request, response, Response } from 'express';
import { removeFile, toDate } from '../utils/funcs-utils';
import User from '../models/entities/user';
import userSchema from '../models/user-schema';
import { Document } from 'mongoose';
import { Users } from '../utils/interfaces';
import { userView } from '../utils/views';


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
            const doc: Users | any = await new userSchema(user).save();
            return resp.status(201).json(userView.view(doc));
        } catch (err) {
            console.log(err);
            return resp.status(500).json({ message: 'Error!' });
        }
    }


    public static async delete(req: Request, resp: Response): Promise<Response | any> {
        const key = req.params.id;
        try {
            const user = await userSchema.deleteOne({ email: key });
            if (user.deletedCount == 0) {
                return resp.status(500).json({ message: `Informed user doesn't exist!` });
            }
            return resp.status(200).json({ message: 'Deleted user!' });

        } catch (err) {
            console.log(err);
            return resp.status(500).json({ message: 'Error!' });
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
        const user: Users | any = await UserCtrl.getImage(email);
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
            return resp.status(200).json({ message: 'OK!' });
        } catch (err) {
            console.log(err);
            return resp.status(200).json({ message: 'Error!' });
        }
    }

    public static async search(req: Request, resp: Response): Promise<Response | any> {
        const { email, senha } = JSON.parse(req.params.id);
        console.log(email)
        console.log(senha)

        const doc: Users | any = await userSchema.findOne({ email: email });

        if ((doc != null) && (doc.email == email) && (doc.senha == senha)) {
            return resp.status(200).json(userView.view(doc));
        }
        return resp.status(500).json({ message: 'Invalid e-mail and password!' });
    }

    private static async getImage(key: string): Promise<Document<Users> | null> {
        const user = userSchema.findOne({ email: key });
        if (user != null) return user;
        return user;
    }
}
