class Monster {
    name: string;
    hp: number;
}
var aMonster: Monster = new Monster();
aMonster.name = "スライム";
aMonster.hp = 10;
console.log(aMonster.name + "(" + aMonster.hp + ")が現れた!");

if (5 < aMonster.hp && aMonster.hp < 15) {
    console.log("5<HP<10")
}