const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();

async function getSessionSecret() {
    const [version] = await client.accessSecretVersion({
        name: 'projects/' + process.env.GCLOUD_PROJECT + '/secrets/session-secret/versions/latest',
    });
    return version.payload.data.toString('utf8');
}

async function getFirebaseApiKey() {
    const [version] = await client.accessSecretVersion({
        name: 'projects/' + process.env.GCLOUD_PROJECT + '/secrets/firebase-api-key/versions/latest',
    });
    const payload = version.payload.data.toString('utf8');
    return JSON.parse(payload); // Assuming the Firebase config is stored as a stringified JSON.
}

module.exports = { getSessionSecret, getFirebaseApiKey };
