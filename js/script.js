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
})