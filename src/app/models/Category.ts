export class Category {

    private id: number;
    private categorie: string;

    constructor(categorie: string) {
        this.categorie = categorie;
    }

    getId() : number {
        return this.id;
    }

    setId(id: number ) :void {

        this.id = id;
    }

    getCategorie(): string {
        return this.categorie;
    }

    setCategorie(categorie : string) {
        this.categorie = categorie;
    }
}