const express = require('express');
const cors = require('cors');
const postsRoutes = require("./routes/postsRoutes")
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api/posts", postsRoutes);

app.listen(PORT, (req, res) => {
    console.log(`Server is listening ${PORT}`);
});