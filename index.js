const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "success" });
})

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log('listening on', PORT);
});
