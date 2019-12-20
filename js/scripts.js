// Business logic
function PizzaOrder(flavour, size, crust, topping, number) {
    this.flavour = flavour
    this.size = size
    this.crust = crust
    this.topping = topping
    this.number = number
  }
  
  PizzaOrder.prototype.pizzaPrice = function () {
    let total = (this.flavour + this.size + this.crust + this.topping);
    return total;
  }
  
  //User interface logic
  $(document).ready(function () {
    $("#yes").hide();
    $("#no").hide();
    $("#totalcost").hide();
    $("#delivercost").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".address").hide();
  
  
    $("#order").click(function (event) {
      event.preventDefault();
  
      let pflavour = parseInt($("#flavours option:selected").val());
      let psize = parseInt($("#sizes option:selected").val());
      let pcrust = parseInt($("#crusts option:selected").val());
      let ptopping = parseInt($("#toppings option:selected").val());
      let pnumber = parseInt($("#number ").val());
  
      let newOrder = new PizzaOrder(pflavour, psize, pcrust, ptopping, pnumber)
      let total = newOrder.pizzaPrice();
      let grandTotal = total * newOrder.number;
  
      console.log(grandTotal)
  
      $('table#tablecart').append(
        '<tr>' +
        '<td>' + $("#flavours option:selected").text() + '</td>' +
        '<td>' + $("#sizes option:selected").text() + '</td>' +
        '<td>' + $("#crusts option:selected").text() + '</td>' +
        '<td>' + $("#toppings option:selected").text() + '</td>' +
        '<td>' + pnumber + '</td>' +
        '<td>' + grandTotal + '</td>' +
        '</tr>');
  
      $(".checkout").click(function () {
        $(".checkout").hide();
        $(".delivery").show();
        $("#yes").hide();
        $("#no").hide();
        $("#totalcost").show();
        $("#delivercost").show();
        $(".yes-button").show();
        $(".no-button").show();
        $(".address").hide();
        grandTotal = grandTotal + total;
        $("p span").html(grandTotal);
      });
      $(".yes-button").click(function () {
        $("#delivercost").hide();
        $("#no").hide();
        $("#yes").hide();
        $(".address").show();
        $(".yes-button").hide();
        $(".no-button").hide();
        $("#totalcost span").html(grandTotal + 100);
      });
      $(".no-button").click(function () {
        $("#delivercost").hide();
        $("#yes").hide();
        $("#no").show();
        $(".yes-button").hide();
        $(".no-button").hide();
        $("#totalcost span").html(grandTotal);
      });
      $("#addaddress").click(function () {
        var address = $(".address input").val();
        $("#yes").show();
        $(".address").hide();
        $("#yes span").html(address);
      });
      $(".refresh").click(function (event) {
        $('form').each(function () {
          this.reset();
          $(".delivery").hide();
          $("#tablecart tbody tr").remove();
        });
      });
    });
  });