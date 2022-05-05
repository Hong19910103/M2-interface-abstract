import {Edible} from "./Edible";

export abstract class Fruit implements Edible { // tao lop abtract tu interface edible

    abstract howToEat(): string;

}