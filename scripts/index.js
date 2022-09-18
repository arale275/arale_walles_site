/* the header style */

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

/* the header change style */

const header = document.querySelector("header");
const sectionOne = document.querySelector(".change_bg");

const sectionOneOptions = {
  rootMargin: "-20px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

/* animation */

let aText = new Array(
  "ברוכים הבאים!!!",
  "\n",
  " צריכים אתר ייחודי ומותאם אישית ?",
  "\n", 
  "הגעתם למקום הנכון!!!"
  );
  let iSpeed = 75; // time delay of print out
  let iIndex = 0; // start printing array at this posision
  let iArrLength = aText[0].length; // the length of the text array
  let iScrollAt = 20; // start scrolling up at this many lines
   
  let iTextPos = 0; // initialise text position
  let sContents = ''; // initialise contents variable
  let iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   let destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) /* + "|" */;
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();