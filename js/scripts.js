$(document).ready(function() {
  $("form#formLang").submit(function(event) {
    const question1 = $("#question1").val();
    const question2 = $("#question2").val();
    const question3 = $("#question3").val();
    const question4 = $("question4").val();
    const question5 = $("question5").val();
    
    let result;
  
    if (question1 ==="Green" && (question2 ==="Video Games" || question3 ==="Working at a bigger, well known company")) {
    result = "Learn C# !";
    }
    else if (question1 ==="Red" && (question2 ==="E-commerce websites" || question3 ==="Working at a smaller startup")) {
      result = "Learn Ruby !";
    }

    else if (question1 ==="Blue" && (question2 =="Interactive web-pages" || question3 ==="Either/Both")) {
    result = "Learn JavaScript !";
    }

    else {
      result = "Learn Python!";
    }

    $("#resultLang").text(result);
    $("#resultLang").show(); 
    

    
    
    
    event.preventDefault();
  
  });

});