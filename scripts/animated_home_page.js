let aText = new Array(
    "ברוכים הבאים!!!",
    "\n",
    " צריכים אתר שיגדיל לכם את ההכנסות ?",
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