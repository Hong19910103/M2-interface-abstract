import {ComparableCircle} from "./ComparableCircle";

let circles = [];

circles[0] = new ComparableCircle(6);
circles[1] = new ComparableCircle(12);
circles[2] = new ComparableCircle(4);
circles[3] = new ComparableCircle(20);

let result = circles[0].compareTo(circles[2])

if (result===1){
    console.log("the current circle is larger")
} else {
    console.log("the current circle smaller")
}