function sendMessage(message){
	chrome.tabs.query({url: "https://play.spotify.com/*"}, function(tabList) {
		// connect to the first tab you find
		if (tabList.length > 0) {
			var tabID = tabList[0].id;
			chrome.tabs.sendMessage(tabID, {command: message});
		} else {
			// no Spotify tabs
			console.error('No Spotify player open');
		}
	});
}

chrome.commands.onCommand.addListener(function(command) {
	console.log('Command: ' + command);
	sendMessage(command);
});
