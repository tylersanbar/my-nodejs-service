const MJMessageRepository = require('../repositories/MJMessageRepository');

class MJMessageModel {
    constructor(data) {
        this.uri = data.uri;
        this.proxy_url = data.proxy_url;
        this.content = data.content;
        this.flags = data.flags;
        this.id = data.id;
        this.hash = data.hash;
        this.progress = data.progress;
        this.options = data.options;
        this.width = data.width;
        this.height = data.height;
    }

    async save() {
        await MJMessageRepository.saveMessage(this);
    }

    static async create(prompt) {

        const msg = await require('../services/midjourney').imagine(prompt);

        if (msg) {
            return new MJMessageModel(msg);
        } else {
            throw new Error('Request failed!');
        }
    }

    // Add any other methods you need for this model here, like delete(), getById(), etc.
}

module.exports = MJMessageModel;
