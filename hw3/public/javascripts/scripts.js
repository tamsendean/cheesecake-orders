<><script>
    var t = $("#topping").val();
    var q = $("#quantity").val();
</script><script>
        $(document).ready(function(){$("form").on(function () {
            var str = $("#notes").val();
            var v = "vegan";
            if (str.indexOf(v) != -1) {
                alert("Warning: Cheesecakes contain dairy.");
            } else {
                $("form").replaceWith("Thank you! Your order has been placed.  Topping: " + t + " Quantity: " + q + " Notes: " + str);
                $("table").remove();
            }
        })};
    </script><script>
    $(document).ready(function(){
    $( "a" ).on(function() {
      var monthval = $(this).attr("value");
      $("#dropbut").text(monthval);
    })};
</script></>
