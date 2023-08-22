parentLi = document.querySelector("#parent-li");
const storedItems = localStorage.getItem("listItems");
if (storedItems) {
  parentLi.innerHTML = storedItems;
  reassignIndices();
}

// Add event listener to the "Add" button
document.querySelector("#button-addon2").addEventListener("click", function () {
  let cItem = document.createElement("li");
  cItem.setAttribute(
    "class",
    "list-group-item my-3 d-flex justify-content-between align-items-center google"
  );

  let currInp = document.getElementById("Input-txt").value;
  if (currInp) {
    let currentIndex = parentLi.children.length; // Get the current index
    cItem.innerHTML = `<p class="pra" id="pra" ">${currentIndex + 1}</p> 
    <h5 class="flex-grow-1 h5-txt">${currInp}</h5>
    <button type="button" id="btn-edit" class="btn bg-warning mx-2" onclick="Edit(this)">Edit</button
    ><button type="button" class="btn bg-danger" id="btn-del" onclick="Del(this)">Remove</button>`;

    parentLi.appendChild(cItem);
    localStorage.setItem("listItems", parentLi.innerHTML);

    document.getElementById("Input-txt").value = "";
  } else {
    alert("Please enter a blog");
  }
});

// Function to update the <p> content with the index

// Function to remove the current <li> element
function Del(curEle) {
  curEle.parentNode.remove();
  localStorage.setItem("listItems", parentLi.innerHTML);

  reassignIndices();
}

// Function to edit the <h5> element
function Edit(curEle) {
  if (curEle.textContent == "Edit") {
    curEle.textContent = "Done";
    let Etxt = curEle.previousElementSibling.textContent;

    let newInp = document.createElement("input");
    newInp.type = "text";
    newInp.className = "form-control";
    newInp.setAttribute("id", "INP");
    newInp.value = Etxt;
    const element = document.getElementById("parent-li").children[0];
    element.replaceChild(newInp, curEle.previousElementSibling);
  } else {
    curEle.textContent = "Edit";
    let newLiCont = document.getElementById("INP").value;
    let newli = document.createElement("h5");
    newli.setAttribute("class", "flex-grow-1 h5-txt");
    newli.textContent = newLiCont;

    const element = document.getElementById("parent-li").children[0];
    element.replaceChild(newli, curEle.previousElementSibling);
  }
}

// Function to reassign indices after deletion
function reassignIndices() {
  const listItems = parentLi.querySelectorAll("li");
  listItems.forEach((item, index) => {
    item.querySelector(".pra").textContent = index + 1;
  });
}
