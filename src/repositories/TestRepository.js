const datastore = require('../config/datastore');
const Repository = require('./Repository.js');

class TestRepository extends Repository{

    async saveText(text) {
        const kind = 'Text';
        const data = {
            text: text
        }
        await this.saveEntity(kind, data);
    }

    // Additional methods like getById, delete, etc.
}

module.exports = new TestRepository();
