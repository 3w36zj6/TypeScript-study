var Message:string;
class Cat {
    age:number;
    weight:number;
}
var myCat = new Cat();
myCat.age = 3;
myCat.weight = 5.1;
Message = "うちの猫は" + myCat.age + "歳で、体重は" + myCat.weight + "kgです";
alert(Message);