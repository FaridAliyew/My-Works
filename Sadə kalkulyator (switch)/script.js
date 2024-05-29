// ---------------------- My-Taks-8   --->   (Sadə kalkulyator) 
while (true) {
    const num1 = Number(prompt("Birinci reqemi daxil edin:"));
    const num2 = Number(prompt("Ikinci reqemi daxil edin:"));
    const emeliyyat = Number(prompt("Bir emeliyyat secin (1 +, 2 -, 3 *, 4 /)"));

    switch (emeliyyat) {
        case 1:
            alert(num1 + num2);
            break;
        case 2:
            alert(num1 - num2);
            break;
        case 3:
            alert(num1 * num2);
            break;
        case 4:
            if (num2 != 0) {
                alert(num1 / num2);
            } else {
                alert("0-a bolmek olmaz!!");
            }
            break;
        default:
            alert("Zehmet olmasa 1 den 4 e kimi reqem daxil ederdiz..");
            break;
    }
}
