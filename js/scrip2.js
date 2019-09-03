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
    });
    $("#ask").click(function () {
        alert("IF YOU WANT THE PIZZA TO BE DELIVERED FILL THAT FORM ON TOP RIGHT SIDE OF THE PAGE");
    });

    $("#order").click(function () {
        alert("Your order will be delivered to your location");
    });
    $("#an").click(function () {
        $("#hide2").fadeIn();
    });
    $("#an").click(function () {
        $("#hide3").fadeIn();
    });
    $(".view").click(function () {
        $("#for").fadeIn();
        if ($("Size").val() !== "" && $("#Crust").val() !== "" && $("#quantity").val() !== "") {
            var showalll = "Your ORDER: " + " TOPPING: " + $('input[type=checkbox]:checked').val() + ",SIZE: " + $("#Size").val() + ", CRUST : " + $("#Crust").val() + ",QUANTITY: " + $("#quantity").val();
           
            $("#viewall").text(showalll);
        } else if ($("#Size1").val() !== "" && $("#Crust1").val() !== "" && $("#quantity1").val() !== "") {
            var showalll = "Your ORDER: " + " TOPPING: " + $('input[type=checkbox]:checked').val() + ",SIZE" + $("#Size1").val() + ", CRUST : " + $("#Crust1").val() + ",Quantity: " + $("#quantity1").val();
          
            $("#viewall").text(showalll);
        } else if ($("#Size2").val() !== "" && $("#Crust2").val() !== "" && $("#quantity2").val() !== "") {
            var showalll = "Your ORDER: " + " TOPPING: " + $('input[type=checkbox]:checked').val() + "," + $("#Size2").val() + ",CRUST : " + $("#Crust2").val() + ",QUANTITY: " + $("#quantity2").val();
           
            $("#viewall").text(showalll);
        } else {
            var showalll = "Enter your choice";
            $("#viewall").text(showalll);
        }
        if ($(".size").val() === "Large" && $("#Crust").val() == "Crispy") {
            var price = "The Price is: " + "," + $(".quantity").val() * 1000 + "$";
            $("#price").text(price);
        } else if ($(".size").val() === "Medium") {
            var price = "The price is: " + "," + $(".quantity").val() * 900 + "$";
            $("#price").text(price);
        } else {
            var price = "The price is: " + "," + $(".quantity").val() * 500 + "$";
            $("#price").text(price);
        }
        $("#viewall").text(showalll);
    });
});

