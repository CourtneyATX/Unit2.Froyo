// The user is prompted for froyo flavors upon entering the site.

const userInputFlavors = prompt(
    "Please enter froyo flavors you would like to order separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// The user's input is split into an array of strings.

const flavorsArray = userInputFlavors.split(" ,");
console.log(flavorsArray);

// A loop is used to iterate through the array



//An object is used to keep count of how many orders of each flavor.

//program correctly counts the number of each flavor

// the logic for counting the freq of element in array is organized 
// into a function that returns an object

// names are consistent and meaningful

//console output changes depending on users input

//
