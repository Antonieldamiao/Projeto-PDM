import Usuario from '../entities/usuario';
import { InterfaceUsuarioDao } from './interfaces/interfaceUsuarioDao';
import UsuarioSchema from '../database/models/usuarioSchema';

export default class UsuarioDao implements InterfaceUsuarioDao {
  public async add(usuario: Usuario): Promise<boolean> {
    try {
      await UsuarioSchema.create(usuario);
      return true;
    } catch (err) {
      return false;
    }
  }

  public async remove(usuario: Usuario): Promise<boolean> {
    try {
      await UsuarioSchema.deleteOne({
        email: usuario.getEmail,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  public async search(key: string): Promise<Usuario | any> {
    try {
      const documento = await UsuarioSchema.findOne({ email: key });
      return documento;
    } catch (err) {
      return null;
    }
  }

  public async update(usuario: Usuario): Promise<boolean> {
    try {
      await UsuarioSchema.updateOne(
        { email: usuario.getEmail },
        {
          nome: usuario.getNome,
          sobrenome: usuario.getSobrenome,
          telefone: usuario.getTelefone,
          dataNascimento: usuario.getDataNascimento,
          senha: usuario.getSenha,
          foto: usuario.getFoto,
        },
      );
      return true;
    } catch (err) {
      return false;
    }
  }

  public async list(): Promise<Usuario[] | any> {
    try {
      const documento = await UsuarioSchema.find();
      return documento;
    } catch (err) {
      return null;
    }
  }
}
