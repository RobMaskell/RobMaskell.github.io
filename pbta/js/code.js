
var toon = {};
var playbook = {};

document.addEventListener('DOMContentLoaded', async () => {

    const isNew = localStorage.getItem("toon") === null;
    toon = JSON.parse(localStorage.getItem("toon"));
    selectedPlaybook = 'Chosen';

    setupButtons();
    var scriptPromise = playbookSelectClick(isNew?selectedPlaybook.toLowerCase():toon.playbook, isNew)
    await scriptPromise.then(() => { 

        resetHunterPage();
        primeHunterPage(isNew?selectedPlaybook.toLowerCase():toon.playbook);
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
    var section = document.querySelector("section#creation");
    toon.playbook = section.querySelector("input#hunter-playbook").value;
    toon.name = section.querySelector("input#hunter-name").value;

    // looks
    toon.looks = {};
    for (look in playbook.looks) {
        toon.looks[look] = section.querySelector('input[name="hunter-look-' + look + '"]:checked').value;
    }

    // ratings
    const ratingOption = section.querySelector('input[name="hunter-rating"]:checked').value;
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
    section.querySelector("div#hunter-look").innerHTML = '';
    section.querySelector("div#hunter-ratings").innerHTML = '';
    section.querySelector("div#hunter-moves").innerHTML = '';

}


// Reset the toon page
function resetToonPage() {

    var section = document.querySelector("section#sheet");

    // name and playbook
    section.querySelector("div#toon-name").innerText = toon.name + ' (' + toon.playbook + ')';
    section.querySelector("div#toon-look").innerHTML = '';
    section.querySelector("div#toon-ratings").innerHTML = '';
    section.querySelector("div#toon-moves").innerHTML = '';

}


// Prime the hunter page
function primeHunterPage(pbook) {

    var section = document.querySelector("section#creation");

    // playbook and description
    section.querySelector("div#hunter-desc").innerText = playbook.desc;
    section.querySelector("input#hunter-name").value = toon.name;
    section.querySelector("input#hunter-playbook").value = pbook;

    // look, sex/face/clothes
    var lookSection = section.querySelector("div#hunter-look");
    for (look in playbook.looks) {
        createLookLabel(lookSection, look);
        for (option of playbook.looks[look]) {
            createLookOption(lookSection, look, option);
        }
        section.querySelector('input[name="hunter-look-' + look + '"][value="' + toon.looks[look] + '"]').checked = true;
    }

    // ratings
    var iter = 1;
    for (const ratingOption of playbook.ratingOptions) {

        const ratingLineHtml = '<div id="rating-option' + iter + '" class="rating-options"><div class="rating border"><input type="radio" name="hunter-rating" id="hunter-rating' + iter + '" value=' + iter + ' style="margin-top: 0.75rem; height:25px; width:25px;"></div></div>';
        section.querySelector("div#hunter-ratings").insertAdjacentHTML("beforeend", ratingLineHtml);
        const ratingSection = section.querySelector("div#rating-option" + iter);
        for (const rating of ratingOption) {
            createRatingCard(ratingSection, rating.name, rating.value, hunterRef.ratings[rating.name.toLowerCase()], false);
        }
        iter++;
    }
    section.querySelectorAll('input[name="hunter-rating"]')[toon.ratingOption-1].checked = true;

    // moves
    createDefaultMoves(document.querySelector("div#hunter-moves"), false)

}


// Prime the toon page
function primeToonPage() {

    var section = document.querySelector("section#sheet");

    // name and playbook
    section.querySelector("div#toon-name").innerText = toon.name + ' (' + toon.playbook + ')';

    // looks
    for (look in playbook.looks) {
        section.querySelector('div#toon-look').insertAdjacentHTML('beforeend', look + "-" + toon.looks[look]);
    }

    // ratings
    var ratings = '';
    ratings += '<div class="rating-options"></div>';
    section.querySelector("div#toon-ratings").innerHTML = ratings;
    for (const name in toon.ratings) {
        createRatingCard(section.querySelector("div#toon-ratings div"), name, toon.ratings[name], hunterRef.ratings[name.toLowerCase()], true);
    }

    // default moves
    createDefaultMoves(section.querySelector("div#toon-moves"), true)

}