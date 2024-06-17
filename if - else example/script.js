// ------------ My-Task-1  --->  (İstifadəçi yaşını yoxlayın) 
while (true) {
    const age = Number(prompt("Yaşınızı daxil edin:"));

    if (age > 18) {
        alert("Yetkinlik yaşınıza çatmısınız..");
    } else {
        alert("Yetkinlik yaşınıza çatmamısınız!!");
    }
}




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
