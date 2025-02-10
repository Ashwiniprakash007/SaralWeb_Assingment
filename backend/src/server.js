const express = require("express");
const cors = require("cors");
const parseLog = require("./logParser");

const app = express();
const PORT = 5000;

app.use(cors());

// API Endpoint to get log data
app.get("/api/logs", async (req, res) => {
    try {
        const data = await parseLog();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error parsing logs" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
