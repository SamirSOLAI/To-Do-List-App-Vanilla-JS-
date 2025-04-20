"use strict";
const addButton = document.querySelector("form button");
const input = document.querySelector("#todo-input");

const deleteButtonAll = document.querySelector("#delete-all");
deleteButtonAll.style.backgroundColor = "red";

//when we click Add
addButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (input.value !== "") {
    //Adding an element to a list
    const list = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = input.value;
    list.appendChild(taskText);

    document.querySelector("#todo-list").appendChild(list);
    input.value = "";

    // Done button

    const doneButton = document.createElement("button");
    doneButton.textContent = "✔";
    list.appendChild(doneButton);

    //Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    list.appendChild(deleteButton);
    deleteButton.classList.add("buttonDelete");

    deleteButton.addEventListener("click", function () {
      list.remove();
    });
    doneButton.classList.add("done-btn");
    deleteButton.classList.add("delete-btn");

    //test
    const buttonContainer = document.createElement("div"); // Create a container for the buttons
    buttonContainer.style.display = "flex"; // Align buttons horizontally
    buttonContainer.style.gap = "5px"; // Set the spacing between buttons
    // buttonContainer.style.fontSize = '2px';

    buttonContainer.appendChild(doneButton); // Add Done button
    buttonContainer.appendChild(deleteButton); // Add Delete button

    list.appendChild(buttonContainer); // Append the container to the list item

    //test

    // Adding a Inportant button

    const priorityButton = document.createElement("button");

    priorityButton.classList.add("priority-btn");
    priorityButton.classList.add("buttonPriority");

    priorityButton.textContent = "🔥";

    buttonContainer.appendChild(priorityButton);

    // when the user clicks "Done"
    doneButton.addEventListener("click", function () {
      console.log("done clicked");
      taskText.classList.add("crossed-out");

      taskText;
    });

    //if the user dont input anyting

    //fixing the task text
  } else {
    alert("enter a task please");
  }
});

deleteButtonAll.addEventListener("click", function () {
  document.querySelector("#todo-list").innerHTML = "";
});
