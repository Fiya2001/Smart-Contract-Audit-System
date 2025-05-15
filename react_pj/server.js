//const express = require('express');
//const slither = require('slither-analyzer');
//const app = express();
//const port = process.env.PORT || 3000;

//// Middleware to parse JSON requests
//app.use(express.json());

//// Define a route for analyzing Solidity code
//app.post('/analyze', async (req, res) => {
//    try {
//        // Assuming you send Solidity code in the request body
//        const solidityCode = req.body.code;
//        const analysisResult = await slither.analyzeString(solidityCode);
//        res.json(analysisResult);
//    } catch (error) {
//        console.error('Error analyzing Solidity code:', error);
//        res.status(500).json({ error: 'An error occurred' });
//    }
//});

//app.listen(port, () => {
//    console.log(`Server is running on port ${port}`);
//});
