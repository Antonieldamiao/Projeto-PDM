import { Request, Response } from 'express';
import UsuarioDao from '../model/daos/usuarioDao';
import Usuario from '../model/entities/usuario';

export default class UsuarioCtrl {
  private static userDao = new UsuarioDao();

  public static add(req: Request, resp: Response): Response<any> {
    const {
      email,
      nome,
      sobrenome,
      telefone,
      dataNascimento,
      senha,
      foto,
    } = req.body;
    const usuario = new Usuario(
      email,
      nome,
      sobrenome,
      telefone,
      dataNascimento,
      senha,
      foto,
    );
    if (UsuarioCtrl.userDao.add(usuario)) {
      return resp.status(204).json({ MENSAGEM: 'FOI' });
    }
    return resp.status(500).json({ MENSAGEM: 'FOI MAL' });
  }

  public static remove(req: Request, resp: Response): Response<any> {}

  public static search(req: Request, resp: Response): Response<any> {}

  public static update(req: Request, resp: Response): Response<any> {}

  public static list(req: Request, resp: Response): Response<any> {}
}
