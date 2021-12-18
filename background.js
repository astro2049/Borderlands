chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    injectSightseer(tab);
});

injectSightseer = (tab) => {
    if (tab.audible !== true) {
        return;
    }
    if (/^https:\/\/www\.bilibili.com\/video\/BV/.test(tab.url)) {
        chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
            console.log("i injected")
        );
    }
};
