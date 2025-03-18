const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// API endpoint to add two numbers
app.get('/add', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    let sum = num1 + num2;
    res.json({ result: sum });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
