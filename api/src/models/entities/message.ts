import {v4 as uuidv4} from 'uuid';

export default class Message {
    private id: string;
    private corpo: string;
    private data: Date;
    private hora: Date;
    private emailUser: string;

    constructor(corpo: string, data: Date, hora: Date, emailUser: string){
        this.id = uuidv4();
        this.corpo = corpo;
        this.data = data;
        this.hora = hora;
        this.emailUser = emailUser;
    }

    public getId(): string {
        return this.id;
    }

    public getCorpo(): string {
        return this.corpo;
    }

    public setCorpo(corpo: string): void {
        this.corpo = corpo;
    }

    public getData(): Date {
        return this.data;
    }

    public setData(data: Date): void {
        this.data = data;
    }

    public getHora(): Date {
        return this.hora;
    }

    public setHora(hora: Date): void {
        this.hora = hora;
    }

    public getEmailUser(): string {
        return this.emailUser;
    }

    public setEmailUser(emailUser: string): void {
        this.emailUser = emailUser;
    }


    
}
