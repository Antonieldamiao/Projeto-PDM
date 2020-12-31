import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import userCtrl from '../controllers/user-ctrl';
import messageCtrl from '../controllers/message-ctrl';
import roomCtrl from '../controllers/room-ctrl';
import relationsCtrl from '../controllers/relations-ctrl';


const routes = Router();
const uploadMulter = multer(uploadConfig);

/* ROTAS USUÁRIO */
routes.get('/classmate/user/:id', userCtrl.search)
routes.post('/classmate/user', uploadMulter.single('foto'), userCtrl.add); //ADICIONAR USUÁRIO
routes.put('/classmate/user', uploadMulter.single('foto'), userCtrl.update) //ATUALIZAR USUÁRIO
routes.delete('/classmate/user/:id', userCtrl.delete); //DELETAR USUÁRIO

/* ROTAS SALA */
routes.get('/classmate/room/:id', roomCtrl.search); //BUSCAR SALAS POR ID
routes.post('/classmate/room', uploadMulter.single('icone'), roomCtrl.add); //ADICIONAR SALA
routes.delete('/classmate/room/:id', roomCtrl.delete); //DELETAR SALA POR ID

/* ROTAS MENSAGEM */
routes.get('/classmate/message', messageCtrl.list); //BUSCAR MENSAGENS
routes.get('/classmate/message/:id', messageCtrl.search);
routes.post('/classmate/message', messageCtrl.add); //ADICIONAR MENSAGENS

/* ROTAS DOS RELACIONAMENTOS */
routes.post('/classmate/relation/messageroom', relationsCtrl.addMessageToRoom);
routes.post('/classmate/relation/useroom', relationsCtrl.addUserToRoom);



export default routes;
