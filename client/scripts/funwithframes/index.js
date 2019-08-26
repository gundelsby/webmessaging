export { init };

function init() {
  document.addEventListener('click', buttonClickHandler);
}

function buttonClickHandler(event) {
  if (event.target instanceof HTMLButtonElement && event.target.dataset.value) {
    const text = event.target.textContent;
    const value = event.target.dataset.value;
    for (const iframe of document.getElementsByTagName('iframe')) {
      iframe.contentWindow.postMessage({ text, value }, '*');
    }
  }
}
