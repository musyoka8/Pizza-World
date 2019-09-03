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
    });
    $("#nn4").click(function () {
        $("#two5").toggle();
        $("#Bk").fadeIn();
        $("#hide").fadeOut();
        $("#two4").fadeOut();
        $("#two2").fadeOut();
        $("#two3").fadeOut();
        $("#two1").fadeOut();
        $("#two6").fadeOut(); 
        $("#ask").fadeIn();

    });
    $("#nn5").click(function () {
        $("#two6").toggle();
        $("#Bk").fadeIn();
        $("#hide").fadeOut();
        $("#two1").fadeOut();
        $("#two2").fadeOut();
        $("#two3").fadeOut();
        $("#two4").fadeOut();
        $("#two5").fadeOut();
        $("#ask").fadeIn();

    });
    $("#nn6").click(function () {
        $("#Bk").fadeIn();
        $("#ask").fadeIn();
        $("#hide").fadeOut();
        $("#two6").fadeOut();
        $("#two1").fadeOut();
        $("#two3").fadeOut();
        $("#two4").fadeOut();
        $("#two5").fadeOut();
        $("#two2").fadeOut();

    });
    $("#Bk").click(function () {
        $(".nn").click(function () {
            $("#hide").show();
            $("#two1").show();
        });
        $("#hide").toggle();
        $("#two1").fadeOut();
        $("#two2").fadeOut();
        $("#two3").fadeOut();
        $("#two4").fadeOut();
        $("#two5").fadeOut();
        $("#two6").fadeOut();
        $("#BK").fadeOut();
        $("#ask").fadeOut();
        $("#hide2").fadeOut();
        $("#hide3").fadeOut();
