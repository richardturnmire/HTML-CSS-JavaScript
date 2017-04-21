function clearErrors() {

    for (var loopCounter = 0;
        loopCounter < document.forms["evensForm"].elements.length;
        loopCounter++) {
        if (document.forms["evensForm"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1) {

            document.forms["evensForm"].elements[loopCounter]
                .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["evensForm"]["startingNumber"].value = "";
    document.forms["evensForm"]["endingNumber"].value = "";
    document.forms["evensForm"]["stepNumber"].value = "";
    document.forms["evensForm"]["startingNumber"].focus();
}
function addLine(txtline) {
   
   
        
    var div = document.getElementById("divOutput");  
    div.textContent = div.textContent + txtline + "\n";  
    
}


function determineEvens(startNum, endNum, stepNum) {
    document.getElementById("divOutput").textContent = "";
    addLine("Here are the even numbers between" + startNum + " and " + endNum + " by " + stepNum + "'s: ");
    for (var i = startNum; i <= endNum; i = stepNum + i) {
        if (i % 2 === 0) {
            addLine(i);
        }
    }
}

function validateItems() {
    console.log("Begin validating data");
        clearErrors();
    console.log("Errors cleared");
    var startingNumber = document.forms["evensForm"]["startingNumber"].value;
    var endingNumber = document.forms["evensForm"]["endingNumber"].value;
    var stepNumber = document.forms["evensForm"]["stepNumber"].value;

    // check to make sure fields are filled in and are numeric
    if (startingNumber == "" || isNaN(startingNumber)) {
        alert("Starting number must be filled in with a number.");
        document.forms["evensForm"]["startingNumber"]
            .parentElement.className = "form-group has-error";
        document.forms["evensForm"]["startingNumber"].focus();
        return false;
    }

    if (endingNumber == "" || isNaN(endingNumber)) {
        alert("endingNumber must be filled in with a number.");
        document.forms["evensForm"]["endingNumber"]
            .parentElement.className = "form-group has-error"
        document.forms["evensForm"]["endingNumber"].focus();
        return false;
    }

    if (stepNumber == "" || isNaN(stepNumber)) {
        alert("Step must be filled in with a number.");
        document.forms["evensForm"]["stepNumber"]
            .parentElement.className = "form-group has-error"
        document.forms["evensForm"]["stepNumber"].focus();
        return false;
    }

    startingNumber = Number(startingNumber);
    endingNumber = Number(endingNumber);
    stepNumber = Number(stepNumber);

    // check to make sure fields are filled in and are numeric
    if (stepNumber < 1) {
        alert("Step must be greater than 0");
        document.forms["evensForm"]["stepNumber"]
            .parentElement.className = "form-group has-error";
        document.forms["evensForm"]["stepNumber"].focus();
        return false;
    }
    if (endingNumber <= startingNumber) {
        alert("Ending number must be greater than the starting number.");
        document.forms["evensForm"]["endingNumber"]
            .parentElement.className = "form-group has-error"
        document.forms["evensForm"]["endingNumber"].focus();
        return false;
    }


    determineEvens(startingNumber, endingNumber, stepNumber);





    // We are returning false so that the form doesn't submit 
    // and so that we can see the results
    return false;
}
