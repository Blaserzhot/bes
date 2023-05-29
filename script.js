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
    header.style.transition = "all 0.5s ease";
    header.style.height = "50px";
	document.getElementById("myh").style.transition = "all 0.5s ease";
	document.getElementById("myh").style.marginTop = "0px";
	document.getElementById("nav").style.transition = "all 0.5s ease";
	document.getElementById("nav").style.marginTop = "0px";
	document.getElementById("icons").style.transition = "all 0.5s ease";
	document.getElementById("icons").style.marginTop = "0px";
  } else {
    header.style.height = "100px";
	header.classList.remove("sticky");
	header.style.transition = "all 0.5s ease";
	document.getElementById("myh").style.transition = "all 0.5s ease";
	document.getElementById("myh").style.marginTop = "25px";
	document.getElementById("nav").style.transition = "all 0.5s ease";
	document.getElementById("nav").style.marginTop = "25px";
	document.getElementById("icons").style.transition = "all 0.5s ease";
	document.getElementById("icons").style.marginTop = "25px";
  }
}


//Arrow Scrolldown
function scrollDown() {
  window.scroll({
    top: 1100,
    behavior: 'smooth'
  });
}
	




