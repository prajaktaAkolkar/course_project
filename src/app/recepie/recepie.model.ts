import { Ingredient } from "../shared/ingredient.model";

export class Recepie {
    public id:number;
    public name:string;
    public description:string;
    public imgPath:string;
    public ingredients:Ingredient[];

    constructor( name:string, description:string, imgPath:string, ingredients:Ingredient[] ) {
        this.name = name;
        this.description = description;
        this.imgPath =imgPath;
        this.ingredients = ingredients;
    }
}