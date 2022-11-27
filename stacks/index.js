class Stack {
    constructor(){
        this.items = [];
        this.count = 0;

    }

    // add elemrnt to top of stack

    push(element){
         this.items[this.count] = element;
         this.count++;
         console.log(element);
         return this.count -1
    }

    // remove element from top

    pop(){
      if(this.count == 0) return undefined;

      let deletedItem = this.items[this.count - 1];
      this.count--;
      return deletedItem;
    }

    // check top element in stack
    peek() {
        return this.items[this.count -1]
    }

    // check if stack is empty
    isEmpty(){
        return this.count === 0
    }

    // check size
    size(){
        return this.count;
    }

    // print elements in stack
    print(){
        let str = "";
        for(let i = 0; i< this.count; i++){
            str += this.items[i] + " "
        }
        return str
    }

    // clear stack
    clear(){
        this.items = [];
        this.count = 0;
        return this.items;
    }
}

const stack = new Stack();


console.log(stack.clear());
console.log(stack.isEmpty());
console.log(stack.push(100))
console.log(stack.push(200))
console.log(stack.pop())
console.log(stack.size())
console.log(stack.peek())
console.log(stack.print())

