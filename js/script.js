$(document).ready(function (){
    function contact(names,country,city,tel){
        this.names = Names;
        this.country = Country;
        this.city = City;
        this.tel = Tel;
    }
    function order(size,quantity,crust,toppings,delivery){
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
                console.log(inputtedSizeofpizza)
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
            var
    })
})