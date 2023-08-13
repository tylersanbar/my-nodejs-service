const datastore = require('../config/datastore');

class Repository {
    async saveEntity(kind, data) {
        const textKey = datastore.key([kind]);

        const entity = {
            key: textKey,
            data: data
        };

        const MAX_RETRIES = 3;
        let attempt = 0;

        while (attempt < MAX_RETRIES) {
            try {
                await datastore.save(entity);
                console.log(`Saved ${kind} with ID: ${textKey.id}`);
                break; // Exit the loop if successful
            } catch (error) {
                console.error(`Attempt ${attempt + 1} failed with error: ${error.message}`);
                attempt++;

                if (attempt >= MAX_RETRIES) {
                    console.error(`Max retries reached. Could not save the ${kind}.`);
                    throw error; // Re-throw the error if max retries reached
                }

                // Delay the next attempt - here's a simple 2 seconds delay.
                // Consider using an exponential backoff delay for production use.
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
    }

    async getMessageById(kind, id) {
        console.log("getMessageById:", id);
        const query = datastore.createQuery(kind).filter('id', '=', parseInt(id, 10));
        const [result] = await datastore.runQuery(query);
        return result[0];
    }

    // Additional methods like getById, delete, etc.
}

module.exports = Repository;