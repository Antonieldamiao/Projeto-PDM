import { Sala } from '../../entities/sala';

export interface InterfaceSalaDao {
  add(sala: Sala): Promise<boolean>;
  remove(sala: Sala): Promise<boolean>;
  search(key: string): Promise<Sala | any>;
  update(sala: Sala): Promise<boolean>;
  list(): Promise<Sala[] | any>;
}
