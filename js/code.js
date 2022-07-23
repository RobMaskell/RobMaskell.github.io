
var toon = new Toon(defaultToon);
var game = new Game();

document.addEventListener('DOMContentLoaded', () => {

    //var toon = new Toon(JSON.parse(localStorage.getItem("toon")));
    //console.log(toon);
    refreshToon();

});


function refreshToon() {

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


    // Motivations
    div = document.getElementById('motivations');
    temp = document.getElementById('motivation-element');
    for (const attr of toon.getMotivations()) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = attr;
        div.appendChild(a1);

        // const a2 = document.importNode(temp.content.children[1], true);
        // a2.textContent = toon.getSkillAptitude(attr);
        // div.appendChild(a2);

        // const a3 = document.importNode(temp.content.children[2], true);
        // a3.textContent = toon.getSkill(attr);
        // div.appendChild(a3);
    } 


    // Pools
    div = document.getElementById('pools');
    temp = document.getElementById('pool-element');
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

        added.querySelector('button.plus').setAttribute('data-attr', attr);
        added.querySelector('button.minus').setAttribute('data-attr', attr);
    }


    // Rep & Fake
    div = document.getElementById('main-id-tab-body');
    temp = document.getElementById('rep-element');
    let before = div.children[0];
    for (const attr of toon.getReps()) {
        let a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = attr;
        div.insertBefore(a1,before);

        let a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getRep(attr, false);
        div.insertBefore(a2,before);
    }

    div = document.getElementById('fake-id-tab-body');
    temp = document.getElementById('rep-element');
    before = div.children[0];
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

        const a4 = document.importNode(temp.content.children[3], true);
        a4.firstChild.id = createEquipId(toon.getGear(attr));
        div.appendChild(a4);
    }


    // Armour
    div = document.getElementById('armour');
    temp = document.getElementById('armour-element');
    for (let attr=0; attr<toon.getNumArmour(); attr++) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = toon.getArmour(attr);
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getArmourEnergy(attr);
        div.appendChild(a2);

        const a3 = document.importNode(temp.content.children[2], true);
        a3.textContent = toon.getArmourKinetic(attr);
        div.appendChild(a3);

        const a4 = document.importNode(temp.content.children[3], true);
        a4.textContent = toon.getArmourDesc(attr);
        div.appendChild(a4);

        const a5 = document.importNode(temp.content.children[4], true);
        a5.textContent = toon.getArmourQty(attr);
        div.appendChild(a5);

        const a6 = document.importNode(temp.content.children[5], true);
        a6.firstChild.id = createEquipId(toon.getArmour(attr));
        div.appendChild(a6);
    }


    // Weapons
    div = document.getElementById('weapons');
    temp = document.getElementById('weapon-element');
    for (let attr=0; attr<toon.getNumWeapons(); attr++) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = toon.getWeapon(attr);
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getWeaponDamage(attr);
        div.appendChild(a2);

        const a3 = document.importNode(temp.content.children[2], true);
        a3.textContent = toon.getWeaponModes(attr);
        div.appendChild(a3);

        const a4 = document.importNode(temp.content.children[3], true);
        a4.textContent = toon.getWeaponRange(attr);
        div.appendChild(a4);

        const a5 = document.importNode(temp.content.children[4], true);
        a5.textContent = toon.getWeaponAmmo(attr);
        div.appendChild(a5);

        const a6 = document.importNode(temp.content.children[5], true);
        a6.textContent = toon.getWeaponDesc(attr);
        div.appendChild(a6);

        const a7 = document.importNode(temp.content.children[6], true);
        a7.firstChild.id = createEquipId(toon.getWeapon(attr));
        div.appendChild(a7);
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


    // Blueprints
    div = document.getElementById('blueprints');
    temp = document.getElementById('blueprint-element');
    for (let attr=0; attr<toon.getNumBlueprints(); attr++) {
        const a1 = document.importNode(temp.content.children[0], true);
        a1.textContent = toon.getBlueprintName(attr);
        div.appendChild(a1);

        const a2 = document.importNode(temp.content.children[1], true);
        a2.textContent = toon.getBlueprintDesc(attr);
        div.appendChild(a2);

        const a3 = document.importNode(temp.content.children[2], true);
        a3.textContent = toon.getBlueprintType(attr);
        div.appendChild(a3);
    }


    // Combat
    document.getElementById('initiative').textContent = toon.getInitiative();
    document.getElementById('fray2').textContent = toon.getFrayOverTwo();
    document.getElementById('lucidity').textContent = toon.getLucidity();
    document.getElementById('trauma-threshold').textContent = toon.getTraumaThreshold();
    document.getElementById('insanity-rating').textContent = toon.getInsanityRating();
    document.getElementById('shots1').textContent = game.getInc('shots1');
    document.getElementById('arm-en').textContent = toon.getTotalArmourEnergy();
    document.getElementById('arm-kin').textContent = toon.getTotalArmourKinetic();


    // damage
    document.getElementById('stress').textContent = game.getInc('stress');
    document.getElementById('traumas').textContent = game.getInc('traumas');
    document.getElementById('damage').textContent = game.getInc('damage');
    document.getElementById('wounds').textContent = game.getInc('wounds');


    // Morph
    document.getElementById('morph-name').textContent = toon.getMorphName();
    document.getElementById('morph-type').textContent = toon.getMorphType();
    document.getElementById('morph-move').textContent = toon.getMorphMovement();
    document.getElementById('morph-size').textContent = toon.getMorphSize();
    document.getElementById('morph-durability').textContent = toon.getMorphDurability();
    document.getElementById('morph-wound').textContent = toon.getMorphWoundThreshold();
    document.getElementById('morph-death').textContent = toon.getMorphDeathRating();


    // handle tabs
    let tabs = document.querySelectorAll('div.tabs div');
    if (game.getBool("main")) {
        selectRepTab("main", "fake");
    } else {
        selectRepTab("fake", "main");
    }
    for (const tab of tabs) {
        tab.addEventListener("click", (e) => {
            if ( tab.id == 'main-id-tab' ) {
                selectRepTab("main", "fake");
                game.setBool("main", true);
                game.setBool("fake", false);
            } else {
                selectRepTab("fake", "main");
                game.setBool("main", false);
                game.setBool("fake", true);
            }
        });
    }


    // handle checkboxes
    let boxes = document.querySelectorAll('input[type=checkbox]');
    for (const box of boxes) {
        if (game.getBool(box.id)) box.setAttribute('checked', 'checked');
        box.addEventListener("click", (e) => {
            game.toggle(box.id);
        });
    }


    // handle plus buttons
    let plusButtons = document.querySelectorAll('button.plus');
    for (const butt of plusButtons) {
        butt.addEventListener("click", (e) => {

            const attr = butt.getAttribute('data-attr');
            const isBounded = butt.getAttribute('data-bounded');
            const usedDiv = e.target.parentNode.previousElementSibling

            if (isBounded) {
                const actualDiv = usedDiv.previousElementSibling
                if (actualDiv.innerText > usedDiv.innerText) {
                    let val = game.inc(attr);
                    usedDiv.innerText = val;
                } else {
                    alert("All out of " + attr);
                }
            } else {
                let val = game.inc(attr);
                usedDiv.innerText = val;               
            }

        });
    }


    // handle minus buttons
    let minusButtons = document.querySelectorAll('button.minus');
    for (const butt of minusButtons) {
        butt.addEventListener("click", (e) => {

            const attr = butt.getAttribute('data-attr');
            const usedDiv = e.target.parentNode.previousElementSibling

            if (usedDiv.innerText > 0) {
                let val = game.dec(attr);
                usedDiv.innerText = val;
            } 

        });
    }


    // handle zero buttons
    let zeroButtons = document.querySelectorAll('button.zero');
    for (const butt of zeroButtons) {
        butt.addEventListener("click", (e) => {

            const attr = butt.getAttribute('data-attr');
            const usedDiv = e.target.parentNode.previousElementSibling

            if (usedDiv.innerText > 0) {
                let val = game.reset(attr);
                usedDiv.innerText = val;
            } 

        });
    }


    // make sure everything checks out
    console.log('Aptitudes (90)', toon.getTotalAptitudesBase());
    console.log('Skills (400)', toon.getTotalSkillsBase());
    console.log('Knows (250)', toon.getTotalKnowsBase());
    console.log('Rep (100)', toon.getTotalRepBase());
    const baseCP = toon.getBase('CP');
    const baseRP = toon.getBase('RP');
    const baseMP = toon.getBase('MP');
    const baseGP = toon.getBase('GP');
    const nettCP = baseCP - toon.getTotalAptitudesCPSpend() 
                            - toon.getTotalSkillsCPSpend() 
                            - toon.getTotalPoolsCPSpend() 
                            - toon.getTotalTraitsCPSpend()
                            - toon.getLanguagesCPSpend();
    const nettRP = baseRP - toon.getTotalAptitudesRPSpend() 
                            - toon.getTotalSkillsRPSpend() 
                            - toon.getTotalPoolsRPSpend() 
                            - toon.getTotalTraitsRPSpend();
    const nettMP = baseMP - toon.getMorphMPSpend()
                            - toon.getTotalMorphWareMPSpend()
                            - toon.getTotalPoolsMPSpend()
                            + toon.getResourcesLevel()
                            - toon.getTotalMorphTraitsMPSpend();
    const nettGP = baseGP - toon.getTotalGearGPSpend()
                            - toon.getTotalMorphWareGPSpend()
                            - toon.getTotalArmourGPSpend()
                            + toon.getResourcesLevel();
    console.log("CP Spend", {'1-BaseCP': baseCP, 
                            '2-Aptitude': -toon.getTotalAptitudesCPSpend(), 
                            '3-Skills': -toon.getTotalSkillsCPSpend(),
                            '4-Flex': -toon.getTotalPoolsCPSpend(),
                            '5-Rep': -toon.getTotalRepCPSpend(),
                            '6-Traits': -toon.getTotalTraitsCPSpend(),
                            '7-Langs': -toon.getLanguagesCPSpend(),
                            '9-nettCP': nettCP});
    console.log("RP Spend", {'1-BaseRP': baseRP, 
                            '2-Aptitude': -toon.getTotalAptitudesRPSpend(), 
                            '3-Skills': -toon.getTotalSkillsRPSpend(),
                            '4-Flex': -toon.getTotalPoolsRPSpend(),
                            '5-Rep': -toon.getTotalRepRPSpend(),
                            '6-Traits': -toon.getTotalTraitsRPSpend(),
                            '9-nettRP': nettRP});
    console.log("MP Spend", {'1-BaseMP': baseMP,
                            '2-Morph': -toon.getMorphMPSpend(),
                            '3-Ware': -toon.getTotalMorphWareMPSpend(),
                            '4-Flex': -toon.getTotalPoolsMPSpend(),
                            '5-Resources': toon.getResourcesLevel(),
                            '6-Traits': -toon.getTotalMorphTraitsMPSpend(),
                            '9-nettMP': nettMP});
    console.log('GP Spend', {'1-BaseGP': baseGP,
                            '2-Gear': -toon.getTotalGearGPSpend(),
                            '3-Ware': -toon.getTotalMorphWareGPSpend(),
                            '4-Armour': -toon.getTotalArmourGPSpend(),
                            '5-Resources': toon.getResourcesLevel(),
                            '9-nettGP': nettGP});
}

