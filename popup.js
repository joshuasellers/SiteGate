let setSite = document.getElementById('setSite');

setSite.onclick = function() {
    const url = document.getElementById('website').value;
    chrome.runtime.sendMessage({type: "new site", site:url});
};