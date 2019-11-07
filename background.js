'use strict';

let blacklist = [];

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab)
    {
        if(changeInfo.url && changeInfo.url.includes('youtube.com')){
            console.log("BLACKLIST");
        }
    });
