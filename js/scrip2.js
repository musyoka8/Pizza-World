$(document).ready(function () {
    $("#nn").click(function () {
        $("#two1").toggle();
        $("#Bk").fadeIn();
        $("#choose").fadeIn();
        $("#ask").fadeIn();
        $("#hide").fadeOut();

    });
    $("#nn1").click(function () {
        $("#two2").toggle();
        $("#Bk").fadeIn();
        $("#ask").fadeIn();
        $("#hide").fadeOut();
    });
    $("#nn1").click(function () {
        $("#two1").fadeOut();
        $("#two3").fadeOut();
        $("#two4").fadeOut();
        $("#two5").fadeOut();
        $("#two6").fadeOut();
        $("#two2").fadeOut();
        $("#ask").fadeIn();
    });
    $("#nn2").click(function () {
        $("#two3").toggle();
        $("#Bk").fadeIn();
        $("#hide").fadeOut();
        $("#two2").fadeOut();
        $("#two1").fadeOut();
        $("#two4").fadeOut();
        $("#two5").fadeOut();
        $("#two6").fadeOut();
        $("#ask").fadeIn();

    });
    $("#nn3").click(function () {
        $("#two4").toggle();
        $("#Bk").fadeIn();
        $("#hide").fadeOut();
        $("#two3").fadeOut();
        $("#two1").fadeOut();
        $("#two2").fadeOut();
        $("#two3").fadeOut();
        $("#two5").fadeOut();
        $("#two6").fadeOut();
        $("#ask").fadeIn();
        