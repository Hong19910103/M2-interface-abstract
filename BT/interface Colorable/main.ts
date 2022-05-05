import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Square} from "./Square";
import {Rectangle} from "./Rectangle";
import {Cylinder} from "./Cylinder";

let Shapes = [];

Shapes[0] = new Circle("tron", 8);
Shapes[1] = new Square("vuong", 9);
Shapes[2] = new Rectangle(8, 4, "tron");
Shapes[3] = new Cylinder("tru", 8, 9);

Shapes.forEach((item,index)=>{
    console.log(item.calculateArea());
    if(item instanceof Square){
        console.log(item.howToColor());
    }
})





