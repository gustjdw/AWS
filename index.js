const express = require('express');
const app = express();
const port = 3001;

app.set('port', port);
app.get('/', (req, res) => {
    res.send("Hello");
    //res.status(200).json({ success: true, message: "Success" });
});

app.listen(port, () => {
    console.log('Example app listening on port 3001');
});

module.exports = app;