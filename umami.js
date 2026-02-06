(function () {
  if (!document.querySelector('script[src="https://telemetry.throney.gg/script.js"]')) {
    const script = document.createElement("script");
    script.src = "https://telemetry.throney.gg/script.js";
    script.async = true;
    script.dataset.websiteId = "11406f2a-3986-49f4-8d16-9c105a143a8c";

    document.body.appendChild(script);
  }
})();