import { v4 as uuidv4 } from 'uuid';
import Message from "./message";
import User from "./user";

export default class Room {

    private codigo: string;
    private nome: string;
    private descricao: string;
    private assunto: string;
    private icone: string;
    private users: User[];
    private messages: Message[];

    constructor(nome: string, descricao: string, assunto: string, icone: string) {
        this.codigo = uuidv4();
        this.nome = nome;
        this.descricao = descricao;
        this.assunto = assunto;
        this.icone = icone;
        this.users = [];
        this.messages = [];
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getAssunto(): string {
        return this.assunto;
    }

    public setAssunto(assunto: string): void {
        this.assunto = assunto;
    }

    public getIcone(): string {
        return this.icone;
    }

    public setIcone(icone: string): void {
        this.icone = icone;
    }

    public addUser(user: User): boolean {
        this.users.push(user);
        return true;
    }

    public addMessage(message: Message): boolean {
        this.messages.push(message);
        return true;
    }


}
