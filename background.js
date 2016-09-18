chrome.omnibox.onInputEntered.addListener(
	function(text, complete) {
		if(text == ""){
			chrome.tabs.update({
				url: "http://reddit.com"
			});
		} else {
			chrome.tabs.update({
				url: "http://reddit.com/r/" + text
			});
		}
	}
);