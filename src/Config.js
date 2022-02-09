const fs = require('fs')

class Config {
    constructor () {
        this.items = {};
    }


    load (filename) {
        try {
            var txt = fs.readFileSync(filename, 'utf8');
        }
        catch (e) {
            console.log(e);
            return false;
        }

        let lines = txt.split(/\r?\n/);

        for (let currLine of lines) {
            let pair = currLine.split(/=/, 2);
            if (pair.length == 2) {
                this.set(pair[0], pair[1]);
            }
        }

        return true;
    }


    save (filename) {
        let txt = '';
        for (let item in this.items) {
            txt += `${item}=${this.items[item]}\x0d\x0a`;
        }

        try {
            fs.writeFileSync(filename, txt, 'utf8');
            return true;
        }
        catch (e) {
            console.log(e);
        }
        return false;
    }


    get (key, defVal) {
        return key in this.items ? this.items[key] : defVal;
    }


    set (key, value) {
        this.items[key] = value;
    }


    clear () {
        this.items = {}
    }
};


module.exports = Config;
