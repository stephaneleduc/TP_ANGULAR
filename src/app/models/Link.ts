export class Link {

    private id_user: number;
    private id_evenement: number;

    public static empty() {

        return new Link (null, null);
    }

    constructor (id_user:number, id_evenement:number) {

        this.id_user = id_user;
        this.id_evenement = id_evenement;
    }


    getId_user() : number {

        return this.id_user;
    }

    setId_user (id_user : number) {
        this.id_user = id_user;
    }

    getId_evenement(): number {
        return this.id_evenement;
    }

    setId_evenement(id_evenement) : void {
        this.id_evenement = id_evenement;
    }
}