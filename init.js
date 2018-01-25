var trackerScript = document.createElement("script");
var trackerInstance;
trackerScript.setAttribute("type","text/javascript");
trackerScript.setAttribute("src", "index.js");
document.getElementsByTagName("head")[0].appendChild(trackerScript);
if(navigator.appName == "Microsoft Internet Explorer") {
	trackerScript.onreadystatechange = function() {
		if (this.readyState == "loaded" || this.readyState == "complete") {
			trackerInstance = new EnquiryForm();
		}
	}
} else{
	trackerScript.onload = function() {
		trackerInstance = new EnquiryForm();
		trackerScript = null;
	}
}
