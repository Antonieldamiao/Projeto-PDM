import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import userCtrl from '../controllers/user-ctrl';
import messageCtrl from '../controllers/message-ctrl';
import roomCtrl from '../controllers/room-ctrl';

const routes = Router();
const uploadMulter = multer(uploadConfig);

/* ROTAS USUÁRIO */
routes.post('/classmate/user', userCtrl.search)
routes.post('/classmate/user', uploadMulter.single('foto'), userCtrl.add); //ADICIONAR USUÁRIO
routes.put('/classmate/user', uploadMulter.single('foto'), userCtrl.update) //ATUALIZAR USUÁRIO
routes.delete('/classmate/user/:id', userCtrl.delete); //DELETAR USUÁRIO

/* ROTAS SALA */
routes.get('/classmate/room/:id'); //BUSCAR SALAS POR ID
routes.post('/classmate/room', uploadMulter.single('icone'), roomCtrl.add); //ADICIONAR SALA
routes.put('/classmate/room/:id'); //ATUALIZAR SALA POR ID
routes.delete('/classmate/room/:id', roomCtrl.delete); //DELETAR SALA POR ID

/* ROTAS MENSAGEM */
routes.get('/classmate/message', messageCtrl.list); //BUSCAR MENSAGENS
routes.post('/classmate/message', messageCtrl.add); //ADICIONAR MENSAGENS



export default routes;
