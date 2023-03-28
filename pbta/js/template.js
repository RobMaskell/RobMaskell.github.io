
// HTML Templates
// const ratingTemplate = '<div class="rating" title="{{title}}">{{name}}<br /><span>{{value}}</span></div>';

// function getRatingFromTemplate(ratingName, ratingValue) {
//     return ratingTemplate.replace('{{name}}', ratingName)
//                         .replace('{{value}}', ratingValue)
//                         .replace('{{title}}', gameRef.ratings[ratingName.toLowerCase()]);
// }


// create plybook buttons
function createPlaybookButtons(appendTo, playbooks) {
    var container = document.createElement("div");
    container.className = "control";
    for(var playbook of playbooks) {
        var pbutt = document.createElement("button");
        pbutt.innerHTML = playbook.toUpperCase();
        pbutt.id = playbook;
        pbutt.className = "playbook";
        container.appendChild(pbutt);
        pbutt.addEventListener("click", async (e) => {
            var scriptPromise = playbookSelectClick(playbook, false);
            await scriptPromise.then(() => { 
                resetHunterPage();
                primeHunterPage(playbook.playbook);
            });
        });
    }
    appendTo.appendChild(container);
}
/* <div class="control">
<button id="chosen" class="playbook">Chosen</button></nbsp><button id="expert" class="playbook">Expert</button>
</div> */

// create look label
function createLookLabel(appendTo, look) {
    var lookLabel = '<div><label>{{look}}: </label>'.replace('{{look}}', look);
    appendTo.insertAdjacentHTML("beforeend", lookLabel);
}


// create look option
function createLookOption(appendTo, look, option) {
    var optionHtml = '<input type="radio" name="hunter-look-{{look}}" id="hunter-look-{{look}}-{{option}}" value="{{option}}"><label for="hunter-look-{{look}}-{{option}}">{{option}}</label>'
        .replaceAll('{{look}}', look)
        .replaceAll('{{option}}', option);
    appendTo.insertAdjacentHTML("beforeend", optionHtml);
}


// create rating card
function createRatingCard(appendTo, name, value, title, addClick) {

    var ratingDiv = document.createElement("div");
    ratingDiv.className = "rating border" + (addClick?" hand":"");
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
            rollDiceClick( attrs["data-name"].value + "weird", Number(attrs["data-mod"].value) );
        });
    }

    appendTo.append(ratingDiv);
}


// create default moves section
function createDefaultMoves(appendTo, addClick) {

    var ratingDiv = document.createElement("div");
    ratingDiv.className = "grid";
    const moves = gameRef.moves.concat(playbook.moves);
    for(let move of moves) {

        var moveNameDiv = document.createElement("div");
        moveNameDiv.className = "border";
        moveNameDiv.innerText = move.name;
        appendTo.appendChild(moveNameDiv);
        var moveDescDiv = document.createElement("div");
        moveDescDiv.className = "border";
        moveDescDiv.innerText = move.desc;
        appendTo.appendChild(moveDescDiv);
        var moveRollDiv = document.createElement("div");
        moveRollDiv.className = "border";

        if (addClick && move.rating!="none" ) {
            var moveRollButton = document.createElement("button");
            moveRollButton.innerText = "Roll +" + move.rating;
            moveRollDiv.appendChild(moveRollButton);
            appendTo.appendChild(moveRollDiv);

            moveRollButton.addEventListener("click", function(){
                rollDiceClick( move.name + "+" + move.rating, (toon ? toon.ratings[move.rating] : 0) );
            }, false);
        } else {
            moveRollDiv.innerText = move.rating=="none" ? "No Roll" : "Roll +" + move.rating;
            appendTo.appendChild(moveRollDiv);
        }

    }
}