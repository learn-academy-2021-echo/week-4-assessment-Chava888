// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest




// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


//Pseudo Code:
/*Input an array of items
-Remove the first item of the array, .shift() JS method
-Shuffle the rest of elements in the array, random.
-Create a random function with Math.random() and change the indices of an array for the length of the array, .map()
In addition, need to do a red-green-refactor methodolgy, run cases colors1 and colors2
-Need to take into account the .Expect can check values with a different order in the array, use .arrayContaining(array)
*/

//First Step: Perform Red

// describe("shuffleArray", () => {

//     it("Takes an input array and outputs an array of the elements shuffled without the first element of the input array", () => {

//         expect(shuffleArray(["purple", "blue", "green", "yellow", "pink"])).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
//     })
// })
//Received an error =>    ReferenceError: shuffleArray is not defined


//Second Step: Make the test pass for colors1 and colors2

// describe("shuffleArray", () => {

//     it("Takes an input array and outputs an array of the elements shuffled without the first element of the input array", () => {

//         expect(shuffleArray(["purple", "blue", "green", "yellow", "pink"])).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
//         expect(shuffleArray(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
//     })
// })


// b) Create the function that makes the test pass.
/*
-Remove the first item of the array, .shift() JS method
-Shuffle the rest of elements in the array, random.
-Create a random number using methods Math.random() and Math.floor()
-Use the random number to change the elements within the array by the index.
*/

// const shuffleArray = (arrayOfItems) => {

//     arrayOfItems.shift()
//     let removeFirstItem = arrayOfItems


//     for (i = 0; i < removeFirstItem.length; i++) {
//         let randomNumber = Math.floor(Math.random() * removeFirstItem.length)
//         let randomElement = removeFirstItem[randomNumber]
//         let currentElement = removeFirstItem[i]
//         removeFirstItem[i] = randomElement
//         removeFirstItem[randomNumber] = currentElement
//     }

//     return removeFirstItem
// }

//Third Step: Refactor
/*
Modify the jestTest to have the actual variables been called colors1 and colors2 and not the arrays themselves.
Remove the randomElement variable and placed directly removeFirstItem[randomNumber]
*/


describe("shuffleArray", () => {

    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


    it("Takes an input array and outputs an array of the elements shuffled without the first element of the input array", () => {

        expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
        expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

const shuffleArray = (arrayOfItems) => {

    arrayOfItems.shift()
    let removeFirstItem = arrayOfItems


    for (i = 0; i < removeFirstItem.length; i++) {
        let randomNumber = Math.floor(Math.random() * removeFirstItem.length)
        let currentElement = removeFirstItem[i]
        removeFirstItem[i] = removeFirstItem[randomNumber]
        removeFirstItem[randomNumber] = currentElement
    }
    return removeFirstItem
}







// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]


//Pseudo Code:
/*Input an array of numbers
-Checks for max and min values, Math.min, Math.max
-Return an array of the max and min values
In addition, need to do a red-green-refactor methodolgy, run cases nums1 and num2
*/


//First Step: Perform Red

// describe("maxMinFunction", () => {

//     it("Takes an input array of numerical values and outputs an array of the max and min values", () => {

//         expect(maxMinFunction([3, 56, 90, -8, 0, 23, 6])).toEqual([-8, 90])
//     })
// })
//Received an error =>    ReferenceError: maxMinFunction is not defined




//Second Step: Make the test pass for nums1 and nums2

// describe("maxMinFunction", () => {

//     it("Takes an input array of numerical values and outputs an array of the max and min values", () => {

//         expect(maxMinFunction([3, 56, 90, -8, 0, 23, 6])).toEqual([-8, 90]);
//         expect(maxMinFunction([109, 5, 9, 67, 8, 24])).toEqual([5, 109])
//     })
// })


// b) Create the function that makes the test pass.
/*
-Checks for max and min values, Math.min, Math.max
-Return an array of the max and min values
*/

// const maxMinFunction = (arrayOfNumbers) => {
//     let min = Math.min(...arrayOfNumbers)
//     let max = Math.max(...arrayOfNumbers)
//     return [min, max]
// }

//Third Step: Refactor
/*
Reformat the result to an implicit arrow function, and store Math.min and Math.max values direclty to an array.
*/

describe("maxMinFunction", () => {

    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    var nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]

    it("Takes an input array of numerical values and outputs an array of the max and min values", () => {

        expect(maxMinFunction(nums1)).toEqual([-8, 90]);
        expect(maxMinFunction(nums2)).toEqual([5, 109])
    })
})


const maxMinFunction = (arrayOfNumbers) => ([Math.min(...arrayOfNumbers), Math.max(...arrayOfNumbers)])






// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// var testArray1 = [3, 7, 10, 5, 4, 3, 3]
// var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



//Pseudo Code:
/*Input two array of values and outputs an array showing unique values of the combined two arrays.
-Use the spread operator to combine the two arrays
-Use set State to obtain unique values from the combined arrays
In addition, need to do a red-green-refactor methodolgy, run cases nums1 and num2
*/


//First Step: Perform Red

// describe("uniqueValues", () => {

//     it("Takes an input of two arrays and outputs an array of the unique values", () => {

//         expect(uniqueValues(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
//     })
// })
//Received an error =>    ReferenceError: uniqueValues is not defined


//Second Step: Make the test pass

// describe("uniqueValues", () => {

//     it("Takes an input of two arrays and outputs an array of the unique values", () => {

//         expect(uniqueValues(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
//     })
// })


// b) Create the function that makes the test pass.

/*Input two array of values and outputs an array showing unique values of the combined two arrays.
-Use the spread operator to combine the two arrays
-Use Set to obtain unique values from the combined arrays
*/

// const uniqueValues = (array1, array2) => {
//     let combineArray = [...array1, ...array2]
//     return [...new Set(combineArray)]
// }


//Third Step: Refactor
/*
Reformat the result to an implicit arrow function, and remove the combineArray variable and place directly into new Set.
*/

describe("uniqueValues", () => {

    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

    it("Takes an input of two arrays and outputs an array of the unique values", () => {

        expect(uniqueValues(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})


const uniqueValues = (array1, array2) => ([...new Set([...array1, ...array2])])


