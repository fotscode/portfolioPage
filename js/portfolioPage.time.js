
let container = document.querySelector(".age");

let actualDate = new Date();
let age;

(actualDate.getMonth()<7)?age=actualDate.getFullYear()-2001-1
	:(actualDate.getDate()<14)? age = actualDate.getFullYear()-2001-1
	:age=actualDate.getFullYear()-2001;


container.innerText=age;
