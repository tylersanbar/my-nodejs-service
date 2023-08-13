const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();

async function accessSecretVersion() {
    const [version] = await client.accessSecretVersion({
        name: 'projects/' + process.env.GCLOUD_PROJECT + '/secrets/session-secret/versions/latest',
    });
    return version.payload.data.toString('utf8');
}

module.exports = { accessSecretVersion };
