console.log("working in Project Details page");

const dataFromServer = document.getElementById("dataFromServer");

const dataParse = JSON.parse(dataFromServer.value);
// const dataParse = dataFromServer.value;

console.log(dataParse.issues);

const bugSection = document.getElementById("bugSection");
const filterBtn = document.getElementById("filterButton");
function filteredFunction(arr) {
  // console.log("consoling from filteredFunction",arr)
  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++) {
      // console.log(arr[i])

      let newDiv = document.createElement("div");
      newDiv.className = "bug";
      let filteredItem = `
                        <p class="title">Title: <span class="name">${arr[i].title}</span></p>
                        <p class="description">Description: ${arr[i].description}</p>
                        <p class="label">Label: ${arr[i].label} </p>
                        <p class="author">Author: ${arr[i].issueAuthor}</p>
            
            `;
      newDiv.innerHTML = filteredItem;
      bugSection.append(newDiv);
    }
  } else {
    let newDiv = document.createElement("div")
    newDiv.className = "noIssueFound"
    newDiv.innerHTML = "<h1>No Bug Found</h1>"
    bugSection.append(newDiv)
    // console.log("not found");
  }
}
filterBtn.addEventListener("click", function () {
  const filteredArr = [];

  bugSection.innerHTML = "";
  const checkBoxes = document.querySelectorAll("input[type='checkbox']");
  // console.log(checkBoxes)
  for (let i = 0; i < checkBoxes.length; i++) {
    // console.log(checkBoxes[i].value)
    if (checkBoxes[i].checked) {
      console.log(checkBoxes[i].checked);
      // console.log("inside")
      for (let j = 0; j < dataParse.issues.length; j++) {
        // console.log("inside loop also")
        if (dataParse.issues[j].label === checkBoxes[i].value) {
          filteredArr.push(dataParse.issues[j]);
        }
      }
      //     // filteredArr.push(checkBoxes[i])
    }
  }
  // console.log(filteredArr)
  filteredFunction(filteredArr);
});
