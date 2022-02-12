class Toon {

    constructor(json) {
        Object.assign(this, json);
        this.poolTitles = {'vigor': 'REF & SOM', 'insight': 'COG & INT', 'moxie': 'SAV & WILL', 'flex': 'ALL'};
    }
    
    // Basics
    getBasics() { return this.#indexArray(this.basics); }
    getBasic(attr) { return this.basics[attr]; }
    getName() { return this.basics.name; }
    getBackground() { return this.basics.background; }
    getCareer() { return this.basics.career; }
    getInterests() { return this.basics.interests; }
    getFaction() { return this.basics.faction; }
    getLanguages() { return this.basics.languages.base.join(', ') + (this.basics.languages['cp-langs'].length>0 ? ', '+this.basics.languages['cp-langs'].join(', ') : ''); }
    getLanguagesCPSpend() { return this.basics.languages['cp-langs'].length; }
    getMotivations() { return this.basics.motivations; }
    getBase(x) { return this.base[x]; }
    getBasicsJSON() { return this.basics; }
    setBasicsJSON(json) { this.basics = json; }

    // Derived
    getInitiative() { return (this.getAptitude('ref') + this.getAptitude('int')) / 5; }
    getLucidity() { return this.getAptitude('wil') * 2; }
    getTraumaThreshold() { return this.getLucidity() / 5; }
    getInsanityRating() { return this.getLucidity() * 2; }
    
    // Attributes
    getAptitudes() { return this.#indexArray(this.aptitudes); }
    getAptitude(apt) { return this.aptitudes[apt] ? (this.aptitudes[apt]['base'] + this.aptitudes[apt]['cp-adj']) : 0; }
    getAptitudeTest(apt, val) { return this.getAptitude(apt) * 3; }
    getTotalAptitudesBase() { return this.#sumArray(this.aptitudes, 'base'); }
    getTotalAptitudesCPSpend() { return this.#sumArray(this.aptitudes, 'cp-adj') / 5; }
    getAptitudeJSON() { return this.aptitudes; }
    setAptitudeJSON(json) { this.aptitudes = json; }

    // Skills
    getSkills() { return this.#indexArray(this.skills); }
    getSkill(skill) { return this.skills[skill]['base'] + this.skills[skill]['cp-adj'] + (this.getAptitude(this.skills[skill]['aptitude']) * this.getSkillAptitudeModifier(skill)); }
    getSkillAptitude(skill) { return this.skills[skill]['aptitude']; }
    getSkillAptitudeModifier(skill) { return (skill == 'fray' || skill == 'perceive') ? 2 : 1; }
    getSkillField(skill) { return this.skills[skill]['field']; }
    getTotalSkillsBase() { return this.#sumArrayIgnore(this.skills, 'base', 'know'); }
    getTotalKnowsBase() { return this.#sumArrayOnly(this.skills, 'base', 'know'); }
    getTotalSkillsCPSpend() { return this.#sumArray(this.skills, 'cp-adj') / 5; }
    getSkillJSON() { return this.skills; }
    setSkillJSON(json) { this.skills = json; }

    // Pools
    getPools() { return this.#indexArray(this.pools); }
    getPool(pool) { return this.pools[pool]['base'] + this.pools[pool]['cp-adj'] + this.morph.pools[pool]['base'] + (this.morph.pools[pool]['mp-adj']||0); }
    getPoolTitle(pool) { return this.poolTitles[pool]; }
    getTotalPoolsCPSpend() { return this.pools.flex['cp-adj'] * 2; }
    getTotalPoolsMPSpend() { return this.morph.pools.flex['mp-adj'] * 2; }
    getPoolsJSON() { return this.pools; }
    setPoolsJSON(json) { this.pools = json; }

    // Rep
    getReps() { return this.#indexArray(this.rep); }
    getRep(rep, isFake) { return isFake ? this.rep[rep].fake : this.rep[rep]['base'] + this.rep[rep]['cp-adj'] }
    getTotalRepBase() { return this.#sumArray(this.rep, 'base'); }
    getTotalRepCPSpend() { return this.#sumArray(this.rep, 'cp-adj') / 5; }
    getRepJSON() { return this.rep; }
    setRepJSON(json) { this.rep = json; }

    // Traits
    getNumTraits() { return this.traits.length; }
    getTrait(index) { return this.traits[index].trait; }
    getTraitDesc(index) { return this.traits[index].desc; }
    getResourcesLevel() { return this.#sumArray(this.traits, 'resources-lvl'); }
    getTotalTraitsCPSpend() { return this.#sumArray(this.traits, 'cp-adj'); }
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

    // Morph
    getMorphName() { return this.morph.name; }
    getMorphType() { return this.morph.type; }
    getMorphMovement() { return this.morph.movement; }
    getMorphSize() { return this.morph.size; }
    getMorphDurability() { return this.morph.durability; }
    getMorphWoundThreshold() { return this.morph.durability / 5; }
    getMorphDeathRating() { return this.#morphDeathRating(this.morph.type, this.morph.durability); }
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

        
    // Private functions
    #sumArray(obj, attrib) {
        var tot = 0;
        for (const name in obj) {
            tot += obj[name][attrib];
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

}