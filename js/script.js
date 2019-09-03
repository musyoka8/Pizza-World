$(document).ready(function (){
    function contact(names,country,city,tel){
        this.names = Names;
        this.country = Country;
        this.city = City;
        this.tel = Tel;
    }
    function order(size, Quantity, Crust, Toppings, Delivery){
        this.sizeOfPizza = size;
        this.quantityOfPizza = Quantity;
        this.crustOfPizza = Crust;
        this.toppingsOfPizza = Toppings;
        this.deliveryOfPizza = Delivery;
    }
    order.prototype.allInformation = function(){
        return this.sizeOfPizza + "," + this.quantityOfPizza +"," +this.crustOfPizza +"," + this.toppingsOfPizza + "," + this.deliveryOfPizza + ",";
    }
    $(document).ready(function(){
        $('form#odd').submit(function (event){
            event.preventDefault();
            var newOrder;
            if ($("#Size").val()){
                var inputtedSizeOfPizza = $('#Size').val() + "" + "price=1000frw";
                console.log(inputtedSizeOfPizza)
            }
            else if ($("#Size1").val()) {
                var inputtedSizeOfPizza = $('#Size1').val() + "" + "price=1500frw";
                console.log(inputtedSizeOfPizza)
            }
            else if ($("#size3").val()) {
                var inputtedSizeofpizza = $("#Size2").val() + "" + "price=2000frw";
                console.log(inputtedSizeofPizza)
            }
            if ($('#Crust').val()) {
                var inputtedCrustofpizza = $("#Crust").val() + "" + "price=1000frw";
                console.log(inputtedCrustOfPizza)
            }
            else if ($('#Crust1').val()) {
                var inputtedCrustOfPizza = $("#Crust1").val() + "" + "price=1500frw";
                console.log(inputtedCrustOfPizza)
            }
            else if ($('#Crust2').val()) {
                var inputtedCrustofPizza = $("#Crust3").val() + "" + "price=2000frw";
                console.log(inputtedCrustOfPizza)
            }
            else if ($('#quantity').val()) {
                var inputtedquantityofpizza = $("#quantity").val();
                console.log(inputtedQuantityOfPizza)
            }
            else if ($("#quantity1").val()) {
                var inputtedQuantityOfPizza = $('#quantity1').val();
                console.log(inputtedQuantityOfPizza)
            }
            else if ($("#quantity2").val()) {
                var inputtedQuantityofpizza = $('#quantity2').val();
                console.log(inputtedQuantityOfPizza)
            }
            var theChoosenToppings =[];

            $("input[type=checkbox]:checked").each(function(){
                theChoosenToppings.push($(this).val());
                console.log(theChoosenToppings);
            });
            var additionToppings = 0;
            function Toppings(theChoosenToppings) {
                for (var a = 0; a < theChoosenToppings.length; a++) {
                    if (theChoosenToppings[a] === "Cheese") {
                        additionToppings += 500
                        console.log(additionToppings)
                    }
                    else if (theChoosenToppings[a] === "Tomato") {
                        additionToppings += 800
                        console.log(additionToppings)
                    }
                    else if (theChoosenToppings[a] === "Arugula") {
                        additionToppings += 1000
                        console.log(additionToppings)
                    }
                    else if (thechoosenToppings[a] === "Vegeterian") {
                        additionToppings += 1200
                        console.log(additionToppings)
                    }
                    else if (theChoosenToppings[a] === "Mexican") {
                        additionToppings += 1500
                        console.log(additionToppings)
                    }
                    else if (theChoosenToppings[a] === "Crackerbread") {
                        additionToppings += 1800
                        console.log(additionToppings)
                    }
                    console.log(additionToppings)
                    return additionToppings;
                }
                Toppings(thechoosenToppings)
                if ($('#delivery').val() === "yes")
                    var inputtedDeliveryofpizza = $('#delivery1').val() + "" + "delivery charged=250frw";
                console.log(inputtedDeliveryOfpizza)
            }
            if ($('#delivery').val() === "no")
                var inputtedDeliveryOfpizza = $('#delivery').val();
            console.log(inputtedDeliveryofpizza)
        });
        var newOrder = new order(inputtedSizeOfPizza, inputtedQuantityOfPizza, inputtedCrustOfPizza, inputtedDeliveryOfPizza, additionToppings);
        console.log(newOrder)
        console.log(theChoosenToppings)
        $('ul#show').append("<li><span>" + newOrder.allInformation() + "</span></li>");
        $(".view").click(function () {
            $("#viewall").show();
            $("#psize").text(newOrder.sizeOfPizza);
            $("#pcrust").text(newOrder.crustOfPizza);
            $("#pquantity").text(newOrder.quantityOfPizza);
            $("#delivery").text(newOrder.deliveryOfPizza);
        });
    });
    function order(Size, Quantity, Crust, Toppings, Delivery) {
        this.sizeOfPizza = Size;
        this.quantityOfPizza = Quantity;
        this.crustOfPizza = Crust;
        this.toppingsOfPizza = Toppings;
        this.deliveryOfPizza = Delivery;

    }

    order.prototype.allInformation = function () {
        return this.sizeOfPizza + "," + this.quantityOfPizza + "," + this.crustOfPizza + "," + this.toppingsOfPizza + "," + this.deliveryOfPizza;
    }

    $('form#odd').submit(function (event) {
        event.preventDefault();
        var showalll = $("#size").val() + "," + $("#size1").val() + "," + $("#Size2").val() + "," + $("#crust").val() + "," + $("#crust1").val() + "," + $("#quantite").val();
        +"," + $("#quantite1").val() + "," + $("#quantite2").val() + "," + $("#derivery").val() + "," + $('input[type=checkbox]:checked').value();
        $("#viewall").text(showalll);
        var newOrder;
        if ($('#size').val()) {
            var inputtedsizeofpizza = $('#size').val() + "" + "price=2000frw";
            console.log(inputtedsizeofpizza)
        }
        else if ($('#size1').val()) {
            var inputtedsizeofpizza = $('#size1').val() + "" + "price=1000frw";
            console.log(inputtedsizeofpizza)
        }
        else if ($('#size3').val()) {
            var inputtedsizeofpizza = $('#size3').val() + "" + "price=1000frw";
            console.log(inputtedsizeofpizza)
        }
        if ($('#crust').val()) {
            var inputtedcrustofpizza = $('#crust').val() + "" + "price=4000frw";
            console.log(inputtedcrustofpizza)
        }
        else if ($('#crust1').val()) {
            var inputtedcrustofpizza = $('#crust1').val() + "" + "price=4000frw";
            console.log(inputtedcrustofpizza)
        }
        else if ($('#crust3').val()) {
            var inputtedcrustofpizza = $('#crust3').val() + "" + "price=4000frw";
            console.log(inputtedcrustofpizza)
        }
        else if ($('#quantite').val()) {
            var inputtedquantityofpizza = $('#quantite').val();
            console.log(inputtedquantityofpizza)
        }
        else if ($('#quantite1').val()) {
            var inputtedquantityofpizza = $('#quantite1').val();
            console.log(inputtedquantityofpizza)
        }
        else if ($('#quantite3').val()) {
            var inputtedquantityofpizza = $('#quantite3').val();
            console.log(inputtedquantityofpizza)
        }
        var thechoosentoppings = [];

        $('input[type=checkbox]:checked').each(function () {
            thechoosentoppings.push($(this).val());
        });
        console.log(thechoosentoppings);
        var additiontoppings = 0;
        function Toppings(thechoosenToppings) {
            for (var a = 0; a < theChoosenToppings.length; a++) {
                if (thechoosenToppings[a] === "Cheese") {
                    additionToppings += 500
                    console.log(additionToppings)
                }
                else if (theChoosenToppings[a] === "Tomato") {
                    additionToppings += 600
                    console.log(additionToppings)
                }
                else if (thechoosenToppings[a] === "Aragula") {
                    additionToppings += 1000
                    console.log(additionToppings)
                }
                else if (theChoosenToppings[a] === "Vegeterian") {
                    additionToppings += 2000
                    console.log(additionToppings)
                }
                else if (theChoosenToppings[a] === "Mexican") {
                    additionToppings += 2500
                    console.log(additionToppings)
                }
                else if (theChoosenToppings[a] === "Crackerbread") {
                    additionToppings += 2500
                    console.log(additionToppings)
                }
                console.log(additionToppings)
                return additionToppings;
            }
            toppings(thechoosentoppings)
            if ($('#delivery').val() === "yes")
                var inputtedDeliveryofpizza = $('#delivery1').val() + "" + "delivery charged=250frw";
            console.log(inputtedDeliveryOfPizza)
        }
        if ($('#delivery').val() === "no")
            var inputtedDeliveryOfPizza = $('#delivery').val();
        console.log(inputtedDeliveryOfPizza)
    });
    var newOrder = new odder(inputtedSizeOfPizza, inputtedQuantityOfPizza, inputtedCrustOfPizza, inputtedDeliveryOfPizza, additionToppings);
    console.log(newOrder);
    console.log(theChoosenToppings);
    $("#view").text(newOrder.sizeOfPizza)
});