
// HTML Templates
const ratingTemplate = '<div class="rating" title="{{title}}">{{name}}<br /><span>{{value}}</span></div>';

document.addEventListener('DOMContentLoaded', async () => {

    const isNew = localStorage.getItem("toon") === null;
    var toon = JSON.parse(localStorage.getItem("toon"));

    setupButtons();
    await playbookSelectClick(isNew?"chosen":toon.playbook, isNew);
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

    // reset button
    var reset = document.getElementById("reset");
    reset.addEventListener("click", (e) => {
        localStorage.removeItem("toon");
        playbookSelectClick("chosen", true);
        loadHunter();
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
        script.async = false;
        script.src = 'js/playbooks/' + pb + '.js';
      });
      
    await scriptPromise.then(() => { 

        var section = document.querySelector("section#creation");

        // playbook and description
        section.querySelector("input#hunter-playbook").value = pb;
        section.querySelector("div#hunter-desc").innerText = playbook.desc;
        isNew ? section.querySelector("input#hunter-name").value = "" : null;

        // ratings
        var ratings = '';
        var iter = 1;
        for (const ratingOption of playbook.ratingOptions) {
            ratings += '<div class="rating-options"><div class="rating"><input type="radio" name="hunter-rating" id="hunter-rating' + iter + '" value=' + iter + ' style="margin-top: 0.75rem; height:25px; width:25px;"></div>';
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
    const ratingOption = document.querySelector('input[name="hunter-rating"]:checked').value;
    toon.ratingOption = Number(ratingOption);
    toon.ratings = {};
    for (const rating of playbook.ratingOptions[toon.ratingOption-1]) {
        toon.ratings[rating.name] = rating.value;
    }


    localStorage.setItem("toon", JSON.stringify(toon));
    console.log("saveHunter", toon);
}


// Load hunter from local storage
function loadHunter() {

    // get json
    var toonString = localStorage.getItem("toon");
    if (!(toonString === null)) {
        var toon = JSON.parse(toonString);
        console.log("loadHunter", toon);

        // CHARCTER SHEET FIRST
        var section = document.querySelector("section#sheet");

        // name and playbook
        document.querySelector("div#toon-name").innerText = toon.name + ' (' + toon.playbook + ')';
        // toon.name = document.querySelector("section#creation input#name").value;

        // ratings
        var ratings = '';
        ratings += '<div class="rating-options">';
        for (const name in toon.ratings) {
            ratings += ratingTemplate.replace('{{name}}', name)
                            .replace('{{value}}', toon.ratings[name])
                            .replace('{{title}}', hunterRef.ratings[name.toLowerCase()]);
        }
        ratings += '</div>';
        section.querySelector("div#ratings").innerHTML = ratings;


        // CHARACTER BUILD SHEET FIRST
        section = document.querySelector("section#creation");

        // toon name
        section.querySelector("input[name=hunter-name]").value = toon.name;

        // rating options
        section.querySelectorAll('input[name="hunter-rating"]')[toon.ratingOption-1].checked = true;

    } else {
        var section = document.querySelector("section#sheet");
        section.querySelector("div#toon-name").innerText = "";
        section.querySelector("div#ratings").innerHTML = "";
    }
}


async function rollDiceClick(e) {


    var modifier = 2;
    var res = await get2d6(modifier);

    var textRes = res.tot <= 6 ? "Fail" : (res.tot <= 10 ? "Partial Success" : "Success")

    var div = document.createElement("div");
    div.innerHTML = "Result: (" + res.roll1 + ", " + res.roll2 + ") " + modifier + " = " + res.tot + " - " + textRes;
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