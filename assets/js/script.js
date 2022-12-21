btnPart1 = document.querySelector('#btnPart1');
btnPart2 = document.querySelector('#btnPart2');
btnPart3 = document.querySelector('#btnPart3');
part1 = document.querySelector('#part1');
part2 = document.querySelector('#part2');
part3 = document.querySelector('#part3');

btnPart1.addEventListener("click", () => {
    part1.style.display = 'block';
    part2.style.display = 'none';
    part3.style.display = 'none';
    // console.log("borderCheck = " + borderCheck);
});

btnPart2.addEventListener("click", () => {
    part1.style.display = 'none';
    part2.style.display = 'block';
    part3.style.display = 'none';
});

btnPart3.addEventListener("click", () => {
    part1.style.display = 'none';
    part2.style.display = 'none';
    part3.style.display = 'block';
    divPistas.style.display = "none";
});

//PARTE 1 ---------------------------------------------------------------- 
imgDesafio1 = document.querySelector('#img-1');
par1 = document.querySelector('#par-1');

borderCheck = false;
// console.log("borderCheck = " + borderCheck);

imgDesafio1.addEventListener("click", () => {
    borderCheck = !borderCheck;
    // console.log(borderCheck);
    // console.log("click on img");
    if (borderCheck) {
        // console.log("Se AGREGA borde");
        imgDesafio1.classList.add("imgDesafioStyle");
        par1.innerHTML = "Ahora toca la imagen para <b>QUITAR</b> el borde...";
    } else {
        // console.log("Se QUITA borde");
        imgDesafio1.classList.remove("imgDesafioStyle");
        par1.innerHTML = "Ahora toca la imagen para <b>AGREGAR</b> un borde...";
    }
    // console.log("borderCheck = " + borderCheck);
});


//PARTE 2 ---------------------------------------------------------------- 
btnVerificar = document.querySelector('#btnVerificar');
par2 = document.querySelector('#par2');
spanStickersCount = document.querySelector('#spanStickersCount');

btnVerificar.addEventListener("click", () => {
    opt1 = document.querySelector('#opt1').value;
    opt2 = document.querySelector('#opt2').value;
    opt3 = document.querySelector('#opt3').value;
    totalStickers = (+opt1 + +opt2 + +opt3);
    // console.log("btn cllick");
    // console.log(opt1);
    // console.log(opt2);
    // console.log(opt3);

    if (totalStickers < 0) {
        // console.log("Total de Stickers: " + totalStickers);
        par2.innerHTML = "<b> ERROR EN CANTIDAD </b>";
    }
    else if (totalStickers >= 0 && totalStickers < 10) {
        // console.log("Total de Stickers: " + totalStickers);
        spanStickersCount.innerHTML = "<b>" + totalStickers + "</b>" + "<b> STICKERS</b>";
        par2.innerHTML = " Llevas: " + spanStickersCount.innerHTML + " en total."
    }

    else if (totalStickers == 10) {
        // console.log("Total de Stickers: " + totalStickers);
        spanStickersCount.innerHTML = "<b>" + totalStickers + "</b>" + "<b> STICKERS</b>";
        par2.innerHTML = " Llevas:" + spanStickersCount.innerHTML + " en total. <b>(MAX.)</b>"
    }

    else if (totalStickers > 10) {
        // console.log("Total de Stickers: " + totalStickers);
        par2.innerHTML = "<b>¡LLEVAS DEMASIADOS STICKERS! VUELVE A CONTAR.<b>";
    }
});


//PARTE 3 ---------------------------------------------------------------- 
btnPistas = document.querySelector('#btnPistas');
divPistas = document.querySelector('.divStyle4');
btnVerificar2 = document.querySelector('#btnVerificar2');
SelectUno = document.querySelector("#selectUno");
SelectDos = document.querySelector("#selectDos");
SelectTres = document.querySelector("#selectTres");
par3 = document.querySelector('#par3');

btnVerificar2.addEventListener("click", () => {
    // console.log(SelectUno.value);
    // console.log(SelectDos.value);
    // console.log(SelectTres.value);
    if (SelectUno.value == 9 && SelectDos.value == 1 && SelectTres.value == 1) {
        // console.log(SelectUno.value + SelectDos.value + SelectTres.value);
        // console.log("¡PASSWORD 1 CORRECTO!");
        par3.innerHTML = "<b>¡PASSWORD 1 CORRECTO!</b>";

    }
    else if (SelectUno.value == 7 && SelectDos.value == 1 && SelectTres.value == 4) {
        // console.log("¡PASSWORD 2 CORRECTO!");
        par3.innerHTML = " <b>¡PASSWORD 2 CORRECTO!</b>";
    }
    else if (SelectUno.value == 2 && SelectDos.value == 7 && SelectTres.value == 2) {
        // console.log("¡PASSWORD 3 CORRECT0!");
        par3.innerHTML = " <b>¡PASSWORD 3 CORRECTO!</b>";
    }
    else {
        // console.log("¡ERROR: EL PASSWORD ES INCORRECTO!");
        par3.innerHTML = " <b>¡ERROR: EL PASSWORD ES INCORRECTO!</b>";


    }
});

function toggleDiv() {
    if (divPistas.style.display === "none") {
        divPistas.style.display = "block";
        // console.log("Aparecer Pistas");
    } else {
        divPistas.style.display = "none";
        // console.log("Ocultar Pistas");
    }
};

btnPistas.addEventListener("click", () => {
    toggleDiv();
});