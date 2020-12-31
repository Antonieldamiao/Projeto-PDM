import messageSchema from "../models/message-schema";
import roomSchema from "../models/room-schema";
import userSchema from "../models/user-schema"
import { Messages, Rooms, Users } from "./interfaces"

const userToRoom = async (emailUser: string, codeRoom: string) => {
    const user: Users | any = await userSchema.findOne({ email: emailUser });
    const room: Rooms | any = await roomSchema.findOne({ codigo: codeRoom });

    room.usuarios.push(user);
    try {
        await room.save();
        return true;
    } catch (err) {
        return false;
    }
}


const messageToRoom = async (idMessage: string, codeRoom: string) => {
    const message: Messages | any = await messageSchema.findOne({ id: idMessage });
    console.log(message)
    const room: Rooms | any = await roomSchema.findOne({ codigo: codeRoom });

    room.mensagens.push(message);
    try {
        await room.save();
        return true;
    } catch (err) {
        return false;
    }
}

export {
    userToRoom,
    messageToRoom,
}
