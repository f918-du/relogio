const caixaHoras = document.getElementById("horas");
const caixaMinutos = document.getElementById("minutos");
const caixaSegundos = document.getElementById("segundos");
const relogio =  setInterval(() => {

   //ENTRADA
    let dateToday = new Date();
    
    let  horas = dateToday.getHours();
    let  minutos = dateToday.getMinutes();
    let  segundos = dateToday.getUTCSeconds();

    //PROCESSAMENTO
    
    if (horas < 10)horas = "0"  + horas;
    if (minutos < 10)minutos = "0" + minutos;
    if (segundos < 10)segundos = "0" + segundos;
      
    //SAIDA
    caixaHoras.textContent = horas;
    caixaMinutos.innerHTML = minutos;
    caixaSegundos.innerText = segundos;
    
});
