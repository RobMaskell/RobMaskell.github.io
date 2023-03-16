
var toon = {};
var playbook = {};

// HTML Templates
const ratingTemplate = '<div class="rating" title="{{title}}">{{name}}<br /><span>{{value}}</span></div>';

document.addEventListener('DOMContentLoaded', async () => {

    const isNew = localStorage.getItem("toon") === null;
    toon = JSON.parse(localStorage.getItem("toon"));
    selectedPlaybook = 'Chosen';

    setupButtons();
    var scriptPromise = playbookSelectClick(isNew?playbook.name:toon.playbook, isNew)
    await scriptPromise.then(() => { 

        resetHunterPage();
        primeHunterPage(isNew?playbook.name:toon.playbook);
        resetToonPage();
        primeToonPage();
    });

});


function setupButtons() {

    // hunter select buttons
    var playbookButtons = document.getElementsByClassName("playbook");
    for (const butt of playbookButtons) {
        butt.addEventListener("click", async (e) => {
            var scriptPromise = playbookSelectClick(butt.id, false);
            await scriptPromise.then(() => { 
                resetHunterPage();
                primeHunterPage(playbook.name);
            });
        });
    }

    // hunter save button
    var rolldice = document.getElementById("hunter-save");
    rolldice.addEventListener("click", (e) => {
        saveHunter();
        resetHunterPage();
        primeHunterPage(toon.playbook);
        resetToonPage();
        primeToonPage();
    });

    // reset button
    var reset = document.getElementById("reset");
    reset.addEventListener("click", async (e) => {
        localStorage.removeItem("toon");
        toon = {};
        var scriptPromise = playbookSelectClick("chosen", true);
        await scriptPromise.then(() => { 
            resetHunterPage();
            primeHunterPage(playbook.name);
            resetToonPage();
        });
    });

}


// Setup character creation page
async function playbookSelectClick(pb, isNew) {

    // load the playbook JS
    const scriptPromise = new Promise((resolve, reject) => {
        document.querySelectorAll("script").forEach((elem) => elem.remove());
        const script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
        script.async = false;
        script.src = 'js/playbooks/' + pb + '.js';
        playbook = {};
      });
    
    return scriptPromise;

}


// Save hunter to local storage
function saveHunter() {

    toon = {};
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
}


// Reset the hunter page
function resetHunterPage() {

    var section = document.querySelector("section#creation");

    // playbook and description
    section.querySelector("input#hunter-playbook").value = '';
    section.querySelector("div#hunter-desc").innerText = '';
    section.querySelector("input#hunter-name").value = '';
    section.querySelector("div#ratings").innerHTML = '';
    section.querySelector("div#hunter-moves").innerHTML = '';

}


// Reset the toon page
function resetToonPage() {

    var section = document.querySelector("section#sheet");

    // name and playbook
    section.querySelector("div#toon-name").innerText = toon.name + ' (' + toon.playbook + ')';


}


// Prime the hunter page
function primeHunterPage(pbook) {

    var section = document.querySelector("section#creation");

    // playbook and description
    section.querySelector("input#hunter-playbook").value = pbook;
    section.querySelector("div#hunter-desc").innerText = playbook.desc;
    section.querySelector("input#hunter-name").value = toon.name;

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
    section.querySelectorAll('input[name="hunter-rating"]')[toon.ratingOption-1].checked = true;

    // moves
    createDefaultMoves(document.querySelector("div#hunter-moves"), false)

}


// Prime the toon page
function primeToonPage() {

    var section = document.querySelector("section#sheet");

    // name and playbook
    section.querySelector("div#toon-name").innerText = toon.name + ' (' + toon.playbook + ')';

    // ratings
    var ratings = '';
    ratings += '<div class="rating-options">';
    ratings += '</div>';
    section.querySelector("div#toon-ratings").innerHTML = ratings;
    for (const name in toon.ratings) {
        // ratings += ratingTemplate.replace('{{name}}', name)
        //                 .replace('{{value}}', toon.ratings[name])
        //                 .replace('{{title}}', hunterRef.ratings[name.toLowerCase()]);
        createRatingCard(document.querySelector("div#toon-ratings div"), name, toon.ratings[name], hunterRef.ratings[name.toLowerCase()], true);
    }

    // default moves
    createDefaultMoves(document.querySelector("div#toon-moves"), true)

}


