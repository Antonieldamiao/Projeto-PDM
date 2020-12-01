import { InterfaceSalaDao } from './interfaces/interfaceSalaDao';
import SalaSchema from '../database/models/salaSchema';
import Sala from '../entities/sala';

export default class SalaDao implements InterfaceSalaDao {
  public async add(sala: Sala): Promise<boolean> {
    try {
      await SalaSchema.create(sala);
      return true;
    } catch (err) {
      return false;
    }
  }

  public async remove(sala: Sala): Promise<boolean> {
    try {
      await SalaSchema.deleteOne({
        codigo: sala.getCodigo,
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  public async search(key: string): Promise<Sala | any> {
    try {
      const documento = await SalaSchema.findOne({ nome: key });
      return documento;
    } catch (err) {
      return null;
    }
  }

  public async update(sala: Sala): Promise<boolean> {
    try {
      await SalaSchema.updateOne(
        { codigo: sala.getCodigo },
        {
          nome: sala.getNome,
          descricao: sala.getDescricao,
          assunto: sala.getAssunto,
          icone: sala.getIcone,
          usuarios: sala.getUsuarios,
          mensagens: sala.getMensagens,
        },
      );
      return true;
    } catch (err) {
      return false;
    }
  }

  public async list(): Promise<Sala[] | any> {
    try {
      const documento = await SalaSchema.find();
      return documento;
    } catch (err) {
      return null;
    }
  }
}
