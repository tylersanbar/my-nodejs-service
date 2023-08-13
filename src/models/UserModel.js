const UserRepository = require('../repositories/UserRepository');

class UserModel {
    static async create(userData) {
        return await UserRepository.create(userData);
    }

    static async findByFirebaseUID(firebaseUID) {
        return await UserRepository.findByFirebaseUID(firebaseUID);
    }

    // ... You can add more methods as required
}

module.exports = UserModel;