// Load hunter from local storage
function loadHunter() {

    // get json
    var toonString = localStorage.getItem("toon");
    if (!(toonString === null)) {
        toon = JSON.parse(toonString);
        console.log("loadHunter", toon);

        // CHARCTER SHEET FIRST
        var section = document.querySelector("section#sheet");

        // name and playbook
        document.querySelector("div#toon-name").innerText = toon.name + ' (' + toon.playbook + ')';
        // toon.name = document.querySelector("section#creation input#name").value;

        // ratings
        var ratings = '';
        ratings += '<div class="rating-options">';
        ratings += '</div>';
        section.querySelector("div#toon-ratings").innerHTML = ratings;
        for (const name in toon.ratings) {
            // ratings += ratingTemplate.replace('{{name}}', name)
            //                 .replace('{{value}}', toon.ratings[name])
            //                 .replace('{{title}}', hunterRef.ratings[name.toLowerCase()]);
            createRatingCard(document.querySelector("div#toon-ratings div"), name, toon.ratings[name], hunterRef.ratings[name.toLowerCase()], true);
        }

        // default moves
        createDefaultMoves(document.querySelector("div#toon-moves"), true)


        // BUILD SHEET SECOND
        section = document.querySelector("section#creation");

        // toon name
        section.querySelector("input[name=hunter-name]").value = toon.name;



        // default moves
        createDefaultMoves(document.querySelector("div#hunter-moves"), false)

    } else {
        var section = document.querySelector("section#sheet");
        section.querySelector("div#toon-name").innerText = "";
        section.querySelector("div#toon-ratings").innerHTML = "";
        section.querySelector("div#toon-moves").innerHTML = "";
    }
}


// create rating card
function createRatingCard(appendTo, name, value, title, addClick) {

    var ratingDiv = document.createElement("div");
    ratingDiv.className = "rating" + (addClick?" hand":"");
    ratingDiv.setAttribute("title", title);
    ratingDiv.setAttribute("data-mod", value);
    ratingDiv.setAttribute("data-name", name);
    ratingDiv.innerText = name;
    var ratingSpan = document.createElement("span");
    ratingSpan.innerText = value;
    ratingDiv.append(document.createElement("br"));
    ratingDiv.appendChild(ratingSpan);
    if (addClick) {
        ratingDiv.addEventListener("click", (e) => {
            var attrs = e.target.attributes;
            rollDiceClick( attrs["data-name"].value, Number(attrs["data-mod"].value) );
        });
    }

    appendTo.appendChild(ratingDiv);
}


// create default moves section
function createDefaultMoves(appendTo, addClick) {

    var ratingDiv = document.createElement("div");
    const moves = hunterRef.moves.concat(playbook.moves);
    for(let move of moves) {

        var moveNameDiv = document.createElement("div");
        moveNameDiv.innerText = move.name;
        appendTo.appendChild(moveNameDiv);
        var moveDescDiv = document.createElement("div");
        moveDescDiv.innerText = move.desc;
        appendTo.appendChild(moveDescDiv);
        var moveRollDiv = document.createElement("div");

        if (addClick && move.rating!="none" ) {
            var moveRollButton = document.createElement("button");
            moveRollButton.innerText = "Roll +" + move.rating;
            moveRollDiv.appendChild(moveRollButton);
            appendTo.appendChild(moveRollDiv);

            moveRollButton.addEventListener("click", function(){
                rollDiceClick( move.name, toon.ratings[move.rating] );
            }, false);
        } else {
            moveRollDiv.innerText = move.rating=="none" ? "No Roll" : "Roll +" + move.rating;
            appendTo.appendChild(moveRollDiv);
        }

    }
}


async function rollDiceClick(rollType, modifier) {

    var res = await get2d6(modifier);

    var textRes = res.tot <= 6 ? "Fail" : (res.tot <= 10 ? "Partial Success" : "Success")

    var div = document.createElement("div");
    div.innerHTML = rollType + " :check (" + res.roll1 + " + " + res.roll2 + ") " + (modifier>=0?"+":"") + modifier + " = " + res.tot + " Result: " + textRes;
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