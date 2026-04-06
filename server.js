const express = require("express");
const cors = require("cors"); // 1. Import it
const app = express();

app.use(cors()); // 2. Enable it for all origins
app.use(express.json());

const container = [
    {id:1, title:"Container A", color:"#FF5733", content:"Data from server 1"},
    {id:2, title:"Container B", color:"#33FF57", content:"Data from server 2"},
    {id:3, title:"Container C", color:"#3357FF", content:"Data from server 3"},
    {id:4, title:"Container D", color:"#F333FF", content:"Data from server 4"},
    {id:5, title:"Container E", color:"#FF33A8", content:"Data from server 5"},
];

// Ensure this path is EXACTLY /container
app.get("/container", (req, res) => {
    res.json(container);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});