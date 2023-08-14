const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const { get } = require('http');
const client = new SecretManagerServiceClient();
const SECRET_KEY_NAMES = {
    fireBaseApi: 'firebase-api-key',
    sessionSecret: 'session-secret'
}

function getSessionSecret() {
    return getSecret(SECRET_KEY_NAMES.sessionSecret, 'latest');
}

function getFirebaseApiKey() {
    return getSecret(SECRET_KEY_NAMES.fireBaseApi, 'latest');
}

async function getSecret(secretName, versionRequest) {
    const [version] = await client.accessSecretVersion({
        name: 'projects/' + process.env.GCLOUD_PROJECT + '/secrets/' + secretName + '/versions/' + versionRequest,
    });
    return version.payload.data.toString();
}

module.exports = { getSessionSecret, getFirebaseApiKey };
