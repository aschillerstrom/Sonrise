$(document).ready(function () {

    var survey = $("#survey");

    //this function posts the survey data to the database via the submit button
    survey.submit(function (event) {
        event.preventDefault();
        //getting the values of the form
        var formData = {
            ment: $("input[id='ment']:checked").val(),
            //need to get profile picture
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            bio: $("#textarea1").val().trim(),
            zip_code: $("#zip_code").val().trim(),
            birthday: $("#birthday").val().trim(),
            d_one: $("d1").val().trim(),
            d_two: $("d2").val().trim(),
            d_three: $("d3").val().trim(),
            d_four: $("d4").val().trim(),
            d_five: $("d5").val().trim(),
        }

        if (formData.ment == true) {
            $.ajax({
                type: "POST",
                contentType: "application/JSON",
                url: "/api/mentors",
                data: JSON.stringify(formData),
                dataType: 'json',
                success: success
            })
        } else {
            $.ajax({
                type: "POST",
                contentType: "application/JSON",
                url: "/api/mentees",
                data: JSON.stringify(formData),
                dataType: 'json',
                success: success
            });

        };
    });

});