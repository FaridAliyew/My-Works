// -------------------- My-Task-9  --->   (Kapital Bank ATM)
alert("Kapital banka xoş gəlmisiniz");
const newRow = "\r\n";
let kod = false;

while (!kod) {
    let password = Number(prompt("Kodu daxil edin.."));
    if (password === 1234) {
        let dil = prompt("Dili daxil edin:" + newRow + newRow + "Azərbaycan dili: --1" + newRow + "English language: --2" + newRow + "Pусский язык: --3")
        if (dil == 1) {
            alert("Zəhmət olmasa biraz gözləyin..");
        } else if (dil == 2) {
            alert("Please wait a moment..");
        } else if (dil == 3) {
            alert("Пожалуйста, подождите несколько секунд..");
        }

        // ----------- Aze -----------
        while (dil == 1) {
            const emeliyyat = prompt("Bir əməliyyat seçin.." + newRow + newRow + "Balansın göstərilməsi: -- 1" + newRow + "Pulun çıxarılması: --2" + newRow + "Hesabın artırılması: --3" + newRow + "Çıxış: --4");
            if (emeliyyat == 1) {
                let cariHesab = 1500;
                alert(cariHesab + " " + "Aze");
            } else if (emeliyyat == 2) {
                const pulunÇix = prompt("Çıxardacağınız məbləği daxil edin: (Aze)");
                cariHesab = 1500 - pulunÇix;
                alert("Biraz gözləyin..");
                alert("Yekun Balans:" + newRow + newRow + cariHesab + " " + "Aze");
            } else if (emeliyyat == 3) {
                let hesabArt = Number(prompt("Artıracağınız məbləği bankomata daxil edin.."));
                let yekunBal = cariHesab + hesabArt;
                alert("Əməliyyat uğurla tamamlandı..");
                alert("Yekun balans:" + newRow + newRow + yekunBal + " " + "Aze");
            } else {
                alert("Bizi seçdiyiniz üçün sağolun" + " " + "😊");
                break;
            }
        }

        // ------------- English -------------
        while (dil == 2) {
            const emeliyyat = prompt("Select an operation.." + newRow + newRow + "Displaying the balance: -- 1" + newRow + "Withdrawal of money: --2" + newRow + "Increasing the balance: --3" + newRow + "Exit: --4");
            if (emeliyyat == 1) {
                let cariHesab = 1500;
                alert(cariHesab + " " + "Aze");
            } else if (emeliyyat == 2) {
                const pulunÇix = prompt("Enter the amount to withdraw: (Aze)");
                cariHesab = 1500 - pulunÇix;
                alert("Wait a bit..");
                alert("Final Balance:" + newRow + newRow + cariHesab + " " + "Aze");
            } else if (emeliyyat == 3) {
                let hesabArt = Number(prompt("Enter the amount to be increased into the ATM.."));
                yekunBal = cariHesab + hesabArt;
                alert("The operation was completed successfully..");
                alert("Final balance:" + newRow + newRow + yekunBal + " " + "Aze");
            } else {
                alert("Thank you for choosing us" + " " + "😊");
                break;
            }
        }

        // ----------- Rus -------------
        while (dil == 3) {
            const emeliyyat = prompt("Выберите операцию.." + newRow + newRow + "Отображение учетной записи: -- 1" + newRow + "Вывод денег: --2" + newRow + "Увеличение счета: --3" + newRow + "Выход: --4");
            if (emeliyyat == 1) {
                let cariHesab = 1500;
                alert(cariHesab + " " + "Aze");
            } else if (emeliyyat == 2) {
                const pulunÇix = prompt("Введите сумму, которую хотите снять: (Aze)");
                cariHesab = 1500 - pulunÇix;
                alert("Подожди немного..");
                alert("Окончательный баланс:" + newRow + newRow + cariHesab + " " + "Aze");
            } else if (emeliyyat == 3) {
                let hesabArt = Number(prompt("Введите сумму для увеличения в банкомате.."));
                let yekunBal = cariHesab + hesabArt;
                alert("Операция завершилась успешно..");
                alert("Окончательный баланс:" + newRow + newRow + yekunBal + " " + "Aze");
            } else {
                alert("Спасибо, что выбрали нас" + " " + "😊");
                break;
            }
        }

    } else {
        alert("Zəhmət olmasa kodu düzgün daxil edin...");
    }
}