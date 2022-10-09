// ============================= style functionality ===================================
document.addEventListener("click", (e) => {
  let navEle = e.target.closest(".sticky-box-nav-item");
  if (navEle) {
    navEle.classList.toggle("click-show");
  }
});

// ========================= copy text functionality =========================================
document.addEventListener("click", (e) => {
  if (e.target.closest(".copy")) {
    const copytext =
      e.target.closest(".copy").parentElement.parentElement.lastElementChild
        .innerText;
    const textArea = document.createElement("textarea");
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.value = copytext;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.classList.add("hidden");
  }
});

// ==============================color changing functionality ==================================
document.addEventListener("input", (e) => {
  const navEle = e.target.closest(".color");
  if (navEle) {
    const colorValue = navEle.value;
    navEle.parentElement.parentElement.lastElementChild.firstElementChild.style.background =
      colorValue;
    navEle.parentElement.nextElementSibling.firstElementChild.style.background =
      colorValue;
  }
});

// =========== create new note functionality===================

const newNote = document.querySelector(".create-note");
const container = document.querySelector(".container");
newNote.addEventListener("click", (e) => {
  const createNewNote = `
  <div class="sticky-box glow">

  <ul class="sticky-box-nav">
      <button onclick = "bold()" class="sticky-box-nav-item bold">B</button>
      <button onclick = "underline()" class="sticky-box-nav-item underline">U</button>
      <li class="sticky-box-nav-item delete "><i class="fa-solid fa-trash"></i></li>
      <li class="sticky-box-nav-item copy "><img src="images/copy-img.png" alt=""></li>
      <input class="sticky-box-nav-item color" id="picker" type="color" name="color1"
          value="#ffffff" />
         </ul>

  <div class="title">
      <input id="title" class="title-input" placeholder="Title" required type="text" id="title">
  </div>

  <div class=" text-area">
      <div id="getText" contenteditable="true" class="editable" placeholder="Write Something">
          
      </div>
  </div>
</div>
    `;
  container.insertAdjacentHTML("beforeend", createNewNote);
});

// ============================ Bold and Underline functionality ======================

function bold() {
  {
    document.execCommand("bold");
  }
}

function underline() {
  document.execCommand("underLine");
}

// =================================== delete note functionality =======================================

document.addEventListener("click", function (e) {
  if (e.target.closest(".delete")) {
    const element = e.target.closest(".delete").parentElement.parentElement;
    element.remove();
  }
});

// ============================ search functionality =================================================
const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", function (e) {
  const titles = document.getElementsByClassName("title-input");
  Array.from(titles).forEach((a) => {
    if (a.value.toLowerCase().includes(searchInput.value.toLowerCase())) {
      a.closest(".sticky-box").style.display = "block";
    } else {
      a.closest(".sticky-box").style.display = "none";
    }
  });
});
