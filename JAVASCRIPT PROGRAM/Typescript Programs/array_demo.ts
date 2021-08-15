// literal array creation in typescript

let num1:number[]=[10,20,30,40,50,60];
let names:string[]=["John","Mary","Sara","Bob"];
let info1:any[]=[100,"John",true,1010.50];

// generic style 

let num2:Array<number> = new Array(10,20,30,40,50,60);
let names2:Array<string> = new Array("John","Mary","Sara","Bob");
// let info2:Array<any> = new Array(100,"John",true,1010.50);
let info2:Array<any> = new Array<any>(100,"John",true,1010.50);
