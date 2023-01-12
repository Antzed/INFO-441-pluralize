async function checkTime(){
    let response = await fetch('api/getTime');
    let resultText = await response.text();
    document.getElementById("results").innerHTML = resultText;
}

async function checkWord(){
    let input = document.getElementById("wordInput").value;
    let response = await fetch('api/checkWord?word=' + input);
    let resultText = await response.text();
    document.getElementById("wordResults").innerHTML = resultText;
}