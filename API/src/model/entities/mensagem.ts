import { v4 as uuidv4 } from 'uuid';

export default class Mensagem {
  private id: string;

  private corpo: string;

  private data: Date;

  private hora: Date;

  private emailUsuario: string;

  constructor(corpo: string, data: Date, hora: Date, emailUsuario: string) {
    this.id = uuidv4();
    this.corpo = corpo;
    this.data = data;
    this.hora = hora;
    this.emailUsuario = emailUsuario;
  }

  public get getId(): string {
    return this.id;
  }

  public get getCorpo(): string {
    return this.corpo;
  }

  public get getData(): Date {
    return this.data;
  }

  public get getHora(): Date {
    return this.hora;
  }

  public get getEmailUsuario(): string {
    return this.emailUsuario;
  }
}
