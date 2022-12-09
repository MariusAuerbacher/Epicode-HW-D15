/* JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values */

        let x = "John"
        let y = "Doe"

        console.log(x + "<>" + y)

        let information = {
          name: "John",
          surname: "Doe",
          email: "johndoe@gmail.com"
        }

        delete information.email
        console.log(information)

        let randomArray = []
        for(let i = 0; i < 10; i++){
         randomArray.push("10 random arrays coming up" + i);
        }
        console.log(randomArray.toString());

        let randomNumbers = []
        for (let index = 0; index < 100; index++){
          randomNumbers.push(Math.floor(Math.random() * 100))
        }
        console.log(randomNumbers)

        function minAndMax(){

        }

        let arrayOfArrays = [];
        for(let i = 0; i < 20; i++){
        let insideArrays = [];
        for(let j = 0; j < 10; j++)
        insideArrays.push(Math.floor(Math.random() * 10));
        arrayOfArrays.push(insideArrays);
        }
        console.log(arrayOfArrays)

        function longestArray(value1, value2){
          if (value1.length > value2.length){
            return value1
          } else if (value1.length < value2.length){
            return value2
          } else if (value1 === value2){
            console.log("the arrays are equally long")
          }

        }
        console.log(longestArray( [12,23,545], [213,231,5757,234]))

        /* DOM EXERCISES

        31) Get the element with an id of "container" from the page
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list */

        let container = document.getElementById("container")
        console.log(container)

        let tds = document.querySelectorAll("td")
        console.log(tds)
        
        let tdNode = document.querySelectorAll("td");
        for (let td of tdNode) {
	      console.log("text of td: ", td.innerText);
	      }
        
        function newHeading(){
          let h1Node = document.querySelector("h1")
          h1Node.innerText = "new title";
        }
        console.log(newHeading())
        
        function moreRows(){
          let moreTds = document.getElementById("new-rows")
          let addTrs = document.createElement("tr")
          for (i = 0; i < 5; i++){
           
          }
        }