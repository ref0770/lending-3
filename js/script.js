/**
 * Підставляє номер телефону та посилання на месенджер із js/config.js
 * у всі відповідні елементи сторінки. Єдине джерело правди — config.js.
 */
(function () {
  "use strict";

  function init() {
    var config = window.SITE_CONFIG || {};
    var telHref = "tel:" + config.phoneTel;

    document.querySelectorAll(".js-phone-number").forEach(function (el) {
      el.textContent = config.phoneDisplay;
    });

    document.querySelectorAll(".js-call-link").forEach(function (el) {
      el.setAttribute("href", telHref);
    });

    document.querySelectorAll(".js-messenger-link").forEach(function (el) {
      if (config.messengerUrl) {
        el.setAttribute("href", config.messengerUrl);
        el.removeAttribute("hidden");
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
