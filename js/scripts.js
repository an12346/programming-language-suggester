$(document).ready(function() {
  $("formOne").submit(function(event) {
    event.preventDefault();
    const question1 = $("#question1").val();
    const question2 = $("question2").val();
    const question3 = $("question3").val();
    const question4 = $("question4").val();
    const question5 = $("question5").val();
    
    let result;
  
    if (question1 === "Green" && (question2 === "Summer" || question3 ==="Working at a bigger, well-known company")) {
    result = "C#";
  }
    else if (question1 === "Red" && (question2 === "Winter" || question3 === "Working at a smaller startup")) {
      result = "Ruby";
    }

    else if (question1 === "Blue" && (question2 == "Other" || question3 === "Either/Both")) {
      result = "JavaScript";
    }

    else {
      result = "JavaScript";
    }

    $("#resultLang").text(result);
    $("#resultLang").show();
  
  
  });
});