import express  from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    try {
        res.json({ message: "Hello from the server!" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});