import SaySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

//インスタンス化
const saySomething = new SaySomething("Hello Typescript");

//メソッドを呼び出す
saySomething.sayText(root);
