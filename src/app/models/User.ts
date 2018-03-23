export class User {

    private id: number;
    private username: string;
    private password: string;


    constructor( username:string, password: string ) {

        this.username = username;
        this.password = password;
    }

    public static empty() {
        return new User("","");
    }

    getId() : number {
        return this.id;
    }

    setId( id : number) : void {
        this.id = id;
    }

    getUsername() : string {
        return this.username;
    }

    setUsername( username: string ) : void {
        this.username = username;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword( password: string): void {
        this.password = password;
    }

}
