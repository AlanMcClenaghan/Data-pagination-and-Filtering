/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// console.log(data);
const studentsPerPage = 9;

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   // create two variables that will represent the index for the first and last student on the page
   startIndex = (page * studentsPerPage) - studentsPerPage;
   endIndex  = page * studentsPerPage - 1;

   // select the element with a class of `student-list` and assign it to a variable
   const studentList = document.querySelector(".student-list");
   // console.log(studentList);

   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = "";
   // console.log(studentList);

   // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++) {
     // inside the loop create a conditional to display the proper students
     if ( i >= startIndex && i <= endIndex ) {
       // inside the conditional:
         // create the elements needed to display the student information
         const studentItem = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>
         `
         // console.log("studentItem: " + studentItem);
         // insert the above elements
         studentList.insertAdjacentHTML("beforeend", studentItem);
     }
   }

   // console.log("startIndex: " + startIndex);
   // console.log("endIndex: " + endIndex);
   // console.log(list);
   // console.log("page: " + page);
 }

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length / studentsPerPage);

   // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector(".link-list");
   // console.log(linkList);

   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = "";
   // console.log(linkList);

   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {
      // create the elements needed to display the pagination button
      const button = `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      // insert the above elements
      linkList.insertAdjacentHTML("beforeend", button);
   }

   // give the first pagination button a class of "active"
   linkList.querySelector("button").classList.add("active");

   // create an event listener on the `link-list` element
   linkList.addEventListener("click", (e) => {
      const activeButton = linkList.querySelector(".active");
      const buttonClicked = e.target.closest("button");
      // if the click target is a button:
      if (activeButton && buttonClicked) {
         // remove the "active" class from the previous button
         activeButton.classList.remove("active");
         // add the active class to the clicked button
         buttonClicked.classList.add("active");
         // call the showPage function passing the `list` parameter and page to display as arguments
         showPage(data, buttonClicked.innerHTML);
      }
         
   });

   // console.log(list);
   // console.log(numOfPages);
}

/*
Extra Credit

To get an "exceeds" rating, complete all of the steps below:
*/

// Add a Search Component
function addSearchComponent() {
   const searchComponent = `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `
   console.log(searchComponent);
   const header = document.querySelector(".header");
   console.log(header);
   header.insertAdjacentHTML("beforeend", searchComponent);
}



// Call functions
showPage(data, 1);
addPagination(data);
addSearchComponent();