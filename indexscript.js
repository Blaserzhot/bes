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

$(document).ready(function(){
    $("#page1").click(function(){
        $("main").load("about.html")
		$("#backdrop").slideUp("slow", function(){
        });
    });
});

$(document).ready(function(){
    $("#page2").click(function(){
        $("main").load("projects.html")
		$("#backdrop").slideUp("slow", function(){
        });
    });
});

$(document).ready(function(){
    $("#page3").click(function(){
        $("main").load("hobbies.html")
		$("#backdrop").slideUp("slow", function(){
        });
    });
});

$(document).ready(function(){
    $("page4").click(function(){
        $("main").load("contactme.html")
		$("#backdrop").slideUp("slow", function(){
        });
    });
});