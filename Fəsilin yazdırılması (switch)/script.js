// ------------------- My-Task-7   --->   (Fəsili yazdırın)

while (true) {
    const chapter = Number(prompt("Bir reqem daxil edin:"));

    switch (chapter) {
        case 1:
        case 2:
        case 3:
            alert("Qış fəsli");
            break;
        case 4:
        case 5:
        case 6:
            alert("Yaz fəsli");
            break;
        case 7:
        case 8:
        case 9:
            alert("Yay fəsli");
            break;
        case 10:
        case 11:
        case 12:
            alert("Payız fəsili");
            break;
        default:
            alert("Belə bir ay yoxdur (1-12 daxil edin!)");
            break;
    }
}
