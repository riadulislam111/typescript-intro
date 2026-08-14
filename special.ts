function calculateTax (amount: number | string , taxRate: number): number{
    if(typeof amount === "string") {
        amount = parseFloat(amount);
    }
    return amount * taxRate;
}

const myTax = calculateTax(200, 0.15);
const yourTax = calculateTax("300", 0.3);



// null 
const myFuture: number | null = null;


// any 
const myVariable: any = "Hello";


//unknown
