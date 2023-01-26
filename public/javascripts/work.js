$(document).ready(function () {
  ///////////////////////////////////////////////////////////
  // Pagination between works:
  function getCurrentURL() {
    const { pathname } = window.location;

    return pathname;
  }

  const urls = ["/adeslogo", "/zone", "/omnifood", "/homely", "/cottonpasta"];

  document.onkeydown = checkKey;

  function checkKey(e) {
    const atciveUrl = getCurrentURL();
    const activeUrlIndex = urls.indexOf(atciveUrl);

    let nexUrlIndex = undefined;

    e = e || window.event;

    // left <-
    if (e.keyCode == "37") {
      if (activeUrlIndex === 0) {
        nexUrlIndex = urls.length - 1;
      } else {
        console.log(activeUrlIndex);
        nexUrlIndex = activeUrlIndex - 1;
      }
    }
    // right ->
    if (e.keyCode == "39") {
      console.log("right");
      if (activeUrlIndex + 1 === urls.length) {
        nexUrlIndex = 0;
      } else {
        nexUrlIndex = activeUrlIndex + 1;
      }
    }

    window.open(urls[nexUrlIndex], "_self");
  }
});
