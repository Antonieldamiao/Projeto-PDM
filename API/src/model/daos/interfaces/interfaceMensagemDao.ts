import { Mensagem } from '../../entities/mensagem';

export interface InterfaceMensagemDao {
  add(mensagem: Mensagem): Promise<boolean>;
  remove(mensagem: Mensagem): Promise<boolean>;
  search(key: string): Promise<Mensagem | any>;
  update(mensagem: Mensagem): Promise<boolean>;
  list(): Promise<Mensagem[] | any>;
}
