
document.addEventListener('DOMContentLoaded', () => {

    setupButtons();
    playbookSelectClick("chosen", true);
    loadHunter();

});


function setupButtons() {

    // hunter select buttons
    var playbookButtons = document.getElementsByClassName("playbook");
    for (const butt of playbookButtons) {
        butt.addEventListener("click", (e) => {
            playbookSelectClick(butt.id, false);
        });
    }

    // hunter save button
    var rolldice = document.getElementById("hunter-save");
    rolldice.addEventListener("click", (e) => {
        saveHunter();
        loadHunter();
    });

    // roll dice button
    var rolldice = document.getElementById("rolldice");
    rolldice.addEventListener("click", (e) => {
        rollDiceClick(0);
    });

}


// Setup character creation page
async function playbookSelectClick(pb, isNew) {

    // load the playbook JS
    const scriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        script.src = 'js/playbooks/' + pb + '.js';
      });
      
    scriptPromise.then(() => { 

        var section = document.querySelector("section#creation");

        // playbook and description
        section.querySelector("input#hunter-playbook").value = pb;
        section.querySelector("div#hunter-desc").innerText = playbook.desc;
        isNew ? section.querySelector("input#hunter-name").value = "" : null;

        // ratings
        const ratingTemplate = '<div class="rating" title="{{title}}">{{name}}<br /><span>{{value}}</span></div>';
        var ratings = '';
        var iter = 1;
        for (const ratingOption of playbook.ratingOptions) {
            ratings += '<div class="rating-options"><div class="rating"><input type="radio" name="rating" value=' + iter + ' style="margin-top: 0.75rem; height:25px; width:25px;" /></div>';
            for (const rating of ratingOption) {
                ratings += ratingTemplate.replace('{{name}}', rating.name)
                                .replace('{{value}}', rating.value)
                                .replace('{{title}}', hunterRef.ratings[rating.name.toLowerCase()]);
            }
            ratings += '</div>';
            iter++;
        }
        section.querySelector("div#ratings").innerHTML = ratings;

    });

}


// Save hunter to local storage
function saveHunter() {

    var toon = {};
    document.querySelector("section#creation");
    toon.playbook = document.querySelector("input#hunter-playbook").value;
    toon.name = document.querySelector("input#hunter-name").value;
    const ratingOption = document.querySelector('input[name="rating"]:checked').value;
    toon.ratings = {};
    for (const rating of playbook.ratingOptions[ratingOption-1]) {
        toon.ratings[rating.name] = rating.value;
    }


    localStorage.setItem("toon", JSON.stringify(toon));
    console.log("saveHunter", toon);
}


// Load hunter from local storage
function loadHunter() {

    var toon = JSON.parse(localStorage.getItem("toon"));

    var section = document.querySelector("section#sheet");
    document.querySelector("div#toon-name").innerText = toon.name + ' (' + toon.playbook + ')';
    // toon.name = document.querySelector("section#creation input#name").value;

    console.log("loadHunter", toon);
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