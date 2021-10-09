let iptAdt = document.getElementById("adt");
let iptCri = document.getElementById("cri");
let iptTmp = document.getElementById("tmp");
let res = document.getElementById("res");

function calc(){
    let adt = iptAdt.value;
    let cri = iptCri.value;
    let tmp = iptTmp.value;
    let qtdCar;
    let qtdBebAlc;
    let qtdBeb;
    
    if(tmp<6){
        qtdCar = (400*adt) + (400/2*cri);
        qtdBebAlc = (1200*adt);
        qtdBeb = (1000*adt) + (1000/2*cri);
    }else{
        qtdCar = (450*adt) + (450/2*cri);
        qtdBebAlc = (2000*adt);
        qtdBeb = (1500*adt) + (1500/2*cri);
    }
    res.innerHTML = `<p><img src="./assets/meat.png">&nbsp;${qtdCar/1000}KG de carne</p>`;
    res.innerHTML += `<p><img src="./assets/bottle.png">&nbsp;${qtdBeb/1000} L de bebidas</p>`;
    // res.innerHTML += `<p>${Math.ceil(qtdBeb/355)}L de bebidas</p>`; // Cálculo em número de latas
    res.innerHTML += `<p><img src="./assets/glassbottle.png">&nbsp;${qtdBebAlc/1000} L de cerveja</p>`;
}