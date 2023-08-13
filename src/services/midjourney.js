const Midjourney = require("midjourney");
require('dotenv').config();

async function imagine(prompt) {
  try {
    const client = new Midjourney.Midjourney({
      ServerId: process.env.SERVER_ID,
      ChannelId: process.env.CHANNEL_ID,
      SalaiToken: process.env.SALAI_TOKEN,
      Debug: false,
      Ws: false,
    });
  
    const msg = await client.Imagine(
      prompt,
      (uri, progress) => {
        console.log("loading", uri, "progress", progress);
      }
    );
    console.log(msg);
    return msg;
  } catch (error) {
    console.error(error);
    throw error; // Propagate the error so it can be handled in the main app
  }
}

module.exports = {imagine};