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
        chrome.scripting.executeScript(
            {
                target: { tabId: tab.id },
                files: ["content-script.js"],
            },
            () => console.log("i injected")
        );
    }
};
