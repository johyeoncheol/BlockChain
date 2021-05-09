const Block = require('.block')

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }

    createGenesisBlock() {
        return new Block(0, "05/19/2019", "genesis block", "0");
    }

    getLastestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(nweBLock) {
        nweBLock.previousHash = this.getLastestBlock().hash;
        nweBLock.mineBlock(this.difficulty);
        this.chain.push(nweBLock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}