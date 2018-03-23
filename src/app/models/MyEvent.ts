export class MyEvent {


    private id: number;
    private nom: string;
    private description: string;
    private date: string;
    private lieu: string;
    private id_categorie: number;
    private isParticipated : boolean;

    public static empty() {
        return new MyEvent("","","","", 1, false);
    }


    constructor(

        nom: string,
        description: string,
        date: string,
        lieu: string,
        id_categorie: number,
        isParticipated: boolean

    ) {

        this.nom = nom;
        this.description = description;
        this.date = date;
        this.lieu = lieu;
        this.id_categorie = id_categorie;


    }

    getId() : number {
        return this.id;
    }

    setId(id: number) : void {
        this.id = id;
    }

    getNom(): string {
        return this.nom;
    }

    setNom( nom: string): void {
        this.nom = nom;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string) : void {
        this.description = description;
    }

    getDate() : string {
        return this.date;
    }

    setDate(date: string) : void {
        this.date = date;
    }

    getLieu() : string {
        return this.lieu;
    }

    setLieu(lieu: string) : void{
        this.lieu = lieu;
    }

    getId_categorie(): number {
        return this.id_categorie;
    }

    setId_categorie (id_categorie: number) : void {
        this.id_categorie = id_categorie;
    }


    getIsParticipated() : boolean {
        return this.isParticipated;
    }


    setIsParticpated( isParticpated: boolean) : void {

        this.isParticipated = this.isParticipated;

    }

}

export interface MyEventLiteral {

    id: number,
    nom: string,
    description: string,
    date: string,
    lieu: string,
    id_categorie: number,
    isParticipated: boolean

}