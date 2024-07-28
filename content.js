// content.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "extractText") {
      const bodyText = document.body.innerText;
      sendResponse({ data: bodyText });
    }
  });
  