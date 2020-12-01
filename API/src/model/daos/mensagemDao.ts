import { InterfaceMensagemDao } from './interfaces/interfaceMensagemDao';
import MensagemSchema from '../database/models/mensagemSchema';
import { Mensagem } from '../entities/mensagem';

export default class MensagemDao implements InterfaceMensagemDao {
  public async add(mensagem: Mensagem): Promise<boolean> {
    try {
      await MensagemSchema.create(mensagem);
      return true;
    } catch (err) {
      return false;
    }
  }

  public async remove(mensagem: Mensagem): Promise<boolean> {
    try {
      await MensagemSchema.deleteOne({
        id: mensagem.getId,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  public async search(key: string): Promise<Mensagem | any> {
    try {
      const documento = await MensagemSchema.findOne({ id: key });
      return documento;
    } catch (err) {
      return null;
    }
  }

  public async update(mensagem: Mensagem): Promise<boolean> {
    try {
      await MensagemSchema.updateOne(
        { id: mensagem.getId },
        {
          corpo: mensagem.getCorpo,
          data: mensagem.getData,
          hora: mensagem.getHora,
          emailUsuario: mensagem.getEmailUsuario,
        },
      );
      return true;
    } catch (err) {
      return false;
    }
  }

  public async list(): Promise<Mensagem[] | any> {
    try {
      const documento = await MensagemSchema.find();
      return documento;
    } catch (err) {
      return null;
    }
  }
}
