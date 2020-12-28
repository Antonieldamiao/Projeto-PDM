import { Request, Response } from 'express';
import messageSchema from '../models/message-schema';
import message from '../models/entities/message';
import { toDate } from '../utils/funcs-utils';
import { Users } from '../utils/interfaces';

export default class MessageCtrl {

    public static async add(req: Request, resp: Response): Promise<Response | any> {
        const { corpo, emailUser } = req.body;
        const messages = new message(corpo, new Date(), new Date(), emailUser);

        try {
            const doc = new messageSchema(messages).save();
            return resp.status(201).json({message: 'Sucessso!'});
        }catch(err){
            console.log(err);
            return resp.status(500).json({message: 'Mensagem não Adicionada'});
        }  

    }


    public static async list(req: Request, resp: Response): Promise<Request | any> {
        const doc: Users = await messageSchema.find();
        return resp.status(200).json(doc);
    }

}
