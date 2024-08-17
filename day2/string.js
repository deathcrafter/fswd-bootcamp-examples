console.group("Strings");

{
  console.group("find and extract");

  // Find the index of the substring "tcr" in the string "javascriptcr"
  console.log("javascriptcr".indexOf("tcr")); // Output: 7

  // Get the substring from index 4 to 7 (not including 7) in the string "javascript"
  console.log("javascript".substring(4, 7)); // Output: "scr"

  // Extract a section of the string "javascript" from index 4 to 7 (not including 7)
  console.log("javascript".slice(4, 7)); // Output: "scr"

  // Get the character at index 4 in the string "javascript"
  console.log("javascript".charAt(4)); // Output: "s"

  // Get the Unicode value of the character at index 4 in the string "javascript"
  console.log("javascript".charCodeAt(4)); // Output: 115

  console.groupEnd();
}

{
  console.group("replace and modify");

  // Replace the first occurrence of "script" with "xyz" in the string "javascriptscript"
  console.log("javascriptscript".replace("script", "xyz")); // Output: "javaxyzscript"

  // Replace all occurrences of "script" with "xyz" in the string "javascriptscript"
  console.log("javascriptscript".replace(/script/g, "xyz")); // Output: "javaxyzxyz"

  // Convert the entire string "javascript" to uppercase
  console.log("javascript".toUpperCase()); // Output: "JAVASCRIPT"

  // Repeat the string "java" 3 times
  console.log("java".repeat(3)); // Output: "javajavajava"

  // Concatenate "script" and "fghyt" to the string "java"
  console.log("java".concat("script", "fghyt")); // Output: "javascriptfghyt"

  console.groupEnd();
}

{
  console.group("search and mactch");

  // Check if the string "javascript" includes the substring "scr"
  console.log("javascript".includes("scr")); // Output: true

  // Check if the string "javascript" (case-insensitive) contains the substring "scr"
  console.log("javaScRipt".toLowerCase().includes("sCr".toLowerCase())); // Output: true

  // Check if the string "javascript" ends with the substring "script"
  console.log("javascript".endsWith("script")); // Output: true

  // Check if the string "javascript" starts with the substring "java"
  console.log("javascript".startsWith("java")); // Output: true

  console.groupEnd();
}

{
  console.group("formatting");

  // Trim whitespace from both ends of the string "    javascript    "
  console.log("    javascript    ".trim()); // Output: "javascript"

  // Split the string "java:script" into an array using ":" as the delimiter
  console.log("java:script".split(":")); // Output: ["java", "script"]

  // Pad at the beginnning of the string to be of a minimum length
  console.log("23".padStart(6, "0")); // Output "000023"

  // Pad at the end of the string to be of a minimum length
  console.log("23".padStart(6, "x")); // Output "23xxxx"

  console.groupEnd();
}

{
  console.group("template literals");

  function fullname(firstName = "", lastName = "") {
    const capitalize = (str) =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return `${capitalize(firstName.trim())} ${capitalize(lastName.trim())}`;
  }

  console.log(fullname("ava", "max"));

  console.groupEnd();
}

console.groupEnd();
