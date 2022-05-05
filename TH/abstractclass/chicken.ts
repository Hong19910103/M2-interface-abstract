import {Animal} from "./Animal";
import {Edible} from "./Edible";
export class Chicken extends Animal implements Edible {// tao lop chiken tu lop truu tuong animal

    makeSound() {
        return "Chicken : cluck cluck   "
    }

    howToEat(): string {
        return "could be fried"
    }

}