
var toon = new Toon(defaultToon);
var game = new Game();

document.addEventListener('DOMContentLoaded', () => {

    //var toon = new Toon(JSON.parse(localStorage.getItem("toon")));
    //console.log(toon);
    refreshToon();

});


function refreshToon(name) {

    console.clear();

    
    // Basics
    let div = document.getElementById('basics');
    let temp = document.getElementById('basics-element');
    let item = temp.content.querySelector("div");
    for (const attr of toon.getBasics()) {
        let a = document.importNode(item, true);
        a.querySelector('span.label').textContent = attr.toProperCase();
        a.querySelector('span.input').textContent = (attr=='languages' ? toon.getLanguages() : toon.getBasic(attr));
        div.appendChild(a);
    }


    // Attributes
    div = document.getElementById('aptitudes');
    temp = document.getElementById('aptitudes-element');
    for (const attr of toon.getAptitudes()) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = attr.toUpperCase();
        div.appendChild(a1);
        
        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getAptitude(attr);
        div.appendChild(a2);

        const a3 = document.importNode(temp.content.children[2], true);
        a3.textContent = toon.getAptitudeTest(attr);
        div.appendChild(a3);
    }    


    // Skills
    div = document.getElementById('skills');
    temp = document.getElementById('skills-element');
    //item = temp.content.querySelector("div");
    for (const attr of toon.getSkills()) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = 
            (attr.startsWith('know') ? 'Know' : attr.toProperCase()) 
            + (toon.getSkillField(attr) ? ": ["+toon.getSkillField(attr)+"]" : "");
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getSkillAptitude(attr);
        div.appendChild(a2);

        const a3 = document.importNode(temp.content.children[2], true);
        a3.textContent = toon.getSkill(attr);
        div.appendChild(a3);
    }  


    // Pools
    div = document.getElementById('pools');
    temp = document.getElementById('pool-element');
    //item = temp.content.querySelector("div");
    for (const attr of toon.getPools()) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = attr.toProperCase();
        a1.title = toon.getPoolTitle(attr);
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getPool(attr);
        div.appendChild(a2);

        const a3 = document.importNode(temp.content.children[2], true);
        a3.textContent = game.getInc(attr);
        div.appendChild(a3);

        const a4 = document.importNode(temp.content.children[3], true);
        let added = div.appendChild(a4);
        added.querySelector('button.plus').addEventListener("click", (e) => {
            plus(e.target, attr);
        });
        added.querySelector('button.minus').addEventListener("click", (e) => {
            minus(e.target, attr);
        });
    }


    // Rep & Fake
    div = document.getElementById('rep');
    temp = document.getElementById('rep-element');
    let before = div.children[1];
    for (const attr of toon.getReps()) {
        let a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = attr;
        div.insertBefore(a1,before);

        let a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getRep(attr, false);
        div.insertBefore(a2,before);
    }

    div = document.getElementById('fake-rep');
    temp = document.getElementById('rep-element');
    before = div.children[1];
    for (const attr of toon.getReps()) {
        let a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = attr;
        div.insertBefore(a1,before);

        let a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getRep(attr, true);
        div.insertBefore(a2,before);
    }


    // Traits
    div = document.getElementById('traits');
    temp = document.getElementById('traits-element');
    for (let attr=0; attr<toon.getNumTraits(); attr++) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = toon.getTrait(attr);
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getTraitDesc(attr);
        div.appendChild(a2);
    }

    div = document.getElementById('morph-traits');
    temp = document.getElementById('traits-element');
    for (let attr=0; attr<toon.getNumMorphTraits(); attr++) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = toon.getMorphTrait(attr);
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getMorphTraitDesc(attr);
        div.appendChild(a2);
    }


    // Gear
    div = document.getElementById('gear');
    temp = document.getElementById('gear-element');
    for (let attr=0; attr<toon.getNumGear(); attr++) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = toon.getGear(attr);
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getGearDesc(attr);
        div.appendChild(a2);

        const a3 = document.importNode(temp.content.children[2], true);
        a3.textContent = toon.getGearQty(attr);
        div.appendChild(a3);
    }


    // Morph Ware
    div = document.getElementById('morph-ware');
    temp = document.getElementById('ware-element');
    for (let attr=0; attr<toon.getNumMorphWares(); attr++) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = toon.getMorphWare(attr);
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getMorphWareDesc(attr);
        div.appendChild(a2);
    }


    // Combat
    document.getElementById('initiative').textContent = toon.getInitiative();
    document.getElementById('lucidity').textContent = toon.getLucidity();
    document.getElementById('trauma-threshold').textContent = toon.getTraumaThreshold();
    document.getElementById('insanity-rating').textContent = toon.getInsanityRating();


    // Morph
    document.getElementById('morph-name').textContent = toon.getMorphName();
    document.getElementById('morph-type').textContent = toon.getMorphType();
    document.getElementById('morph-move').textContent = toon.getMorphMovement();
    document.getElementById('morph-size').textContent = toon.getMorphSize();
    document.getElementById('morph-durability').textContent = toon.getMorphDurability();
    document.getElementById('morph-wound').textContent = toon.getMorphWoundThreshold();
    document.getElementById('morph-death').textContent = toon.getMorphDeathRating();


    // handle checkboxes
    let boxes = document.querySelectorAll('input[type=checkbox]');
    console.log(boxes);
    for (const box of boxes) {
        if (game.getBool(box.id)) box.setAttribute('checked', 'checked');
        box.addEventListener("click", (e) => {
            game.toggle(box.id);
            console.log(game);
        });
    }

    // make sure everything checks out
    console.log('Aptitudes (90)', toon.getTotalAptitudesBase());
    console.log('Skills (400)', toon.getTotalSkillsBase());
    console.log('Knows (250)', toon.getTotalKnowsBase());
    console.log('Rep (100)', toon.getTotalRepBase());
    const baseCP = toon.getBase('CP');
    const baseMP = toon.getBase('MP');
    const baseGP = toon.getBase('GP');
    const nettCP = baseCP - toon.getTotalAptitudesCPSpend() 
                            - toon.getTotalSkillsCPSpend() 
                            - toon.getTotalPoolsCPSpend() 
                            - toon.getTotalTraitsCPSpend()
                            - toon.getLanguagesCPSpend();
    const nettMP = baseMP - toon.getMorphMPSpend()
                            - toon.getTotalMorphWareMPSpend()
                            - toon.getTotalPoolsMPSpend()
                            + toon.getResourcesLevel()
                            - toon.getTotalMorphTraitsMPSpend();
    const nettGP = baseGP - toon.getTotalGearGPSpend()
                            + toon.getResourcesLevel();
    console.log("CP Spend", {'1-BaseCP': baseCP, 
                            '2-Aptitude': -toon.getTotalAptitudesCPSpend(), 
                            '3-Skills': -toon.getTotalSkillsCPSpend(),
                            '4-Flex': -toon.getTotalPoolsCPSpend(),
                            '5-Rep': -toon.getTotalRepCPSpend(),
                            '6-Traits': -toon.getTotalTraitsCPSpend(),
                            '7-Langs': -toon.getLanguagesCPSpend(),
                            '9-nettCP': nettCP});
    console.log("MP Spend", {'1-BaseMP': baseMP,
                            '2-Morph': -toon.getMorphMPSpend(),
                            '3-Ware': -toon.getTotalMorphWareMPSpend(),
                            '4-Flex': -toon.getTotalPoolsMPSpend(),
                            '5-Resources': toon.getResourcesLevel(),
                            '6-Traits': -toon.getTotalMorphTraitsMPSpend(),
                            '9-nettMP': nettMP});
    console.log('GP Spend', {'1-BaseGP': baseGP,
                            '2-Gear': -toon.getTotalGearGPSpend(),
                            '5-Resources': toon.getResourcesLevel(),
                            '9-nettGP': nettGP});
}


