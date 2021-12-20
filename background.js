chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    injectSightseer(tab);
});

injectSightseer = (tab) => {
    if (tab.audible !== true) {
        return;
    }
    if (
        /^https:\/\/www\.bilibili.com\/video\/BV([a-z|A-Z|0-9]{10})/.test(
            tab.url
        )
    ) {
        chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
            console.log("i injected")
        );
    }
};
