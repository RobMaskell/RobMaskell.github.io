class Game {

    constructor() {
        //Object.assign(this, json);
        let stored = localStorage.getItem('game');
        Object.assign(this, {
                                'incs': {
                                    'vigor': 0, 
                                    'insight': 0, 
                                    'moxie': 0, 
                                    'flex': 0,
                                    'stress': 0,
                                    'traumas': 0,
                                    'damage': 0,
                                    'wounds': 0,
                                    'shots1': 0,
                                    'shots2': 0
                                },
                                'bools': {
                                    'short1': false, 
                                    'short2': false, 
                                    'long': false,
                                    'main': true,
                                    'fake': false,
                                    'main-min1': false,
                                    'main-min2': false,
                                    'main-min3': false,
                                    'main-mod1': false,
                                    'main-maj1': false,
                                    'fake-min1': false,
                                    'fake-min2': false,
                                    'fake-min3': false,
                                    'fake-mod1': false,
                                    'fake-maj1': false
                                }
        });
        Object.assign(this, JSON.parse(stored));
    }

    getBool(attr) { return this.bools[attr]; }
    getBools() { return this.#indexArray(this.bools); }
    toggle(attr) { this.bools[attr] = !this.bools[attr]; this.#save(); }
    setBool(attr, bool) { this.bools[attr] = bool; this.#save(); }

    getInc(attr) { return this.incs[attr] || 0; }
    inc(attr) { this.incs[attr]+=1; this.#save(); return this.incs[attr]; }
    dec(attr) { this.incs[attr]-=1; this.#save(); return this.incs[attr]; }
    reset(attr) { this.incs[attr]=0; this.#save(); return this.incs[attr]; }

    #save() { localStorage.setItem("game", JSON.stringify(this)); }

    #indexArray(obj) {
        var ret = [];
        for (const attr in obj) {
            ret.push(attr);
        }
        return ret;
    }

}