let sekunde = 00;
let stotinke = 00;
let promeniSekunde = document.getElementById('sekundeSW');
let promeniStotinke = document.getElementById('stotinkeSW');
let btnStartSW = document.getElementById('startSW');
let btnStopSW = document.getElementById('stopSW');
let btnReset = document.getElementById('resetSW');
let interval;

btnStartSW.addEventListener('click', ()=>{
    
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStopSW.addEventListener('click', ()=>{
    clearInterval(interval);
});

btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    stotinke = "00";
    sekunde = "00";
    promeniStotinke.innerHTML = stotinke;
    promeniSekunde.innerHTML = sekunde;
});

let startTimer = ()=>{
    stotinke++;
    if(stotinke<9){
        promeniStotinke.innerHTML = "0" + stotinke;
    }
    if (stotinke>9){
        promeniStotinke.innerHTML = stotinke;
    }
    if(stotinke>99){
        sekunde++;
        promeniSekunde.innerHTML = "0" + sekunde;
        stotinke = 0;
        promeniStotinke.innerHTML = "0" + 0;
    }
    if (sekunde>9){
        promeniSekunde.innerHTML = sekunde;
    }
}