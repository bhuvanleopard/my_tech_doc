"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringVariable1 = "this is a string";
var numberVariable1 = 12;
var booleanVariable1 = true;
var stringVariable2;
var numberVariable2;
var anyVariable; // any is used to not declare type
var arrayVariable = [1, 2, 3]; // <variableName>: <type>[] = <array>;
var arr = []; // another way of declaring array;
//array using custom type
var test_arr2 = [{ name: "bhuvan", isAdmin: false }, { name: "laila", isAdmin: true }];
//nested array
var nestedArr = [[1, 2], [3, 4]];
// these are some comman types in typescript
// declaration syntax : <variableNam> : <type> = <value>;
/**
 * below is function declaration in ts
 * @param num
 * @returns
 */
function addNum(num) {
    return num + 2;
}
/**
 * below is arrow function declaration in ts
 * @param var1
 * @param var2
 * @param var3
 * @returns
 */
var arrowFunction = function (var1, var2, var3) {
    if (var3 === void 0) { var3 = false; }
    return var1;
};
var stringArray = ["a", "b", "c"];
stringArray.map(function (ele) {
    return "".concat(ele, "+ is the element from string array");
});
/**
 * this is using void type, void is used when a function does return any value
 * @param errMsg
 */
function consoleError(errMsg) {
    console.log(errMsg);
}
/**
 * function returning an object
 * @param param0
 * @returns
 */
function returnObject(_a) {
    var string = _a.name, boolean = _a.isAdmin;
    return { name: "bhuvan", isAdmin: true };
}
/**
 * this is never type example, in the case of void we specific the variable will not return an value,
 * but in "never" type the variable/function never get to the return or end like in case of error and infinite loops
 * @param msg
 */
function fail(msg) {
    throw new Error(msg);
}
var user1 = {
    name: "bhuvan",
    _id: "kej4r3kl",
    email: "wke@home.com"
};
// user1._id = "dkfjl" // this can't be done when <readonly>
//use-case of above type aliases
function use_obj(user) {
    return user;
}
// eg2: type details = user & obj & type3 & ... & typeN;
//union
var unionVariable = "unionExample";
unionVariable = 22;
var unionArray = [1, 2, 3];
var color;
// bash command to convert .ts to .js file : tsc <fileName>.ts
