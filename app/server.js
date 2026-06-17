const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Node.js AWS DevOps Project Running Successfully");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/api/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "John"
        },
        {
            id: 2,
            name: "Alice"
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});