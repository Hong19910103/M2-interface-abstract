class Stack<T> { // phát triển một lớp stack
    private elements: T[] = []; // khai báo thuộc tính element của lớp có kiểu dữ liệu genetics

    constructor(private size: number) { //khởi tạo đối tương có thuộc tính size
    }

    isEmpty(): boolean {  // phương thức  trả về chuỗi rỗng
        return this.elements.length === 0;
    }

    isFull(): boolean { // phương thức trả về chuỗi có số phần tử size
        return this.elements.length === this.size;
    }

    push(element: T): void { // thêm phần tử nếu chuỗi rỗng
        // if (this.elements.length === this.size)
         if(this.isFull()){ // kiểm tra chuỗi có chỗ trống hay ko
            throw new Error('The stack is overflow!'); // chuỗi đầy trả về lỗi
        }
        this.elements.push(element); // chưa đầy trả push thêm phần tử vào

    }

    pop(): T {
        // if (this.elements.length == 0) {
        if(this.isEmpty()){  // kiểm tra chuỗi rong hay khong
            throw new Error('The stack is empty!');// chuỗi rỗng trả về chuỗi rỗng
        }
        return this.elements.pop(); // chuỗi còn phần tử cắt đi phần tử ấy
    }
}
// let numbers = new Stack<number>(5); //tạo 1 ngăn xếp kiểu number
//
// function randBetween(low: number, high: number): number { // xây dựng hàm trả   về một số ngẫu nhiên giữa hai số low và high
//     return Math.floor(Math.random() * (high - low + 1) + low);
// }
//
// while (!numbers.isFull()) { // tạo so ngau nhien đẩy vào ngăn xếp
//     let n = randBetween(1, 10); // tạo số ngẫu nhiên trong khoảng 1-10
//     console.log(`Push ${n} into the stack.`)
//     numbers.push(n);
// }
//
// while (!numbers.isEmpty()) {
//     let n = numbers.pop();// cắt các phần tử đã cho vào ngăn xếp
//     console.log(`Pop ${n} from the stack.`);
// }
let words = 'The quick brown fox jumps over the lazy dog'.split(' '); // split dùng để tách thành mảng các từ

let wordStack = new Stack<string>(words.length); // tạo ngăn xếp có kích thước bằng số từ trong mảng

words.forEach(word =>wordStack.push(word)); // duyệt mảng đưa các phần tử của mảng vào ngăn xếp

while (!wordStack.isEmpty()) { // lấy các phần tử trong mảng đến khi nó rỗng
    console.log(wordStack.pop());
}