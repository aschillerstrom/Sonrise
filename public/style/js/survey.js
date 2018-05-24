// $(function(){
    //this function posts the survey data to the database via the submit button
    $("#survey_submit").on("click", function (event) {
        event.preventDefault();

        console.log($("input[id='ment']:checked").val());
        //getting the values of the form
       
        var formData = {
            ment: $("input[id='ment']:checked").val(),
            //need to get profile picture
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            bio: $("#textarea1").val().trim(),
            zip_code: $("#zip_code").val().trim(),
            // birthday: $("#birthday").val().trim(),
            d_one: $("#d1").val(),
            d_two: $("#d2").val(),
            d_three: $("#d3").val(),
            d_four: $("#d4").val(),
            d_five: $("#d5").val(),
        }

        if (formData.ment == "true") {
            $.ajax({
                type: "POST",
                contentType: "application/JSON",
                url: "/api/mentors",
                data: JSON.stringify(formData),
                dataType: 'json'
            }).then(response => {
                window.location.href = "/connection.html";
            })
        } else {
            $.ajax({
                type: "POST",
                contentType: "application/JSON",
                url: "/api/mentees",
                data: JSON.stringify(formData),
                dataType: 'json'
            }).then(response => {
                window.location.href = "/connection.html";
            });

        };
    });

// });