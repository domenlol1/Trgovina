const settings = require("./settings");
const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');
var cors = require('cors')
const app = express();
const serverPort = settings.serverPort;
const webPort = settings.webPort;
const webFolder = settings.webFolder;
let functions = require("./functions")(settings);
let router = require("./router")(functions);

app.use(cors({
    // write this, to only allow this specific ip
    // credentials: true,
    // origin: "http://192.168.178.72:8080"
}));

app.use(express.static(webFolder));
app.get('/', (req, res) => {
    fs.existsSync(webFolder) ? res.sendFile("index.html", {root: webFolder}) : res.send("You got lost?")
});

// redirect to front for everything else. Turn this on/off
app.get('/*',function (req, res) {
    res.redirect('/');
});

app.use(bodyParser.json());
app.use((req, res, next) => {
    req.cid = functions.getCid();
    next();
});

app.use("/api", router);
app.listen(serverPort, () => {
    console.log(" ");
    console.log(` Front server started. FrontServer listening on port ${serverPort}!`)
});
app.listen(webPort, () => { console.log(` Web server started. FrontServer listening on port ${webPort}!`);  console.log(" ")});
