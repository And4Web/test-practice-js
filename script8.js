const {log: _} = console;
// Q54: Write a function to replace parameters in a URL:

// TODO:
// 1. loop through the replacement array.
// 2. replace the required parameters.
// 3. return required URL string.

const initialURL = '/post/:postId/comments/:commentId';

function replaceParamsInURL(url, replacements){
  return replacements.reduce((acc, replacement)=>{
    return acc.replace(`:${replacement.from}`, `${replacement.to}`)
  }, url)
}
const resultUrl = replaceParamsInURL(initialURL, [
  {from: "postId", to: "1"},
  {from: "commentId", to: "3"},
]);

_("initial URL: ", initialURL)
_("Transformed URL: ", resultUrl)

// Q55: Format backened validation message to frontend format:
const backenedErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      }
    ]
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case."
      },
      {
        message: "Must be at least 8 characters long."
      }
    ]
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password"
      }
    ]
  }
}

// Output: ["Email: can't be blank", "Password: Must contain symbols in differenct case. Must be at least 8 characters long.", "PasswordConfirmation: Must match with password"]

// Method 1:
// 1. iterate through the backenedErrors object using keys.
// 2. for each key capitalize the first letter.
// 3. access and loop through the errors array within each key object and extract the message objects.
// 4. join all message properties and form one error string.
// 5. return all errors as a single string and form a result array.

let result = [];
// 1.
for(let key in backenedErrors){
  // 2.
  let keyCapitalized = key.charAt(0).toUpperCase() + key.slice(1);
  // 3.
  // let error = backenedErrors[key].errors[0].message;  
  
  let errorComb = backenedErrors[key].errors.reduce((acc, e)=>{
    return acc + " " + e.message ; 
  }, "");
  // 4.
  let frontendVal = keyCapitalized + ": " + errorComb;
 
  
  // 5.
  result.push(frontendVal)
}

_("Method 1: ", result)

// Method 2:
// By using Object.entries() and map():

const backenedErrorsArrayFrontend = Object.entries(backenedErrors).map(arr=>{
  let key = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  let values = arr[1].errors;
  let errors = values.reduce((acc, value)=>{
    return acc + value.message + " "
  }, "")

  return `${key}: ${errors}`;
})


_(backenedErrorsArrayFrontend)

// Q56 onwards in script9.js:
