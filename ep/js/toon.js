class Toon {

    constructor(json) {
        Object.assign(this, json);
        this.poolTitles = {'vigor': 'REF & SOM', 'insight': 'COG & INT', 'moxie': 'SAV & WILL', 'flex': 'ALL'};
    }
    
    // Basics
    getBasics() { return this.#indexArray(this.basics); }
    getBasic(attr) { return this.basics[attr]; }
    //getName() { return this.basics.name; }
    //getBackground() { return this.basics.background; }
    //getCareer() { return this.basics.career; }
    //getInterests() { return this.basics.interests; }
    //getFaction() { return this.basics.faction; }
    getLanguages() { return this.basics.languages.base.join(', ') + (this.basics.languages['cp-langs'].length>0 ? ', '+this.basics.languages['cp-langs'].join(', ') : ''); }
    getLanguagesCPSpend() { return this.basics.languages['cp-langs'].length; }
    getMotivations() { return this.motivations; }
    getBase(x) { return this.base[x]; }
    getBasicsJSON() { return this.basics; }
    setBasicsJSON(json) { this.basics = json; }

    // Derived
    getInitiative() { return (this.getAptitude('ref') + this.getAptitude('int')) / 5; }
    getBaseLucidity() { return this.getAptitude('wil') * 2; }
    getLucidity() { return (this.getAptitude('wil') * 2) + this.#sumArray(this.traits, 'plus-luc'); }
    getTraumaThreshold() { return (this.getBaseLucidity() / 5) + this.#sumArray(this.traits, 'plus-tt'); }
    getInsanityRating() { return (this.getBaseLucidity() * 2) + this.#sumArray(this.traits, 'plus-ir'); }
    getFrayOverTwo() { return this.getSkill("fray") / 2; }
    
    // Attributes
    getAptitudes() { return this.#indexArray(this.aptitudes); }
    getAptitude(apt) { return this.aptitudes[apt] ? (this.aptitudes[apt]['base'] + this.aptitudes[apt]['cp-adj'] + this.aptitudes[apt]['rp-adj']) : 0; }
    getAptitudeTest(apt, val) { return this.getAptitude(apt) * 3; }
    getTotalAptitudesBase() { return this.#sumArray(this.aptitudes, 'base'); }
    getTotalAptitudesCPSpend() { return this.#sumArray(this.aptitudes, 'cp-adj'); }
    getTotalAptitudesRPSpend() { return this.#sumArray(this.aptitudes, 'rp-adj'); }
    getAptitudeJSON() { return this.aptitudes; }
    setAptitudeJSON(json) { this.aptitudes = json; }

    // Skills
    getSkills() { return this.#indexArray(this.skills); }
    getSkill(skill) { return (this.skills[skill]['base']>0 || this.skills[skill]['cp-adj']>0 || this.skills[skill]['rp-adj']>0) ? (this.skills[skill]['base'] + this.skills[skill]['cp-adj'] + this.skills[skill]['rp-adj'] + (this.getAptitude(this.skills[skill]['aptitude']) * this.getSkillAptitudeModifier(skill))) : ""; }
    getSkillAptitude(skill) { return this.skills[skill]['aptitude']; }
    getSkillAptitudeModifier(skill) { return (skill == 'fray' || skill == 'perceive') ? 2 : 1; }
    getSkillField(skill) { return this.skills[skill]['field']; }
    getTotalSkillsBase() { return this.#sumArrayIgnore(this.skills, 'base', 'know'); }
    getTotalKnowsBase() { return this.#sumArrayOnly(this.skills, 'base', 'know'); }
    getTotalSkillsCPSpend() { return this.#sumArray(this.skills, 'cp-adj') / 5; }
    getTotalSkillsRPSpend() { return this.#sumArray(this.skills, 'rp-adj') / 5; }
    getSkillJSON() { return this.skills; }
    setSkillJSON(json) { this.skills = json; }

    // Pools
    getPools() { return this.#indexArray(this.pools); }
    getPool(pool) { return this.pools[pool]['base'] + this.pools[pool]['cp-adj'] + this.pools[pool]['rp-adj'] + this.morph.pools[pool]['base'] + (this.morph.pools[pool]['mp-adj']||0); }
    getPoolTitle(pool) { return this.poolTitles[pool]; }
    getTotalPoolsCPSpend() { return this.pools.flex['cp-adj'] * 2; }
    getTotalPoolsRPSpend() { return this.pools.flex['rp-adj'] * 2; }
    getTotalPoolsMPSpend() { return this.morph.pools.flex['mp-adj'] * 2; }
    getPoolsJSON() { return this.pools; }
    setPoolsJSON(json) { this.pools = json; }

    // Rep
    getReps() { return this.#indexArray(this.rep); }
    getRep(rep, isFake) { return isFake ? this.rep[rep].fake : this.rep[rep]['base'] + this.rep[rep]['adj'] + this.rep[rep]['cp-adj'] + this.rep[rep]['rp-adj'] }
    getTotalRepBase() { return this.#sumArray(this.rep, 'base'); }
    getTotalRepCPSpend() { return this.#sumArray(this.rep, 'cp-adj') / 5; }
    getTotalRepRPSpend() { return this.#sumArray(this.rep, 'rp-adj') / 5; }
    getRepJSON() { return this.rep; }
    setRepJSON(json) { this.rep = json; }

    // Traits
    getNumTraits() { return this.traits.length; }
    getTrait(index) { return this.traits[index].trait; }
    getTraitDesc(index) { return this.traits[index].desc; }
    getResourcesLevel() { return this.#sumArray(this.traits, 'resources-lvl'); }
    getTotalTraitsCPSpend() { return this.#sumArray(this.traits, 'cp-adj'); }
    getTotalTraitsRPSpend() { return this.#sumArray(this.traits, 'rp-adj'); }
    getTraitsJSON() { return this.traits; }
    setTraitsJSON(json) { this.traits = json; }

    // Gear
    getNumGear() { return this.gear.length; }
    getGear(index) { return this.gear[index].gear; }
    getGearDesc(index) { return this.gear[index].desc; }
    getGearQty(index) { return this.gear[index].qty; }
    getTotalGearGPSpend() { return this.#sumArray(this.gear, 'gp-cost'); }
    getGearJSON() { return this.gear; }
    setGearJSON(json) { this.gear = json; }

    // BluePrints
    getNumBlueprints() { return this.blueprints.length; }
    getBlueprintName(index) { return this.blueprints[index].name; }
    getBlueprintDesc(index) { return this.blueprints[index].desc; }
    getBlueprintType(index) { return this.blueprints[index].type; }
    getBlueprintsJSON() { return this.blueprints; }
    setBlueprintsJSON(json) { this.blueprints = json; }

    // Armour
    getNumArmour() { return this.armour.length; }
    getArmour(index) { return this.armour[index].gear; }
    getArmourEnergy(index) { return this.armour[index].energy; }
    getArmourKinetic(index) { return this.armour[index].kinetic; }
    getArmourDesc(index) { return this.armour[index].desc; }
    getArmourQty(index) { return this.armour[index].qty; }
    getTotalArmourEnergy() { return this.#sumArray(this.armour, 'energy'); }
    getTotalArmourKinetic() { return this.#sumArray(this.armour, 'kinetic'); }
    getTotalArmourGPSpend() { return this.#sumArray(this.armour, 'gp-cost'); }

    // Weapons
    getNumWeapons() { return this.weapons.length; }
    getWeapon(index) { return this.weapons[index].gear; }
    getWeaponDamage(index) { return this.weapons[index].dmg; }
    getWeaponModes(index) { return this.weapons[index].modes; }
    getWeaponRange(index) { return this.weapons[index].range; }
    getWeaponAmmo(index) { return this.weapons[index].ammo; }
    getWeaponDesc(index) { return this.weapons[index].desc; }
    getTotalWeaponGPSpend() { return this.#sumArray(this.weapons, 'gp-cost'); }

    // Morph
    getMorphName() { return this.morph.name; }
    getMorphType() { return this.morph.type; }
    getMorphMovement() { return this.morph.movement; }
    getMorphSize() { return this.morph.size; }
    getMorphDurability() { return this.morph.durability + this.#sumArray(this.morph.ware, 'plus-dur'); }
    getMorphWoundThreshold() { return (this.morph.durability / 5) + this.#sumArray(this.morph.ware, 'plus-wt'); }
    getMorphDeathRating() { return this.#morphDeathRating(this.morph.type, this.getMorphDurability()) + this.#sumArray(this.morph.ware, 'plus-dr'); }
    getMorphMPSpend() { return this.morph['mp-cost']; }
    

    // Morph Traits
    getNumMorphTraits() { return this.morph.traits.length; }
    getMorphTrait(index) { return this.morph.traits[index].trait; }
    getMorphTraitDesc(index) { return this.morph.traits[index].desc; }
    getTotalMorphTraitsMPSpend() { return this.#sumArray(this.morph.traits, 'mp-cost'); }

    // Morph Ware
    getNumMorphWares() { return this.morph.ware.length; }
    getMorphWare(index) { return this.morph.ware[index].ware; }
    getMorphWareDesc(index) { return this.morph.ware[index].desc; }
    getTotalMorphWareMPSpend() { return this.#sumArray(this.morph.ware, 'mp-cost'); }
    getTotalMorphWareGPSpend() { return this.#sumArray(this.morph.ware, 'gp-cost'); }

        
    // Private functions
    #sumArray(obj, attrib) {
        var tot = 0;
        for (const name in obj) {
            tot += (obj[name][attrib] ? obj[name][attrib] : 0);
        }
        return tot;
    }

    #sumArrayIgnore(obj, attrib, start) {
        var tot = 0;
        for (const name in obj) {
            tot += (name.startsWith(start) ? 0 : obj[name][attrib]);
        }
        return tot;
    }

    #sumArrayOnly(obj, attrib, start) {
        var tot = 0;
        for (const name in obj) {
            tot += (name.startsWith(start) ? obj[name][attrib] : 0);
        }
        return tot;
    }

    #indexArray(obj) {
        var ret = [];
        for (const attr in obj) {
            ret.push(attr);
        }
        return ret;
    }

    #morphDeathRating(type, dur) {
        if (type == 'Synthmorph' || type == 'Infomorph') {
            return dur * 2;
        } else {
            return Math.round(dur * 1.5);
        }
    }

    #cost(obj) {
        var res = [];
        if (obj["cp-cost"] && obj["cp-cost"] > 0) res.push("(cp)");
        if (obj["gp-cost"] && obj["gp-cost"] > 0) res.push("(gp)");
        if (obj["mp-cost"] && obj["mp-cost"] > 0) res.push("(mp)");
        var ret = res.join(" ");
        return ret=="" ? "" : " " + ret;
    }

}