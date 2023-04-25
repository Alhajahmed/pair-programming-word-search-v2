const wordSearch = (letters, word) => {
  // Get the number of rows and columns in the letters array
  const numRows = letters.length;
  const numCols = letters[0].length;

  // Check for horizontal matches
  // Convert each row in the letters array to a string and check for the presence of the word
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let i = 0; i < numRows; i++) {
    // Loop through each row of the horizontalJoin array
    if (horizontalJoin[i].includes(word)) {
      // Check if the current row includes the word
      return true; // Return true if a match is found
    }
  }

  // Check for vertical matches
  for (let col = 0; col < numCols; col++) {
    // Loop through each column of the letters array
    let verticalWord = ""; // Initialize an empty string to store the current vertical word
    for (let row = 0; row < numRows; row++) {
      // Loop through each row of the letters array
      verticalWord += letters[row][col]; // Append the current letter to the verticalWord string
    }
    if (verticalWord.includes(word)) {
      // Check if the verticalWord string includes the word
      return true; // Return true if a match is found
    }
  }

  // Return false if no matches are found
  return false;
};

module.exports = wordSearch;
