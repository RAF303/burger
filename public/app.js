$(function () {
    console.log("**************** we made it in the function")
    $(".eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenState = {
            devoured: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("Eat staus", newEaten);
                location.reload();
            }
        );
    });

    $(".burger-order").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger: $("#patty").val().trim(),
            // devoured: $("[burger=devoured]: checked").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("we got an new order")
            location.reload();
        })
    })


    // $(".devour").on("click", function (event) {
    //     var id = $(this).data("id");
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("this buger was eaten", id);
    //             location.reload();
    //         }
    //     )
    // })
})