document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0];
        var url = new URL(currentTab.url);
        var siteName = url.hostname;
        document.getElementById('siteName').textContent = siteName;
    });
});