// 1. Il computer deve generare 16 numeri casuali tra 1 e 100(bombe).
// 1a. I numeri non possono essere duplicati.
// 2. In seguito il giocatore clicca sulle celle numerate(non può cliccare più volte sulla stessa cella).
// 3. La partita termina quando il giocatore clicca su una bomba o clicca su tutte le celle che non sono delle bombe.
// 4. Al termine della partita il software deve comunicare il punteggio.

// FUNCTIONS

// 1.
// (funzione utilizzata per generare le 16 bombe)
function bombGenerator(arr) 
{
    for (let i = 1; i <= 16; i++) 
    {
        let randomNum = Math.round(Math.random() * 100);

        if (arr.includes(randomNum)) 
        {
            i += -1;
        } 
        else 
        {
            arr.push(randomNum);
        }
    }   
}

// PROGRAMMA

let bombs = [];
let clicked = [];
bombGenerator(bombs);

const genBtn = document.getElementById("gen-btn");
const refreshBtn = document.getElementById("refresh");


genBtn.addEventListener("click",
    function () 
    {

        let diffSelect = document.getElementById("dif").value;

        if (diffSelect == 1) {
            for (let i = 1; i <= 100; i++) 
            {
                document.getElementById("wrapper").innerHTML += `<div class="square">${i}</div>`;
            }

            document.getElementById("wrapper").addEventListener("click", quadrati);
        
        } 
        else if (diffSelect == 2) 
        {

            document.getElementById("wrapper").classList.add("dif-field");

            for (let i = 1; i <= 81; i++) 
            {
                document.getElementById("wrapper").innerHTML += `<div class="square">${i}</div>`;
            }

            document.getElementById("wrapper").addEventListener("click", quadrati);
        } 
        else 
        {

            document.getElementById("wrapper").classList.add("imp-field");

            for (let i = 1; i <= 49; i++) 
            {
                document.getElementById("wrapper").innerHTML += `<div class="square">${i}</div>`;
            }

            document.getElementById("wrapper").addEventListener("click", quadrati);
        }
    
    }
);

function quadrati(event)
{
    // console.log(event);
    let selectNum = event.target.innerHTML;
    
    if (clicked.includes(selectNum)) 
    {
        alert("Hai già selezionato questa casella");
    }
    else 
    {
        event.target.classList.add("clicked");
        clicked.push(selectNum);
        if (clicked.length == 84) {
            document.getElementById("alert").innerHTML += "HAI VINTO!";
        }
    }
    
    for (let i = 0; i < bombs.length; i++) 
    {
        if (bombs[i] == selectNum) 
        {
            event.target.classList.add("bomb");
            document.getElementById("alert").innerHTML += "IL TUO PUNTEGGIO É: " + parseInt(clicked.length - 1);
            alert("LA TUA PARTITA É TERMINATA")
            document.getElementById("wrapper").removeEventListener("click", quadrati)
            if (clicked.includes(selectNum)) {
                clicked.pop();
            }
        }
    }

}




refreshBtn.addEventListener("click" ,
    function() {
        location.reload();
    }
)