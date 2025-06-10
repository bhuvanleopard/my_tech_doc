const stringVariable1: string = "this is a string";
const numberVariable1: number = 12;
const booleanVariable1: boolean = true;
let stringVariable2:string;
let numberVariable2:number;
let anyVariable: any; // any is used to not declare type
let arrayVariable: number[] = [1,2,3] // <variableName>: <type>[] = <array>;
let arr: Array<number> = [] // another way of declaring array;


type arrayType = {
    name:string,
    isAdmin:boolean,
}
//array using custom type
const test_arr2:arrayType[] = [{name:"bhuvan", isAdmin:false}, {name:"laila", isAdmin:true}]

//nested array
const nestedArr: number[][] = [[1,2],[3,4]];


// these are some comman types in typescript
// declaration syntax : <variableNam> : <type> = <value>;

/**
 * below is function declaration in ts
 * @param num 
 * @returns 
 */
function addNum(num:number):number{

    return num+2
}

/**
 * below is arrow function declaration in ts
 * @param var1 
 * @param var2 
 * @param var3 
 * @returns 
 */
let arrowFunction = (var1:string, var2:number, var3:boolean = false): string =>{

    return var1
}

const stringArray: string[] = ["a", "b", "c"];
stringArray.map((ele:string): string=>{

    return `${ele}+ is the element from string array`
});

/**
 * this is using void type, void is used when a function does return any value
 * @param errMsg 
 */
function consoleError(errMsg:string):void{

    console.log(errMsg)
}

/**
 * function returning an object
 * @param param0 
 * @returns 
 */
function returnObject({name:string, isAdmin:boolean}):{name:string, isAdmin:boolean}{

    return {name:"bhuvan", isAdmin:true}
}

/**
 * this is never type example, in the case of void we specific the variable will not return an value,
 * but in "never" type the variable/function never get to the return or end like in case of error and infinite loops
 * @param msg 
 */
function fail(msg:string):never{

    throw new Error(msg)
}

// type aliases
type obj = {

    name:string,
    phone:number,
    isNerd:boolean,
}

type user = {

    name:string,
    readonly _id: string, // for read only after declared
    email: string,
    creditCardDetails?: string // <?> is used for optional field
}

const user1:user = {
    name:"bhuvan",
    _id:"kej4r3kl",
    email:"wke@home.com"
}
// user1._id = "dkfjl" // this can't be done when <readonly>

//use-case of above type aliases
function use_obj(user:obj):obj{

    return user
}


type details = user & obj // here all the elements of both type should exist
// eg2: type details = user & obj & type3 & ... & typeN;

//union
let unionVariable: string | number = "unionExample" ;
unionVariable = 22;
let unionArray: string[] | number[] = [1,2,3];
let color:"red" | "green" | "blue"

//interface
// its like combination of class and type aliases
interface userInterface {

    readonly _id:number,
    name:string,
    email:string,
    number:number,
    isAdmin:boolean,
    nickman?:string,
    method1:()=>string,
    method2():string,
    method3(para1:string):string,
    method4:(para1:number)=>number

}

export{} // always have this line when converting .ts to .js
// bash command to convert .ts to .js file : tsc <fileName>.ts