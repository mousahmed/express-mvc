const path = require("path");

function getMessages(req, res) {
	// res.sendFile(path.join(__dirname, "..", "public", 'images', "skimountain.jpg"));
	res.render("messages", {
		title: "Messages to my friends",
		friend: "Albert Einstein",
	});
}

function postMessage(req, res) {
	console.log("Updating message...");
}

module.exports = {
	getMessages,
	postMessage,
};