// Plus and minus buttons
function plus(ele, attr) {

    let usedDiv = ele.parentNode.previousElementSibling
    let actualDiv = usedDiv.previousElementSibling

    if (actualDiv.innerText > usedDiv.innerText) {
        let val = game.inc(attr);
        usedDiv.innerText = val;
    } else {
        alert("All out of " + attr);
    }
}

function minus(ele, attr) {

    let usedDiv = ele.parentNode.previousElementSibling

    if (usedDiv.innerText > 0) {
        let val = game.dec(attr);
        usedDiv.innerText = val;
    } 
} 

String.prototype.toProperCase = function(opt_lowerCaseTheRest) {
    return (opt_lowerCaseTheRest ? this.toLowerCase() : this)
      .replace(/(^|[\s\xA0])[^\s\xA0]/g, function(s){ return s.toUpperCase(); });
  };

// function updateStore() {

//     var name = document.getElementById("name").value;
//     var edit = document.getElementById("edit");
//     var toons = JSON.parse(localStorage.getItem("toons"));

//     toons[name] = JSON.parse(edit.value);

//     localStorage.setItem("toons", JSON.stringify(toons));

//     refreshToon(name);
// }


// function exportToon() {

//     var name = document.getElementById("name").value;
//     var toons = JSON.parse(localStorage.getItem("toons"));
//     var toon = toons[name];

//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(toon, null, 2)));
//     element.setAttribute('download', "toon.json");
//     element.style.display = 'none';
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);

// }


// function importToon() {
//     const selectedFile = document.getElementById('input').files[0];
//     const reader = new FileReader();
//     reader.readAsText(selectedFile);
//     reader.onload = function(evt) {
//         var toons = JSON.parse(localStorage.getItem("toons")) || {};
//         toons["Jean"] = JSON.parse(reader.result);
//         localStorage.setItem("toons", JSON.stringify(toons));
//     };
//     reader.onerror = function() {
//         alert(reader.error);
//     }; 
    
// }


// function newToon() {
//     var newName = prompt("Name of new Toon");
//     var toons = JSON.parse(localStorage.getItem("toons")) || {};
//     toons[newName] = {};
//     localStorage.setItem("toons", JSON.stringify(toons));
//     document.getElementById("toon-form").reset();

//     var nameSelect = document.getElementById("name");
//     var option = document.createElement("option");
//     option.setAttribute("value", newName);
//     option.setAttribute("selected", "selected");
//     option.text = newName;
//     nameSelect.appendChild(option);
    
// }