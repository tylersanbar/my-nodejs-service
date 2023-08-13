const datastore = require('../config/datastore');
const USER_KIND = 'User';

class UserRepository {
    static async create(userData) {
        const userKey = datastore.key(USER_KIND);
        const entity = {
            key: userKey,
            data: userData,
        };
        await datastore.save(entity);
        return { id: userKey.id, ...userData };
    }

    static async findByFirebaseUID(firebaseUID) {
        const query = datastore.createQuery(USER_KIND).filter('firebase_uid', '=', firebaseUID);
        const [users] = await datastore.runQuery(query);

        if (users.length > 0) {
            return users[0];
        }
        return null;
    }

    // ... You can add more methods for querying or updating users as required
}

module.exports = UserRepository;
