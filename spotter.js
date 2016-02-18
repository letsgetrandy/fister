

var text = window.document.body.textContent,
    path = chrome.extension.getURL('fist.jpg');

if (/feminis[mt]|social justice|patriarchy/.test(text)) {
    chrome.extension.sendRequest({});

    if (/okcupid/.test(window.location.hostname)) {
        var body = window.document.querySelector('.profile2015-content.about');
        if (body) {
            body.style.backgroundImage = 'url(' + path + ')';
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'top center';
        }
    }
}

