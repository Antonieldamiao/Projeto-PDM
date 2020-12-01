import { Router } from 'express';
import UsuarioCtrl from '../controllers/usuarioCtrl';

const routes = Router();

/* ROTAS DE MENSAGENS */
routes.get('/classmate/mes/:id');
routes.get('/classmate/mes');
routes.post('/classmate/mes');
routes.put('/classmate/mes/:id');
routes.delete('/classmate/mes/:id');

/* ROTAS DE USUÁRIO */
routes.get('/classmate/us/:id');
routes.get('/classmate/us');
routes.post('/classmate/us', UsuarioCtrl.add);
routes.put('/classmate/us/:id');
routes.delete('/classmate/us/:id');

/* ROTAS DE SALAS */
routes.get('/classmate/sal/:id');
routes.get('/classmate/sal');
routes.post('/classmate/sal');
routes.put('/classmate/sal/:id');
routes.delete('/classmate/sal/:id');

export default routes;
