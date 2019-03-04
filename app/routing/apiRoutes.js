var friendData = require("../data/friends.js");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });
    app.post("/api/friends", (req, res) => {
        console.log(req.body);
        friendData.push(req.body);
        res.json(true);
    });
}
