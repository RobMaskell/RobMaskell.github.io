
var toon = {};
var playbook = {};

document.addEventListener('DOMContentLoaded', async () => {

    const isNew = localStorage.getItem("toon") === null;
    if (isNew) {
        toon.name = '';
        toon.playbook = 'chosen';
    } else {
        toon = JSON.parse(localStorage.getItem("toon"));
    }
    // selectedPlaybook = 'Chosen';

    setupButtons();
    var scriptPromise = playbookSelectClick(toon.playbook, isNew)
    await scriptPromise.then(() => { 

        resetEditPage();
        primeEditPage();
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
function save() {

    toon = {};
    toon.gameId = playbook.gameId;
    var section = document.querySelector("section#creation");

    for (let field in playbook) {

        let fieldDetails = playbook[field];
        console.log("field", field, fieldDetails);

        if (fieldDetails.type=='text' || fieldDetails.type=='hidden') {
            toon[field] = section.querySelector('input[name="edit-' + field + '"]').value;
        }

        if (fieldDetails.type=='radio') {
            toon[field] = section.querySelector('input[name="edit-' + field + '"]:checked').value;
        }

        if (fieldDetails.type=='ratings') {
            toon[field] = {};
            toon[field].option = Number(section.querySelector('input[name="edit-rating"]:checked').value);
            for (const rating of playbook.ratings.options[toon.ratings.option-1]) {
                toon[field][rating.name] = rating.value;
            }
        }

    }

    console.log("toon", toon, JSON.parse(localStorage.getItem("toon")));
    localStorage.setItem("toon", JSON.stringify(toon));

    
    // toon.playbook = section.querySelector("input#hunter-playbook").value;
    // toon.name = section.querySelector("input#hunter-name").value;

    // // looks
    // toon.looks = {};
    // for (look in playbook.looks) {
    //     toon.looks[look] = section.querySelector('input[name="hunter-look-' + look + '"]:checked').value;
    // }

    // // ratings
    // const ratingOption = section.querySelector('input[name="hunter-rating"]:checked').value;
    // toon.ratingOption = Number(ratingOption);
    // toon.ratings = {};
    // for (const rating of playbook.ratingOptions[toon.ratingOption-1]) {
    //     toon.ratings[rating.name] = rating.value;
    // }

    // localStorage.setItem("toon", JSON.stringify(toon));
}


// Reset the hunter page
function resetEditPage() {

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

    var section = document.querySelector("div.bigcollittlecol");

    var section = document.querySelector("section#creation");
    for (child of section.children) {
        section.removeChild(child);
    }

    // name and playbook
    // section.querySelector("div#toon-name").innerText = toon ? toon.name + ' (' + toon.playbook + ')' : "";
    // section.querySelector("div#toon-look").innerHTML = '';
    // section.querySelector("div#toon-ratings").innerHTML = '';
    // section.querySelector("div#toon-moves").innerHTML = '';

}


// Prime the hunter page
function primeEditPage() {

    let section = document.querySelector("section#creation");
    let sectionCol = createContainer(section, "onecol", null);

    // playbook and description
    createTitle(sectionCol, 'Choose your playbook');
    createPlaybookButtons(createContainer(sectionCol, 'control', null), gameRef.playbooks.list);

    for (let field in playbook) {

        let fieldDetails = playbook[field];

        // random bit of text
        if (fieldDetails.type=='display') {
            createParagraph(sectionCol, fieldDetails.text);
        }

        // text fields
        if (fieldDetails.type=='text' || fieldDetails.type=='hidden') {
            fieldDetails.title ? createTitle(sectionCol, fieldDetails.title) : null;
            createLabelAndInputText(sectionCol, fieldDetails.type, field, fieldDetails.label, fieldDetails.placeholder, fieldDetails.disabled)
            setFieldValue(field, toon[field]);
        }

        // radio button fields
        if (fieldDetails.type=='radio') {

            fieldDetails.title ? createTitle(sectionCol, fieldDetails.title) : null;
            let radioContainer = createContainer(sectionCol, "control radio", null);
            let radioDiv = createContainer(radioContainer, null, null);

            createLookLabel(radioDiv, field);
            for (option of playbook[field].options) {
                createLookOption(radioDiv, field, option);
            }

            //lookSection.insertAdjacentHTML("afterend", "</div");
            if (toon[field]) radioDiv.querySelector('input[name="edit-' + field + '"][value="' + toon[field] + '"]').checked = true;
 
        }

        // ratings
        if (fieldDetails.type=='ratings') {
            createTitle(sectionCol, 'Select a set of ratings that suit your hunter');
            let ratingContainer = createContainer(sectionCol, "control", 'edit-ratings');

            var iter = 1;
            for (const ratingOption of playbook.ratings.options) {
        
                // const ratingLineHtml = '<div id="rating-option' + iter + '" class="rating-options"><div class="rating border"><input type="radio" name="hunter-rating" id="hunter-rating' + iter + '" value=' + iter + ' style="margin-top: 0.75rem; height:25px; width:25px;"></div></div>';
                // section.querySelector("div#hunter-ratings").insertAdjacentHTML("beforeend", ratingLineHtml);
                createRatingOption(ratingContainer, iter);
                const ratingSection = section.querySelector("div#rating-option" + iter);
                for (const rating of ratingOption) {
                    createRatingCard(ratingSection, rating.name, rating.value, gameRef.ratings[rating.name.toLowerCase()], false);
                }
                iter++;
            }


            if (toon.ratings) setRadioValue('edit-rating', toon.ratings.option);
            //if (toon) section.querySelectorAll('input[name="hunter-rating"]')[toon.ratingOption-1].checked = true;
        }
        // moves
        if (fieldDetails.type=='moves') {
            createTitle(sectionCol, 'Moves');
            let ratingContainer = createContainer(sectionCol, "control grid moves", 'edit-moves');
            createDefaultMoves(ratingContainer, false)
        }

    }

    // add buttons
    let buttonControl = createContainer(sectionCol, 'control', null);
    let buttonHtml = '<div class="control"><button id="save">Save Character</button><button id="reset" class="danger">Total reset (you will lose your character)</button></div>';
    buttonControl.insertAdjacentHTML('beforeend', buttonHtml);

    // hunter save button
    var rolldice = document.getElementById("save");
    rolldice.addEventListener("click", (e) => {
        save();
        resetEditPage();
        primeEditPage(toon.playbook);
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
            resetEditPage();
            primeEditPage(playbook.playbook);
            resetToonPage();
        });
    });


    // look, sex/face/clothes
    // var lookSection = section.querySelector("div#hunter-look");
    // for (look in playbook.looks.options) {
    //     createLookLabel(lookSection, look);
    //     for (option of playbook.looks.options[look]) {
    //         createLookOption(lookSection.querySelector("div:last-child"), look, option);
    //     }
    //     //lookSection.insertAdjacentHTML("afterend", "</div");
    //     if (toon) lookSection.querySelector('input[name="hunter-look-' + look + '"][value="' + toon.looks[look] + '"]').checked = true;
    // }


}


// Prime the toon page
function primeToonPage() {

    let col = document.querySelector("div.bigcollittlecol");

    for (let field in playbook) {

        let fieldDetails = playbook[field];

        // random bit of text
        if (fieldDetails.type=='display') {
            createParagraph(col, fieldDetails.text);
        }

        // text and radio fields
        if (fieldDetails.type=='text' || fieldDetails.type=='hidden' || fieldDetails.type=='radio') {
            fieldDetails.title ? createTitle(col, fieldDetails.title) : null;
            createDisplayField(col, fieldDetails.label, toon[field])
        }

    }

    // name and playbook
    //section.querySelector("div#toon-name").innerText = toon ? toon.name + ' (' + toon.playbook + ')' : "";

    // looks
    // for (look in playbook.looks) {
    //     section.querySelector('div#toon-look').insertAdjacentHTML('beforeend', look + "-" + (toon ? toon.looks[look] : ""));
    // }

    // ratings
    // if (toon && toon.ratings) {
    //     var ratings = '';
    //     ratings += '<div class="rating-options"></div>';
    //     section.querySelector("div#toon-ratings").innerHTML = ratings;
    //     for (const name in toon.ratings) {
    //         if (name != 'option') createRatingCard(section.querySelector("div#toon-ratings div"), name, toon.ratings[name], gameRef.ratings[name.toLowerCase()], true);
    //     }
    // }

    // default moves
    // createDefaultMoves(section.querySelector("div#toon-moves"), true)

}


function setFieldValue(name, value) {
    let field = document.getElementById('edit-' + name);
    field.value = value;
}


function setRadioValue(name, value) {
    //console.log(document.getElementsByName('edit-rating'));
    document.getElementsByName('edit-rating')[value-1].checked = true;
}