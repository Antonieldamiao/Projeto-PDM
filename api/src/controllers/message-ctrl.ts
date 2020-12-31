import { Request, Response } from 'express';
import messageSchema from '../models/message-schema';
import message from '../models/entities/message';
import { Messages, Users } from '../utils/interfaces';
import { messageView } from '../utils/views';

export default class MessageCtrl {

    public static async add(req: Request, resp: Response): Promise<Response | any> {
        const { corpo, emailUser } = req.body;
        const messages = new message(corpo, new Date(), new Date(), emailUser);

        try {
            const doc: Messages | any = await new messageSchema(messages).save();
            return resp.status(201).json(messageView.view(doc));
        }catch(err){
            console.log(err);
            return resp.status(500).json({message: 'Mensagem não Adicionada'});
        }  
    }

    public static async list(req: Request, resp: Response): Promise<Request | any> {
        const doc: Messages[] | any[] = await messageSchema.find();
        return resp.status(200).json(doc.map(d => {return messageView.view(d)}));
    }

    public static async search(req: Request, resp: Response): Promise<Response | any>{
        const email = req.params.id;
        try{
            const doc: Messages[] | any[] = await messageSchema.find({emailUser: email});
            if(doc.length!=0){
                resp.status(200).json(doc.map(d => {return messageView.view(d)}));
            }
            resp.status(500).json({message: 'User has not sent any message'});
        }catch(err){
            resp.status(500).json({message: 'Error!'});
        }
    }

}
