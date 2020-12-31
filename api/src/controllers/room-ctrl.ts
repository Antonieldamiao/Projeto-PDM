import { Request, Response } from 'express';
import roomSchema from '../models/room-schema';
import Room from '../models/entities/room';
import User from '../models/entities/user';
import { Rooms } from '../utils/interfaces';
import { roomView } from '../utils/views';

export default class RoomCtrl {

    public static async add(req: Request, resp: Response): Promise<Response | any> {
        const { nome, descricao, assunto } = req.body;
        const room = new Room(nome, descricao, assunto, req.file.filename);
        try {
            const doc: Rooms | any = await new roomSchema(room).save();
            return resp.status(201).json(roomView.view(doc));
        } catch (err) {
            console.log(err)
            return resp.status(500).json({ message: 'Name exist!' });
        }
    }

    public static async delete(req: Request, resp: Response): Promise<Response | any> {
        const codigo = req.params.id;
        try {
            const doc = await roomSchema.deleteOne({ codigo: codigo });
            if (doc.deletedCount!=0) {
                return resp.status(200).json({ message: 'Delected room!' })
            }
            return resp.status(500).json({ message: `Informed room doesn't exist!` })
        } catch (err) {
            return resp.status(500).json({message: 'Error!'})
        }
    }

    public static async search(req: Request, resp: Response): Promise<Response | any> {
        const text = req.params.id;
        try{
            const doc: Rooms[] | any[] = await roomSchema.find({ $text: { $search: text}});
            if(doc.length>0){
                return resp.status(200).json(doc.map(d => {return roomView.view(d)}));                
            }
            return resp.status(500).json({message: 'There are no rooms'});
        }catch(err){
            resp.status(500).json({message: 'Error!'});
        }
    }

    public static async list(req: Request, resp: Response): Promise<Response | any> {
        try{
            const doc: Rooms[] | any[] = await roomSchema.find();
            return resp.status(200).json(doc.map(d => {return roomView.view(d)}));            
        }catch(err){
            return resp.status(500).json({message: 'Error!'}); 
        }
    }
}
