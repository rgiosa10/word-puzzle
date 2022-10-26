// Business Logic

function individualVowel(vowelArray) {
  for (let i = 0; i < vowelArray.length; i+=1) {
    let individualVowelOutput = vowelArray[i];
    console.log(individualVowelOutput);
    return individualVowelOutput;
  }
}

function intake(vowelArray, text) {
  let textArray = text.split(" ");
  
  for (let i = 0; i < vowelArray.length; i+=1) {
    vowelToTest = vowelArray[i];
    textArray = replaceVowel(vowelToTest, textArray);
  };
  // console.log(textArray);
  return textArray;
}

function replaceVowel(word, textArray) {
  
  for (let i = 0; i < textArray.length; i +=1) {
    if (textArray[i].includes(word)) {
      noVowelElement = textArray[i].replaceAll(word, "-");
      textArray[i] = noVowelElement;
    } else {
      VowelElement = textArray[i];
      textArray[i] = VowelElement;
    };
  };
  return textArray;
}

// UI Logic

window.addEventListener("load", function() {
  let form = document.getElementById("text-input");
  let result = document.getElementById("results");
  const vowelArray = ["a","e","i","o","u"];

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = form.querySelector("input#text-input1").value;
    
    textArray = intake(vowelArray, text).toString().replaceAll(",", " ");
    result.append(textArray);
  });
});


