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

    $(".homePix").hide();
};

const showProfile = function(){
    $("#projects").hide();
    $("#profile").show();
    $("#contact").hide();

    $(".homePix").hide();
};

const showContact = function(){
    $("#projects").hide();
    $("#profile").hide();
    $("#contact").show();

    $(".homePix").hide();
};

$("#item1").on("click", showProjects);
$("#item3").on("click", showProfile);
$("#item2").on("click", showContact);

//x button
$("h1").on("click", function(){
    $(".homePix").show();
    $("#projects").hide();
    $("#profile").hide();
    $("#contact").hide();
    
});