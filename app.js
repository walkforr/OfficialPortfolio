// (function (){
//     document.getElementsByClassName("profile").hidden = true;
//     document.getElementsByClassName("projects").hidden = true;
//     document.getElementsByClassName("contact").hidden = true;
// })();

(function () {
    $("#projects").hide();
    $("#profile").hide();
    $("#contact").hide();
})();

const showProjects = function(){
    $("#projects").show();
    $("#profile").hide();
    $("#contact").hide();

    $("img").hide();
    // $("#item3").hide();
    // $("#item2").hide();
};

const showProfile = function(){
    $("#projects").hide();
    $("#profile").show();
    $("#contact").hide();
};

const showContact = function(){
    $("#projects").hide();
    $("#profile").hide();
    $("#contact").show();
};

$("#item1").on("click", showProjects);
$("#item3").on("click", showProfile);
$("#item2").on("click", showContact);
