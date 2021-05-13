
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		url = details.url
		if (url.match("pldnSite=1")){
			//This ID comes from Amazon and appears to identify if the page is already on the "prompt page" for amazon smile.  
			//if this is not supported in the future the extension will probably supply its own.  
		}
		
		else{
			//All clear?  redirect the page.  
			console.log(url)
			newurl = url.replace("www.amazon.","smile.amazon.")
			console.log(newurl)
			return {redirectUrl: newurl};
		}
	}, 

	{urls : [
		"https://www.amazon.co.uk/*",
		"https://www.amazon.com/*",
		"https://www.amazon.de/*"],
		
	types: ["main_frame","sub_frame"]}, 
	["blocking"]
);
