import { AsyncTests } from "./async";
import { Chicken } from "./Chicken";

console.log("Hello");

const chicken = new Chicken;
chicken.cluck();

console.log('');
const asyncTests = new AsyncTests;
asyncTests.main();