// The user is prompted for froyo flavors upon entering the site.

const userInputFlavors = prompt(
    "Please enter froyo flavors you would like to order separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// The user's input is split into an array of strings.
const flavors = userInputFlavors.split(",");

// A loop is used to iterate through the array
for( let i=0; i < flavors.length; i++){
    console.log(flavors[i])
};

//An object is used to keep count of how many orders of each flavor.
const froyoOrder = {
    vanilla: 0,
    chocolate: 0,
    coffee: 0,
    strawberry: 0,
    mint: 0,
};

for (const flavor of flavors[str]){
    
};
console.table(froyoOrder);



for (const flavor of froyoOrder){
    console.log ('${flavor}: ${froyoOrder[flavor]}'); 
}

//program correctly counts the number of each flavor

// the logic for counting the freq of element in array is organized 
// into a function that returns an object

// names are consistent and meaningful

//console output changes depending on users input

//



// const yogurt = {
//    vanilla: 0,
//    chocolate: 0,
//    strawberry: 0,
//    coffee: 0,
//  };
  
  // Count for each flavor
  // vanillaCount = 0;
  // chocolateCount = 0;
  // strawberryCount = 0;
  // coffeeCount = 0;
  
//  const userInput = prompt (
//    'Please list each flavor of yogurt to order (seperated by a comma)'
//  );
  
//  const flavors = userInput.split (',');
  //  create an array of flavor choices based on userInput
  
//  for (const flavor of flavors) {
//    if (yogurt.hasOwnProperty (flavor.toLowerCase ())) yogurt[flavor]++;
//  }
  
//  for (const flavor in yogurt) {
//    console.log (`${flavor}: ${yogurt[flavor]}`);
//  }