// popup.js

document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.sendMessage({ action: "getText" }, (response) => {
        document.getElementById("text-container").innerText = response;
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendText") {
        document.getElementById("text-container").innerText = message.data;
    }
});
