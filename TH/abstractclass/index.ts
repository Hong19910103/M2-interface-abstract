import {Chicken} from "./chicken";
import {Tiger} from "./Tiger";
import {Apple} from "./Apple";
import {Orange} from "./Orange";


console.log(" -----Animal------------");
let animals = [];// tao 1 mang animal rong

animals[0] = new Tiger(); // khoi tao doi tuong tiger cho vao mang
animals[1] = new Chicken();// khoi tao doi tuong chiken cho vao mang

animals.forEach((item, index) => {  // duyet qua cac phan tu cua mang va in ra thuoc tinh cac phan tu trong mang ay
    console.log(item.makeSound());
    if (item instanceof Chicken){ // neu phan tu duyet qua co gia tri la chiken thi in them thuoc tinh howToeat
        console.log(item.howToEat());
    }
})

console.log("----Fruit-----");

let fruits = []; // tao mang trai cay rong

fruits[0]= new Apple();// khoi tao doi tuong cho vao mang
fruits[1]= new Orange();

fruits.forEach((item,index)=>{ // duyet qua mang fruit in ra cac phan tu co thuoc tinh howtoeat
    console.log(item.howToEat());
})