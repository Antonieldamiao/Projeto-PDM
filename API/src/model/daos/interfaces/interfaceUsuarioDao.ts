import { Usuario } from '../../entities/usuario';

export interface InterfaceUsuarioDao {
  add(usuario: Usuario): Promise<boolean>;
  remove(usuario: Usuario): Promise<boolean>;
  search(key: string): Promise<Usuario | any>;
  update(usuario: Usuario): Promise<boolean>;
  list(): Promise<Usuario[] | any>;
}
