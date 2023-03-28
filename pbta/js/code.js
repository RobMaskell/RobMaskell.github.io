
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

    var readButton = document.getElementById("tab-read");
    var editButton = document.getElementById("tab-edit");
    var readSection = document.getElementById("creation");
    var editSection = document.getElementById("sheet");

    // toon read button
    readButton.addEventListener("click", (e) => {
        readButton.removeAttribute("class");
        editButton.className = "disabled";
        editSection.removeAttribute("class");
        readSection.className = "hidden";
    });

    // toon edit button
    editButton.addEventListener("click", (e) => {
        editButton.removeAttribute("class");
        readButton.className = "disabled";
        readSection.removeAttribute("class");
        editSection.className = "hidden";
    });

    // hunter select buttons
    // var playbookButtons = document.getElementsByClassName("playbook");
    // for (const butt of playbookButtons) {
    //     butt.addEventListener("click", async (e) => {
    //         var scriptPromise = playbookSelectClick(butt.id, false);
    //         await scriptPromise.then(() => { 
    //             resetHunterPage();
    //             primeHunterPage(playbook.playbook);
    //         });
    //     });
    // }

    // hunter save button
    // var rolldice = document.getElementById("hunter-save");
    // rolldice.addEventListener("click", (e) => {
    //     saveHunter();
    //     resetHunterPage();
    //     primeHunterPage(toon.playbook);
    //     resetToonPage();
    //     primeToonPage();
    // });

    // reset button
    // var reset = document.getElementById("reset");
    // reset.addEventListener("click", async (e) => {
    //     localStorage.removeItem("toon");
    //     toon = {};
    //     var scriptPromise = playbookSelectClick("chosen", true);
    //     await scriptPromise.then(() => { 
    //         resetHunterPage();
    //         primeHunterPage(playbook.playbook);
    //         resetToonPage();
    //     });
    // });

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
        script.src = 'js/playbooks/' + gameRef.id + "/" + pb + '.js';
        playbook = {};
      });
    
    return scriptPromise;

}


// Save hunter to local storage
function saveHunter() {

    toon = {};
    toon.gameId = playbook.gameId;
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
    for (child of section.children) {
        section.removeChild(child);
    }

    // playbook and description
    // section.querySelector("input#hunter-playbook").value = '';
    // section.querySelector("div#hunter-desc").innerText = '';
    // section.querySelector("input#hunter-name").value = '';
    // section.querySelector("div#hunter-look").innerHTML = '';
    // section.querySelector("div#hunter-ratings").innerHTML = '';
    // section.querySelector("div#hunter-moves").innerHTML = '';

}


// Reset the toon page
function resetToonPage() {

    var section = document.querySelector("section#sheet");

    // name and playbook
    section.querySelector("div#toon-name").innerText = toon ? toon.name + ' (' + toon.playbook + ')' : "";
    section.querySelector("div#toon-look").innerHTML = '';
    section.querySelector("div#toon-ratings").innerHTML = '';
    section.querySelector("div#toon-moves").innerHTML = '';

}


// Prime the hunter page
function primeHunterPage(pbook) {

    var section = document.querySelector("section#creation");
    var sectionCol = createColumn(section, "onecol");

    // playbook and description
    createTitle(sectionCol, 'Choose your playbook');
    createPlaybookButtons(sectionCol, gameRef.playbooks.list);
    section.querySelector("div#hunter-desc").innerText = playbook.desc.text;
    section.querySelector("input#hunter-name").value = toon ? toon.name : "";
    section.querySelector("input#hunter-playbook").value = pbook;

    // look, sex/face/clothes
    var lookSection = section.querySelector("div#hunter-look");
    for (look in playbook.looks.options) {
        createLookLabel(lookSection, look);
        for (option of playbook.looks.options[look]) {
            createLookOption(lookSection.querySelector("div:last-child"), look, option);
        }
        //lookSection.insertAdjacentHTML("afterend", "</div");
        if (toon) lookSection.querySelector('input[name="hunter-look-' + look + '"][value="' + toon.looks[look] + '"]').checked = true;
    }

    // ratings
    var iter = 1;
    for (const ratingOption of playbook.ratingOptions.options) {

        const ratingLineHtml = '<div id="rating-option' + iter + '" class="rating-options"><div class="rating border"><input type="radio" name="hunter-rating" id="hunter-rating' + iter + '" value=' + iter + ' style="margin-top: 0.75rem; height:25px; width:25px;"></div></div>';
        section.querySelector("div#hunter-ratings").insertAdjacentHTML("beforeend", ratingLineHtml);
        const ratingSection = section.querySelector("div#rating-option" + iter);
        for (const rating of ratingOption) {
            createRatingCard(ratingSection, rating.name, rating.value, gameRef.ratings[rating.name.toLowerCase()], false);
        }
        iter++;
    }
    if (toon) section.querySelectorAll('input[name="hunter-rating"]')[toon.ratingOption-1].checked = true;

    // moves
    createDefaultMoves(document.querySelector("div#hunter-moves"), false)

}


// Prime the toon page
function primeToonPage() {

    var section = document.querySelector("section#sheet");

    // name and playbook
    section.querySelector("div#toon-name").innerText = toon ? toon.name + ' (' + toon.playbook + ')' : "";

    // looks
    for (look in playbook.looks) {
        section.querySelector('div#toon-look').insertAdjacentHTML('beforeend', look + "-" + (toon ? toon.looks[look] : ""));
    }

    // ratings
    if (toon && toon.ratings) {
        var ratings = '';
        ratings += '<div class="rating-options"></div>';
        section.querySelector("div#toon-ratings").innerHTML = ratings;
        for (const name in toon.ratings) {
            createRatingCard(section.querySelector("div#toon-ratings div"), name, toon.ratings[name], gameRef.ratings[name.toLowerCase()], true);
        }
    }

    // default moves
    createDefaultMoves(section.querySelector("div#toon-moves"), true)

}