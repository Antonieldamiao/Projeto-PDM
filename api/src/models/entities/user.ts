import { Document } from "mongoose";

export default class User {

    private email: string;
    private nome: string;
    private sobrenome: string;
    private telefone: string;
    private dataNascimento: Date;
    private senha: string;
    private foto: string;


    constructor(email: string, nome: string, sobrenome: string, telefone: string,
        dataNascimento: Date, senha: string, foto: string){
            this.email = email;
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.telefone = telefone;
            this.dataNascimento = dataNascimento;
            this.senha = senha;
            this.foto = foto;
    }

    public getEmail(): string {
        return this.email;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getSobrenome(): string {
        return this.sobrenome;
    }

    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setSenha(senha: string): void {
        this.senha = senha;
    }

    public getFoto(): string {
        return this.foto;
    }

    public setFoto(foto: string): void {
        this.foto = foto;
    }
}
