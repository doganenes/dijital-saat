var date = new Date();

var saat,dakika,saniye;

saat = date.getHours();
dakika = date.getMinutes();
saniye = date.getSeconds();


setInterval(function(){

    document.getElementById("saat").innerHTML=saat;
    document.getElementById("dakika").innerHTML=dakika;
    document.getElementById("saniye").innerHTML=saniye++;

    if(Number(document.getElementById("saniye").innerText==59)){
dakika++;
saniye=0;
    }
    if(Number(document.getElementById("dakika").innerText>59)){
saat++;
dakika=0;
    }
    if(Number(document.getElementById("saat").innerText>23)){
saat=0;
dakika=0;
    }

},1000)
