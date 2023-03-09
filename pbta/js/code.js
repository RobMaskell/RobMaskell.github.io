
document.addEventListener('DOMContentLoaded', () => {

    setupButtons();
    hunterClick("chosen", true);

});


function setupButtons() {

    // hunter select buttons
    var playbookButtons = document.getElementsByClassName("playbook");
    for (const butt of playbookButtons) {
        butt.addEventListener("click", (e) => {
            hunterClick(butt.id, false);
        });
    }

    // hunter save button
    var rolldice = document.getElementById("save");
    rolldice.addEventListener("click", (e) => {
        saveHunter();
    });

    // roll dice button
    var rolldice = document.getElementById("rolldice");
    rolldice.addEventListener("click", (e) => {
        rollDiceClick(0);
    });

}


async function hunterClick(pb, isNew) {

    const scriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        script.src = 'js/playbooks/' + pb + '.js';
      });
      
    scriptPromise.then(() => { 

        document.querySelector("section#creation input#playbook").value = pb;
        document.querySelector("section#creation div#desc").innerText = playbook.desc;
        isNew ? document.querySelector("section#creation input#name").value = "" : null;

    });

}


function saveHunter() {

    var toon = {};
    toon.playbook = document.querySelector("section#creation input#playbook").value;
    toon.name = document.querySelector("section#creation input#name").value;


    localStorage.setItem("toon", JSON.stringify(toon));
    console.log(toon);
}


async function rollDiceClick(e) {


    var modifier = 2;
    var res = await get2d6(modifier);

    var textRes = res.tot <= 6 ? "Fail" : (res.tot <= 10 ? "Pass" : "Great Pass")

    var div = document.createElement("div");
    div.innerHTML = "Result: " + res.tot + " (" + res.roll1 + ", " + res.roll2 + ") - " + textRes;
    document.getElementById("rolls").appendChild(div);

}


async function get2d6(modifier) {
    var res = {};
    await fetch("https://www.random.org/integers/?num=2&min=1&max=6&col=2&base=10&format=plain&rnd=new")
        .then((response) => response.text())
        .then((data) => {
            data = data.trim();
            res.roll1 = Number(data.slice(0,1));
            res.roll2 = Number(data.slice(-1));
            res.tot = res.roll1 + res.roll2 + modifier;
        });
    return res;
}