chrome.runtime.onMessage.addListener(function(message, messageSender, sendResponse) {
	var button = document.getElementById('app-player').contentWindow.document.getElementById(message.command);
	button.click();
});