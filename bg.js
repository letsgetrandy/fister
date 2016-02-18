
//function onRequest(request, sender, sendResponse) {
//    chrome.pageAction.show(sender.tab.id);
//    chrome.pageAction.setTitle( {"tabId": sender.tab.id, "title": "A " + request.type + " popup was blocked on this page."} );
//    //alert(request.type);
//    sendResponse();
//}
//chrome.extension.onRequest.addListener (onRequest);

chrome.extension.onRequest.addListener(
    function(request, sender, respond) {
        chrome.pageAction.show(sender.tab.id);
        chrome.pageAction.setTitle(
            {
                "tabId": sender.tab.id,
                "title": "There appears to be feminist propaganda on this page."
            }
        );
    }
);
