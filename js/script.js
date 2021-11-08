var verifCar;


// switch (brandCar) {
//     case 'citroën':
//         verifCar = true;
//         break;
//     case 'renault':
//         verifCar = true;
//         break;
//     case 'peugeot':
//         verifCar = true;
//         break;
//     default:
//         verifCar = false;
//         break;
// }



function controle() {
    var brandCar = document.getElementById("input").value;
    if (brandCar === 'citroën' || brandCar === 'peugeot' || brandCar === 'renault') {
        var typeCarbu = document.getElementById("input2").value;
        var age = document.getElementById("input3").value;
        if ((typeCarbu === 'gazoil' && age > 5) || (typeCarbu === 'essence' && age > 10)) {
            document.getElementById("demo").innerHTML = "Vous pouvez bénéficier du bonus !";
        } else {
            document.getElementById("demo").innerHTML = "Vous ne pouvez pas bénéficier du bonus !";
        }

    } else {
        document.getElementById("demo").innerHTML = "Désolé ce n'est pas une marque FR !";
    }
}