import { Messages, Rooms, Users } from "./interfaces";
import { dateToString } from './funcs-utils';

const userView = {
    view(user: Users) {
        return {
            email: user.email,
            nome: user.nome,
            sobrenome: user.sobrenome,
            telefone: user.telefone,
            dataNascimento: dateToString(new Date(user.dataNascimento)),
            foto: `http://10.0.0.121:8080/upload/${user.foto}`
        }
    }
}

const roomView = {
    view(room: Rooms) {
        return {
            codigo: room.codigo,
            nome: room.nome,
            assunto: room.assunto,
            descricao: room.descricao,
            icone: `http://10.0.0.121:8080/upload/${room.icone}`,
            usuarios: room.usuarios,
            mensagens: room.mensagens,
        }
    }
}


const messageView = {
    view(message: Messages) {
        return {
            id: message.id,
            corpo: message.corpo,
            data: dateToString(new Date(message.data)),
            hora: message.hora,
            emailUsuario: message.emailUser,
        }
    }
}

export {
    userView,
    roomView,
    messageView,
} 
