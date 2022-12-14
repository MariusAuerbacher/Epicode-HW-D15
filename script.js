// JS EXERCISES
      //21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        let x = "John"
        let y = "Doe"

        console.log(x + "<>" + y)
      // 22) Create an object with properties such name, surname, email
        let information = {
          name: "John",
          surname: "Doe",
          email: "johndoe@gmail.com"
        }
      //23) Delete the email property from the previously created object
        delete information.email
        console.log(information)
      
      //24) Create an array with 10 strings in it
        let randomArray = []
        for(let i = 0; i < 10; i++){
         randomArray.push("10 random arrays coming up" + i);
        }
      //25) Print in the console every string from the previous array
        console.log(randomArray.toString());
      //26) Create an array with 100 random numbers in it
        let randomNumbers = []
        for (let index = 0; index < 100; index++){
          randomNumbers.push(Math.floor(Math.random() * 100))
        }
        console.log(randomNumbers)
      //27) Write a function to get the maximum and minimum values from the previously created array
        function minAndMax(){
          let max = randomNumbers[0]
          let min = randomNumbers[0]
          for(let i = 1; i < randomNumbers.length;i++){
           if (randomNumbers[i] > max){
            max = randomNumbers[i]}
           if (randomNumbers[i] < min){
            min = randomNumbers[i]}
          }
          return {max, min}
        }
        console.log(minAndMax())
      //28) Create an array of arrays, in which every array has 10 random numbers
        let arrayOfArrays = [];
        for(let i = 0; i < 20; i++){
        let insideArrays = [];
        for(let j = 0; j < 10; j++)
        insideArrays.push(Math.floor(Math.random() * 10));
        arrayOfArrays.push(insideArrays);
        }
        console.log(arrayOfArrays)
      //29) Create a function that gets 2 arrays as parameters and returns the longest one
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


      // 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values */
        // DOM EXERCISES
        //31) Get the element with an id of "container" from the page
        let container = document.getElementById("container")
        console.log(container)
        //32) Get every <td> element from the page
        let tds = document.querySelectorAll("td")
        console.log(tds)
        //33) Use a loop for printing the text inside of every <td> element in the page
        let tdNode = document.querySelectorAll("td");
        for (let td of tdNode) {
	      console.log("text of td: ", td.innerText);
	      }
        //34) Write a function to change the heading of the page
        function newHeading(){
          let h1Node = document.querySelector("h1").innerText = "new title";
          return h1Node
        }
        console.log(newHeading())
        //35) Write a function to add an extra row to the table
        function moreRows(){
          let tableNode = document.querySelector("table")
          let trNode = document.createElement("tr")
          tableNode.appendChild(trNode)
          for (i = 0; i < 5; i++){
           let tdNode = document.createElement("td")
           tdNode.innerText = "new Column"
           trNode.appendChild(tdNode)
          }
        } 
        moreRows()
        //36) Write a function to add a class of "test" to each row in the table
        function weAddClass(){
            let newClass = document.querySelectorAll("tr")
            newClass.forEach((tr) =>{
             tr.classList.add("test")
            })
        }
        weAddClass()
        //37) Write a function to add a red background to every link in the page
        function weAddColor(){
          let links = document.querySelectorAll("a")
          links.forEach((link) =>{
            link.classList.add("red-bg")
          })
        }
        weAddColor()
        //38) Console log "Page loaded" when the page is correctly loaded
        function onLoaded(){
          window.onload
          console.log("page loaded")
        }
        onLoaded()
      // 39) Write a function to add new items to a unordered list
        function addItemsUl(){
          let ul = document.querySelector("ul")
          let li = document.createElement("li")
          li.innerText = "new list item"
          ul.appendChild(li)
        }
        addItemsUl()
      //40) Write a function to empty a list
      function emptyTheList(){
        let ul = document.querySelector("ul")
        ul.innerText = ""
      }
      emptyTheList()