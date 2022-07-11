const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
	{
		id: 0,
		name: "Albert Einstein",
	},
	{
		id: 1,
		name: "Sir Isaac Newton",
	},
];

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});
app.get("/friends", (req, res) => {
	res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
	const friendId = Number(req.params.friendId);

	const friend = friends[friendId];
	if (friend) {
		res.status(200).json(friend);
	} else {
		res.status(404).json({
			error: "Friend does not exist",
		});
	}
});

app.get("/message", (req, res) => {
	res.send(`
		<ul>
		<li>
			Hello, world
		</li>
		<li>Welcome</li>
		</ul>
	`);
});

app.post("/message", (req, res) => {
	console.log("Updating message...");
});
app.listen(PORT, () => {
	console.log(`listing on port ${PORT}`);
});
