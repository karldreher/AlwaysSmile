
url = document.URL

//
//This ID comes from Amazon and appears to identify if the page is already on the "prompt page" for amazon smile.  
//if this is not supported in the future the extension will probably supply its own.  

if (url.match("pldnSite=1")){

}
//All clear?  redirect the page.  
else{
	window.location.replace(url.replace("www.amazon.","smile.amazon."));
}


