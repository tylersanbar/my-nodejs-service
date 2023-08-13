const ImageRouter = require('express').Router();
const ImagineController = require("../../controllers/ImagineController");
ImageRouter.get('/view/:id', (req, res) => {
    // This is a page request, render the page
    res.render('image', { id: req.params.id });
  });
  
  
  ImageRouter.get('/status/:id', (req, res) => {
console.log('Checking status');
// const id = req.params.id;

// if (!jobs[id]) {
//     res.status(404).send('No such job found');
//     return;
// }

// // Set headers for SSE
// res.setHeader('Content-Type', 'text/event-stream');
// res.setHeader('Cache-Control', 'no-cache');
// res.setHeader('Connection', 'keep-alive');

// // Check job status every second and send update
// let interval = setInterval(() => {
//     console.log(`Job ${id} status: ${jobs[id].status}`);
//     if (jobs[id].status !== 'processing') {
//     res.write(`data: ${JSON.stringify(jobs[id])}\n\n`);
//     clearInterval(interval);
//     res.end();
//     }
// }, 3000);
});

module.exports = ImageRouter;