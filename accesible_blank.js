function fix_external_links() { 
    if (!document.getElementsByTagName) return; 
    var anchors = document.getElementsByTagName("a"); 
    for (var i = 0; i < anchors.length; i++) { 
        var anchor = anchors[i]; 
        if (anchor.getAttribute("rel") && anchor.getAttribute("rel") == "external" && anchor.getAttribute("title")) { 
            anchor.target = "_blank"; 
			anchor.title = anchor.getAttribute("title") + " (se abre en nueva ventana)";
        }
		else if (anchor.getAttribute("rel") && anchor.getAttribute("rel") == "external"){
			anchor.target = "_blank"; 
			anchor.title = "(se abre en nueva ventana)";
		}
		
    
} 

}

window.onload = fix_external_links;