import { Request, Response } from "express";
import { messageToRoom, userToRoom } from "../utils/func-relations-utils";

export default class RelationsCtrl {
    public static addMessageToRoom(req: Request, resp: Response){
        const {id, codigo} = req.body;

        if(messageToRoom(id,codigo)){
            resp.status(201).json({message: 'Created relationship'})
        }
        resp.status(500).json({message: 'Error!'})       
    }

    public static addUserToRoom(req: Request, resp: Response){
        const {email, codigo} = req.body;

        if(userToRoom(email,codigo)){
            resp.status(201).json({message: 'Created relationship'})
        }
        resp.status(500).json({message: 'Error!'})       
    }
    
}
