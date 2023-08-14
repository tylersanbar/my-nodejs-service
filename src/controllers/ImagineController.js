const MJMessageModel = require('../models/MJMessageModel');

exports.index = function(req, res) {
    res.render('imagine', { pageTitle: 'Imagine', viewCss: '/css/imagine.css' });
};

exports.view = async function(req, res) {
    const msg = await MJMessageModel.getById(req.params.id);
    res.render('image', { url: msg.uri, pageTitle: 'View Image', viewCss: '/css/image.css' });
};

exports.generate = async function(req, res) {
    try {
        const prompt = req.body.prompt;
        console.log("Prompt:", prompt)
        const mjMessage = await MJMessageModel.create(prompt);
        console.log("mjMessage:", mjMessage);
        if (mjMessage) {
            await mjMessage.save();
            console.log("Saved successfully!");
            res.redirect('/imagine/image/view/' + mjMessage.id);
        } else {
            res.status(400).send("Image creation failed.");
        }
    } catch (error) {
        console.error("Error in generate:", error);
        res.status(500).send("Internal Server Error");
    }
}
