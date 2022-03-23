let bl: boolean = false;
let num: number = 1;
let str: string = 'str'
let arr: Array<number> = [1, 2, 3]
let list: number[] = [1, 2, 3]
let tuple: [string, number] = ['1', 1]

let any: any = 'any'
enum color { list, Green, Blue }

// console.log(color[0]);

let someValue: any = "this is a string";
console.log((someValue as string).charAt(0));
let strLength: number = (someValue as string).length;
let first: string = (<string>someValue).charAt(0);
console.log(strLength,first);
