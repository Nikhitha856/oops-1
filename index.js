class book{
    title;
    author;
    isbn;
    //constructor 
    constructor(title,author,isbn)
    {
    this.title=title;
    this.author=author;
    this.isbn=isbn;
    }
checkout()
{
console.log(this.title);
console.log("book has been checked");
}
returnbook()
{
console.log(this.title);
console.log("book has been returned");
}
//for updating new title
updatetitle(newtitle)
{
this.title=newtitle;
console.log(this.title);
console.log(" title updated successfully");
}
}
//object creation
var book1=new book("revolution","chethan bhagath","100");
console.log(book1);
book1.checkout();
book1.returnbook();
book1.updatetitle("revolution 2020");
// console.log(book1);
var book2=new book("3 mistakes","chethan","200");
console.log(book2);
book2.checkout();
book2.returnbook();
book2.updatetitle("3 mistakes of my life");

//task2 Product with Discount
class product{
name;
price;
category;
constructor(name,price,category)
{
this.name=name;
this.price=price;
this.category=category;
}
applyDiscount(amount)
{
// this.price=amount
console.log(amount)
console.log("discount applied")
}
getPriceAfterDiscount(amount) 
{
    console.log(amount)
console.log(this.price-300);
console.log("price after the discount applied")
}
}
var product1=new product("shoe","1500","sports")
{
    console.log(product1)
    product1.applyDiscount("300");
    product1.getPriceAfterDiscount();
    console.log(product1);
}

//Bank Account System
class account{
    holdername;
    accountnumber;
    balance;
    constructor(holdername,accountnumber,balance){
        this.holdername=holdername
        this.accountnumber=accountnumber
         this.balance=balance
    }
    deposit(amount) {
        // this.balance=amount;
        console.log(amount,"is deposited to",this.accountnumber);
        this.balance=this.balance+amount;
        console.log("amount deposited successfully")
    }
    withdraw(amount){
        console.log(amount,"is withdraw from",this.accountnumber);
        this.balance=this.balance-amount;
        console.log("amount withdrawn successfully");
    }
    getBalance() {
        // this.balance=amount;
        console.log(this.balance)
    }
}
var account1=new account("nikhitha","123456","100000")
{
    // console.log(account1);
    account1.deposit("50000");
    account1.withdraw("20000");
    account1.getBalance();
    console.log(account1);
}

//Vehicle Management
class vehicle{
    model;
    licensePlate;
    mileage;
    constructor(model,licensePlate,mileage){
this.model=model;
this.licensePlate=licensePlate;
this.mileage=mileage;
    }
    drive(miles) {
        this.miles=miles+this.mileage;
        // console.log(this.miles);
        console.log("miles increased",this.mileage);
    }
    getMileage(){
        // this.miles=miles;
        console.log(this.mileage);
        // console.log("current miles");
    }
}
var vehicle1=new vehicle("bike","abcd","50")
{
    vehicle1.drive("30");
    vehicle1.getMileage("80");
    // vehicle1.getMileage+this.mileage
    // vehicle1.mileage();
    console.log(vehicle1);
}

//Grading System
class student{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade) {
        this.newGrade=newGrade;
        // console.log(this.newGrade);
        console.log("grade is updated",newGrade);
    }
    getGrade(){
        console.log(this.grade);
        console.log("current grade");
    }
}
var student1=new student("sreya","9.8")
{
console.log(student1);
student1.setGrade("9.5");
student1.getGrade();
console.log(student1);
}