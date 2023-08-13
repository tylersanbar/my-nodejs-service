const MJMessageModel = require('../models/MJMessageModel');

exports.index = function(req, res) {
    res.render('imagine', { pageTitle: 'Imagine', loggedIn: false, viewCss: '/css/imagine.css' });
};

exports.view = function(req, res) {
    res.render('image', { id: req.params.id, pageTitle: 'View Image', viewCss: '/css/image.css' });
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
            res.render('generate', { id: mjMessage.id, pageTitle: 'Generate Image', viewCss: '/css/generate.css' });
        } else {
            res.status(400).send("Image creation failed.");
        }
    } catch (error) {
        console.error("Error in generate:", error);
        res.status(500).send("Internal Server Error");
    }
}

exports.status = function(req, res) {
    // Implementation for status
}
