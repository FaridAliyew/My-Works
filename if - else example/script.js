// ------------ My-Task-1  --->  (İstifadəçi yaşını yoxlayın) 
// while (true) {
//     const age = Number(prompt("Yaşınızı daxil edin:"));

//     if (age > 18) {
//         alert("Yetkinlik yaşınıza çatmısınız..");
//     } else {
//         alert("Yetkinlik yaşınıza çatmamısınız!!");
//     }
// }




// ------------ My-Task-2  --->  (Nömrənin müsbət, mənfi və ya sıfır olduğunu yoxlayın)
// const number = Number(prompt("Bir reqem daxil edin:"));

// if (number > 0) {
//     alert("Bu müsbət rəqəmdir..");
// } else if (number === 0) {
//     alert("Daxil etdiyiniz rəqəm" + " " + 0 + "-a bərabərdir");
// } else {
//     alert("Bu bir mənfi rəqəmdir!!");
// }




// //  ------------------ My-Task-3  --->  (Həftənin gününü yoxlayın)
// while (true) {
//     const week = Number(prompt("Bir rəqəm daxil edin:"));
//     if (week === 1) {
//         alert("Bazar ertəsi");
//     } else if (week === 2) {
//         alert("Çərşənbə axşamı");
//     } else if (week === 3) {
//         alert("Çərşənbə");
//     } else if (week === 4) {
//         alert("Cümə axşamı");
//     } else if (week === 5) {
//         alert("Cümə");
//     } else if (week === 6) {
//         alert("Şənbə");
//     } else if (week === 7) {
//         alert("Bazar");
//     } else {
//         alert("Zəhmət olmasa (1-7) kimi rəqəm daxil edərdiniz");
//     }
// }




// // -------------- My-Task-4  --->   (Temperaturun dərəcəsini yoxlayın)
// while (true) {
//     const temp = Number(prompt("Temperaturu daxil edin:"));
//     if (temp < 10) {
//         alert("Hava soyuqdur..");
//     } else if (temp >= 10 && temp < 20) {
//         alert("Hava mülayimdir..");
//     } else if (temp >= 20 && temp < 30) {
//         alert("Hava istidir !");
//     } else if (temp >= 30) {
//         alert("Hava çox istidir !!");
//     }
// }




// // ---------------- My-Task-5  --->  (Not ortalaması)
// while (true) {
//     alert("Zəhmət olmasa imtahandan aldığınız nəticələri qeyd edərdiz..");
//     const priceOne = Number(prompt("Birinci imtahanın balı:"));
//     const priceTwo = Number(prompt("Ikinci imtahanın balı:"));
//     const priceThree = Number(prompt("Üçüncü imtahanın balı:"));

//     const averageHoney =Math.floor((priceOne + priceTwo + priceThree) / 3);

//     if (averageHoney > 50) {
//         alert("Siz imtahandan keçdiniz, Təbriklər" + "\n" + "Ortalama balınız:" + " " + averageHoney);
//     } else {
//         alert("İmtahandan kəsildiniz.." + "\n" + "Balınız:" + " " + averageHoney);
//     }
// }




// // ---------------- My-Task-6  ---> (Kilonun təyin olunması)
// const weight = Number(prompt("Çəkinizi daxil edin (Kq)"));
// const height = Number(prompt("Bouyunuzu daxil edin (metr olaraq)"));
// const result = weight / height ** 2;

// const check = () => {
//     if (result <= 18.5) {
//         alert("Arıqsınız" + " " + result);
//         return;
//     }

//     if (result >= 18.9 && result <= 24.9) {
//         alert("Normal kilodasınız" + " " + result);
//         return;
//     }

//     if (result >= 25 && result <= 29.9) {
//         alert("Artıq çəkili" + " " + result);
//         return;
//     }

//     if (result >= 30) {
//         alert("Piylənmə" + " " + result);
//         return;
//     }
// }
// check();




// ---------------- My-Task-7  ---> (Benzinin Alınması)
const premium = 1.50;
const a92 = 1;
const dizel = 0.80;
const newLine = "\r\n";

const benzin = prompt("Benzin növünü seçin:" + newLine
    + "1-Premium" + newLine
    + "2-A-92" + newLine
    + "3-Dizel");

if (benzin == 1 || benzin == 2 || benzin == 3) {
    const litr = Number(prompt("Litri daxil edin"));
    const balance = Number(prompt("Balansınızı daxil edin"));

    if (benzin == 1) {
        let result = premium * litr;
        if (result <= balance) {
            alert("Ödəmə tamamlanmışdır, Balansınız: " + (balance - result) + " AZN");
        } else {
            alert("Balansınızda kifayət qədər pul yoxdur");
        }

    } else if (benzin == 2) {
        let result = a92 * litr;
        if (result <= balance) {
            alert("Ödəmə tamamlanmışdır, Balansınız: " + (balance - result) + " AZN");
        } else {
            alert("Balansınızda kifayət qədər pul yoxdur");
        }

    } else if (benzin == 3) {
        let result = dizel * litr;
        if (result <= balance) {
            alert("Ödəmə tamamlanmışdır, Balansınız: " + (balance - result) + " AZN");
        } else {
            alert("Balansınızda kifayət qədər pul yoxdur");
        }
    }
} else {
    alert("Zəhmət olmasa 1-3 arası əməliyyat seçin");
}




//  ---------------- My-Task-8  ---> (Ən böyük ədədin tapılması)
// const numberOne = Number(prompt("Bir reqem daxil edin"));
// const numberTwo = Number(prompt("Ikinci reqemi daxil edin"));
// const numberThree = Number(prompt("Ucuncu reqemi daxil edin"))

// if (numberOne === numberTwo && numberOne === numberThree) {
//     alert("Daxil etdiyiniz üç rəqəm də bir-birinə bərabərdir");
// } else if (numberOne >= numberTwo && numberOne >= numberThree) {
//     alert("Ən böyük ədəd: " + numberOne);
// } else if (numberTwo >= numberOne && numberTwo >= numberThree) {
//     alert("Ən böyük ədəd: " + numberTwo);
// } else {
//     alert("Ən böyük ədəd: " + numberThree);
// }