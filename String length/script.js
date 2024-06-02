// Task 1 Verilən string-in uzunluğunu tapmaq üçün metod yazın

const string = prompt("Bir string daxil edin");
const length = document.getElementById("p2").innerText = "Length = " + " " + string.length;
const text = document.getElementById("p1").innerText = "Daxil edtdiyiniz string: " + " " + string;




// Task 2 String-in uzunluğuna əsasən təsvir qaytarın

// const string = prompt("Bir string daxil edin..");

// function myFunc(string) {
//     if (string.length <= 5) {
//         document.getElementById("p1").innerText = "Daxil etdiyiniz strin uzunluğu: qısadır"
//     } else if (string.length > 5 && string.length <= 10) {
//         document.getElementById("p1").innerText = "Daxil etdiyiniz strinqin uzunluğu: ortadır"
//     } else if (string.length > 10) {
//         document.getElementById("p1").innerText = "Daxil etdiyiniz strinqin uzunluğu: uzundur"
//     }
// }

// myFunc(string);




// Task 3  İki String-in uzunluqlarını müqayisə edin

// const strOne = prompt("Bir string daxil edin..");
// const strTwo = prompt("Ikinci string daxil edin..");

// const myFunc = () => {
//     if (strOne.length > strTwo.length) {
//         document.getElementById("p1").innerText = "Birinci String: " + strOne;
//         document.getElementById("p2").innerText = "Ikinci String: " + strTwo;
//         document.getElementById("p3").innerText = "Result: Birinci String" + " " + " > " + " " + "Ikinci stringden";
//     } else {
//         document.getElementById("p1").innerText = "Birinci String: " + strOne;
//         document.getElementById("p2").innerText = "Ikinci String: " + strTwo;
//         document.getElementById("p3").innerText = "Result: Ikinci string" + " " + " > " + " " + "Birinci Stringden";
//     }
// }

// myFunc();




// Task 4 Verilən string-lərdən ibarət siyahıda (array) ən uzun olan string-i tapan metod yazın.

// const array = ["Excel", "Power point", "Microsoft ofis", "Development", "Kali linux"]

// function myFunc() {
//     if (array[0].length > array[1].length && array[0].length > array[2].length && array[0].length > array[3].length && array[0].length > array[4].length && array[0].length > array[4].length) {
//         document.getElementById("p1").innerHTML = "Ən böyükü: " + array[0];
//     } else if (array[1].length > array[0].length && array[1].length > array[2].length && array[1].length > array[3].length && array[1].length > array[4].length) {
//         document.getElementById("p1").innerHTML = "Ən böyükü: " + array[1];
//     } else if (array[2].length > array[0].length && array[2].length > array[1].length && array[2].length > array[3].length && array[2].length > array[4].length) {
//         document.getElementById("p1").innerHTML = "Ən böyükü: " + array[2];
//     } else if (array[3].length > array[0].length && array[3].length > array[1].length && array[3].length > array[2].length && array[3].length > array[4].length) {
//         document.getElementById("p1").innerHTML = "Ən böyükü: " + array[3];
//     } else {
//         document.getElementById("p1").innerHTML = "Ən böyükü: " + array[4];
//     }
// }

// myFunc();






