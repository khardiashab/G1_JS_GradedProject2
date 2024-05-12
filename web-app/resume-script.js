import { MainData } from "./MainData.js";
import { Resume } from "./Resume.js";
import { Utils } from "./Utils.js";

var allResumesObj = new MainData([]);
var searchResumeObj = new MainData([]);
var currentResumeObj = new MainData([]);

/**
 * Function to handle the next button click event.
 */
function nextButtonClick(event) {
  if (currentResumeObj.isLastResume()) {
    alert("It is alread the last Resume.");
  } else {
    currentResumeObj.changeNextResume();
    displayCurrentResumeFromCurrentResumeObj();
  }
}
/**
 * Function to handle the previous button click event.
 */
function previousButtonClick(event) {
  if (currentResumeObj.isFirstResume()) {
    alert("It is alread the first Resume.");
  } else {
    currentResumeObj.changePreviousResume();
    displayCurrentResumeFromCurrentResumeObj();
  }
}

function searchEventHandler(event) {
  let str = event.target.value.trim();
  if (str) {
    console.log("all resumes => ", currentResumeObj);
    const searchResumes = currentResumeObj.searchResume(str);
    console.log("here are the searched resume => ", searchResumes);
    searchResumeObj = new MainData(searchResumes);
    currentResumeObj = searchResumeObj;
    displayCurrentResumeFromCurrentResumeObj();
  } else {
    currentResumeObj = allResumesObj;
    currentResumeObj.currentIndex = 0;
    displayCurrentResumeFromCurrentResumeObj();
  }
}


/**
 * Function to handle the DOMContentLoaded event.
 */
async function domLoad(event) {
  let data = await Utils.readDataFile();
  allResumesObj = new MainData(data.resume);
  currentResumeObj = allResumesObj;
  displayCurrentResumeFromCurrentResumeObj();
}

document.addEventListener("DOMContentLoaded", domLoad);

let next = document.getElementById("next_button");
next.addEventListener("click", nextButtonClick);

let previousButton = document.getElementById("previous_button");
previousButton.addEventListener("click", previousButtonClick);

let seacrhBar = document.getElementById("search_resume");
seacrhBar.addEventListener("keypress", searchEventHandler);

function displayCurrentResumeFromCurrentResumeObj(currentResume) {
  let errorBox = document.querySelector(".error_box");
  let resumeBox = document.querySelector(".resume_container");
  if (!currentResumeObj.isEmpty()) {
    resumeBox.classList.remove("hidden");
    errorBox.classList.add("hidden");
    if (currentResumeObj.isLastResume()) {
      next.classList.add("hidden");
    } else {
      next.classList.remove("hidden");
    }
    if (currentResumeObj.isFirstResume()) {
      previousButton.classList.add("hidden");
    } else {
      previousButton.classList.remove("hidden");
    }
    let currentResume = currentResumeObj.getCurrentResume();
    let resumeObj = new Resume(currentResume);
    resumeObj.displayResume();
  } else {
    errorBox.classList.remove("hidden");
    resumeBox.classList.add("hidden");
  }
}
