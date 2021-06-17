class Stack {
	constructor()
	{
		this.items = [];
	}
    push(element)
    {
    	this.items.push(element);
    }
    pop()
    {
    	if (this.items.length == 0)
    		return "Underflow";
    	return this.items.pop();
    }
    front()
    {
    	return this.items[this.items.length - 1];
    }
    isEmpty()
    {
        return this.items.length == 0;
    }
    printStack()
    {
    	var str = "";
    	for (var i = 0; i < this.items.length; i++)
    		str += this.items[i] + " ";
    	return str;
    }
}
var stack = new Stack();
stack.push(30);
stack.push(60);
stack.push(90);

console.log(stack.printStack());

console.log(stack.front());

console.log(stack.pop());

console.log(stack.printStack());