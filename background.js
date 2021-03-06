'use strict';

let blacklist = ["youtube.com","facebook.com","espn.com"];

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab)
    {
        if(changeInfo.url ){
            const blacklisted = blacklist.some(el => changeInfo.url.includes(el));
            if (blacklisted) {
                const r =confirm("BY CLICKING OK YOU AGREE TO WASTE TIME ON THIS SITE");
                if (r !== true){
                    chrome.tabs.remove(tabId);
                }
            }
        }
    });

chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse) {
        if(request.type === "new site") {
            const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
            let url = request.site.toString();
            const found = regex.test(url);
            if (!blacklist.includes(url) && found){
                blacklist.push(url);
            }
        }

    });