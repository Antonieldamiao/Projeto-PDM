import { Request, Response } from 'express';
import roomSchema from '../models/room-schema';
import Room from '../models/entities/room';
import User from '../models/entities/user';
import { Rooms } from '../utils/interfaces';

export default class RoomCtrl {

    public static async add(req: Request, resp: Response): Promise<Response | any> {
        const { nome, descricao, assunto } = req.body;
        const room = new Room(nome, descricao, assunto, req.file.filename);
        try {
            const doc = await new roomSchema(room).save();
            return resp.status(201).json({ message: 'Sucesso!' });
        } catch (err) {
            return resp.status(500).json({ message: 'Erro!' });
        }
    }

    public static async delete(req: Request, resp: Response): Promise<Response | any> {
        const codigo = req.params.id;
        try {
            const doc = await roomSchema.deleteOne({ codigo: codigo });
            if (doc !=null) {
                return resp.status(200).json({ message: 'Sucesso!' })
            }
            return resp.status(500).json({ message: 'Erro!' })

        } catch (err) {
            return resp.status(500).json({message: 'Erro!'})
        }
    }

    public static async search(req: Request, resp: Response): Promise<Response | any> {
        const id = req.params.id;
        try{
            const rooms: Rooms[] = await roomSchema.find({ $text: { $search: id}});
            return resp.status(200).json(rooms);
        }catch(err){
            resp.status(500).json({message: 'Erro!'});
        }

    }

    public static async update(req: Request, resp: Response): Promise<Response | any> {

    }

    public static async list(req: Request, resp: Response): Promise<Response | any> {
        try{
            const doc: Rooms[] = await roomSchema.find();
            return resp.status(200).json(doc);            
        }catch(err){
            return resp.status(200).json({message: 'Erro!'}); 
        }
    }
}