function selectRepTab(select, deselect) {
    document.getElementById(select + "-id-tab").classList.remove("light");
    document.getElementById(select + "-id-tab-body").classList.remove("hidden");
    document.getElementById(deselect + "-id-tab").classList.add("light");
    document.getElementById(deselect + "-id-tab-body").classList.add("hidden");
}

function createEquipId(input) {
    let output = input.toLowerCase();
    output = output.replace(/ /g, "-");
    return "equip-" + output;
}

// Plus and minus buttons
// function plus(ele, attr) {

//     let usedDiv = ele.parentNode.previousElementSibling
//     let actualDiv = usedDiv.previousElementSibling

//     if (actualDiv.innerText > usedDiv.innerText) {
//         let val = game.inc(attr);
//         usedDiv.innerText = val;
//     } else {
//         alert("All out of " + attr);
//     }
// }

// function minus(ele, attr) {

//     let usedDiv = ele.parentNode.previousElementSibling

//     if (usedDiv.innerText > 0) {
//         let val = game.dec(attr);
//         usedDiv.innerText = val;
//     } 
// } 

String.prototype.toProperCase = function(opt_lowerCaseTheRest) {
    return (opt_lowerCaseTheRest ? this.toLowerCase() : this)
      .replace(/(^|[\s\xA0])[^\s\xA0]/g, function(s){ return s.toUpperCase(); });
  };


function resetGame() {
    // localStorage.setItem("game", JSON.stringify("{}"));
    localStorage.removeItem("game");
    game = new Game();
    window.location.reload();
}


function exportGame() {

    var game = JSON.parse(localStorage.getItem("game"));
    var date = new Date();
    var dateString = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes();

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(game, null, 2)));
    element.setAttribute('download', "ep-game-" + dateString + ".json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

}


function importGame() {
    var error = document.getElementById("file-error");
    error.textContent = "";
    const selectedFile = document.getElementById('input').files[0];
    if (!selectedFile) {
        error.textContent = "Select a game file to import";
    } else {
        document.getElementById('input').value = null;
        const reader = new FileReader();
        reader.readAsText(selectedFile);
        reader.onload = function(evt) {
            // var toons = JSON.parse(localStorage.getItem("toons")) || {};
            const gameData = JSON.parse(reader.result);
            localStorage.setItem("game", JSON.stringify(gameData));
            window.location.reload();
        };
        reader.onerror = function() {
            alert(reader.error);
        };
    }
    
}


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