/* This is Script for Mouse click to Hamburger button */
//JavaScript code should be executed in "strict mode"
"use strict";
$(document).ready(function() {
    // This is Function for Hamburger Icon Button 
    $("#menuicon", "#mm_nav").on("click", function() {
        if ($(".menu-strip-right,.menu-strip-left,.menu-strip-bottom-right,.menu-strip-bottom-left", "#mm_nav").css("display") === "none") {
            $(".menu-strip-right,.menu-strip-left,.menu-strip-bottom-right,.menu-strip-bottom-left", "#mm_nav").css("display", "block");
            $("#menuicon i", "#mm_nav").addClass("fa-times").removeClass("fa-bars");
        } else {
            $(".menu-strip-right,.menu-strip-left,.menu-strip-bottom-right,.menu-strip-bottom-left", "#mm_nav").css("display", "none");
            $("#menuicon i", "#mm_nav").addClass("fa-bars").removeClass("fa-times");
        }

    });
    return false;
});
// Navbar button function end