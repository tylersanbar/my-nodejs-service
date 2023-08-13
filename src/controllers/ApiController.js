const path = require('path');

exports.index = function(req, res) {
    res.render('api', { pageTitle: 'Imagine' });
};

exports.generate = async function(req, res) {
    try {
        const prompt = req.body.prompt;
        const message = await Imagine(prompt);

        if (message) {
            const mjMessage = new MJMessageModel(message);
            await mjMessageRepository.save(mjMessage);
            res.status(200).send("Saved successfully!");
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
