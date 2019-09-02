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
            
    })
})