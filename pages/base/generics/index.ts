function a<T>(p: T): T {
    return p;
}

// console.log(a<string>('11').charAt(0));

function arr<T>(p: T[]): T {
    return p[0];
}
// console.log(arr<number>([1, 2, 3]));

function identity<T>(arg: T): T {
    return arg;
}
let aList: <T>(p: T) => T = identity;
// console.log(aList);

//泛型接口

//泛型类
class c<t>{
    log(t) {
        console.log(t);
    }
}
new c<number>().log(1);

interface Ibase<u> {
    len: u;
}
function baseCall<T extends Ibase<string>>(p: T) {
    console.log(p.len);
}
baseCall({ len: 'baseCall' });


class Animal {
    constructor() { }
}
class Dog extends Animal {
    log() {
        console.log('dog');
    }
}
function creat<A extends Animal>(c: new () => A): A {
    return new c();
}
function creat2<A extends Animal>(c: { new(): A }): A {
    return new c();
}