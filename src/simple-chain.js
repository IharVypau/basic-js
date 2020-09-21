const CustomError = require("../extensions/custom-error");


const chainMaker = {
    result: [],
    getLength() {
        return this.result.length;
    },
    addLink(value) {
        this.result.push(value);
        return this;
    },
    removeLink(position) {
        if (typeof position == 'number' && position <= this.result.length - 1) {
            this.result.splice(position - 1, 1);
        } else {
            this.result = [];
            throw new Error('Invalid position');
        }
        return this;
    },
    reverseChain() {
        this.result.reverse();
        return this;
    },
    finishChain() {
        let tmp = []
        tmp = this.result.map((v, i) => {
            if ((this.result.length - 1 > i)) return `( ${v} )~~`;
            return `( ${v} )`;

        }).join('');
        this.result = [];
        return tmp;
    }
};

module.exports = chainMaker;