const datastore = require('../config/datastore');
const Repository = require('./Repository');

class MJMessageRepository extends Repository{

    async saveMessage(mjMessage) {
        const kind = 'MJImage';
        const data =
        {
            uri: mjMessage.uri,
            proxy_url: mjMessage.proxy_url,
            content: mjMessage.content,
            flags: mjMessage.flags,
            id: mjMessage.id,
            hash: mjMessage.hash,
            progress: mjMessage.progress,
            options: JSON.stringify(mjMessage.options),  // Since Datastore does not support array of objects directly
            width: mjMessage.width,
            height: mjMessage.height
        }
        await this.saveEntity(kind, data);
    }

    // Additional methods like getById, delete, etc.
}

module.exports = new MJMessageRepository();
