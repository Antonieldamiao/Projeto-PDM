import { v4 as uuidv4 } from 'uuid';
import { Mensagem } from './mensagem';
import { Usuario } from './usuario';

export default class Sala {
  private codigo: string;

  private nome: string;

  private descricao: string;

  private assunto: string;

  private icone: string;

  private usuarios: Usuario[];

  private mensagens: Mensagem[];

  constructor(nome: string, descricao: string, assunto: string, icone: string) {
    this.codigo = uuidv4();
    this.nome = nome;
    this.descricao = descricao;
    this.assunto = assunto;
    this.icone = icone;
    this.mensagens = [];
    this.usuarios = [];
  }

  public get getCodigo(): string {
    return this.codigo;
  }

  public get getNome(): string {
    return this.nome;
  }

  public set setNome(nome: string) {
    this.nome = nome;
  }

  public get getDescricao(): string {
    return this.descricao;
  }

  public set setDescricao(descricao: string) {
    this.descricao = descricao;
  }

  public get getAssunto(): string {
    return this.assunto;
  }

  public set setAssunto(assunto: string) {
    this.assunto = assunto;
  }

  public get getIcone(): string {
    return this.icone;
  }

  public set setIcone(icone: string) {
    this.icone = icone;
  }

  public get getMensagens(): Array<Mensagem> {
    return this.mensagens;
  }

  public get getUsuarios(): Array<Usuario> {
    return this.usuarios;
  }

  public addMensagem(mensagem: Mensagem): boolean {
    return this.mensagens.push(mensagem) > 0;
  }

  public addUsuario(usuario: Usuario): boolean {
    return this.usuarios.push(usuario) > 0;
  }
}
