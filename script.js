
//Contact Page Validation
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;

    if (emailRegex.test(email) && message != "") {
      alert("Form submitted successfully!");
    } else {
      alert("Please enter a valid email address and message.");
    }
  }



//slideup + AJAX
$(document).ready(function(){
    $("#box1").click(function(){
        $("main").load("about.html")
		$("#backdrop").slideUp("slow", function(){
        });
    });
});

$(document).ready(function(){
    $("#box2").click(function(){
        $("main").load("projects.html")
		$("#backdrop").slideUp("slow", function(){
        });
    });
});

$(document).ready(function(){
    $("#box3").click(function(){
        $("main").load("hobbies.html")
		$("#backdrop").slideUp("slow", function(){
        });
    });
});

$(document).ready(function(){
    $("#box4").click(function(){
        $("main").load("contactme.html")
		$("#backdrop").slideUp("slow", function(){
        });
    });
});

//AJAX
$(document).ready(function(){
    $("#page1").click(function(){
        $("#content").load("about.html")
    });
});

$(document).ready(function(){
    $("#page2").click(function(){
        $("#content").load("projects.html")
    });
});

$(document).ready(function(){
    $("#page3").click(function(){
        $("#content").load("hobbies.html")
    });
});

$(document).ready(function(){
    $("#page2").click(function(){
        $("#content").load("projects.html")
    });
});

//Fixed header after splash page
window.onscroll = function() {myFunction()};
var header = document.getElementById("heading");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




