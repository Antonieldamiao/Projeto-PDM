export default class Usuario {
  private email: string;

  private nome: string;

  private sobrenome: string;

  private telefone: string;

  private dataNascimento: Date;

  private senha: string;

  private foto: string;

  constructor(
    email: string,
    nome: string,
    sobrenome: string,
    telefone: string,
    dataNascimento: Date,
    senha: string,
    foto: string,
  ) {
    this.email = email;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.telefone = telefone;
    this.dataNascimento = dataNascimento;
    this.senha = senha;
    this.foto = foto;
  }

  public get getEmail(): string {
    return this.email;
  }

  public set setEmail(email: string) {
    this.email = email;
  }

  public get getNome(): string {
    return this.nome;
  }

  public set setNome(nome: string) {
    this.nome = nome;
  }

  public get getSobrenome(): string {
    return this.sobrenome;
  }

  public set setSobrenome(sobrenome: string) {
    this.sobrenome = sobrenome;
  }

  public get getTelefone(): string {
    return this.telefone;
  }

  public set setTelefone(telefone: string) {
    this.telefone = telefone;
  }

  public get getDataNascimento(): Date {
    return this.dataNascimento;
  }

  public set setDataNascimento(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }

  public get getSenha(): string {
    return this.senha;
  }

  public set setSenha(senha: string) {
    this.senha = senha;
  }

  public get getFoto(): string {
    return this.foto;
  }

  public set setFoto(foto: string) {
    this.foto = foto;
  }
}
