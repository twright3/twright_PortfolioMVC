$(document).ready (function () {



    //Hide the divMath div
    $("#divMath, #divFactorial, #divFizzBuzz, #divPalindrome").hide();


    $("#btnCode1").click(function() {
        $("#divMath").toggle();

    });


    //Hide the divFactorial div
    $("#btnCode2").click(function () {
        $("#divFactorial").toggle();

    });


    //Hide the divFizzBuzz div
    $("#btnCode3").click(function () {
        $("#divFizzBuzz").toggle();

    });


    //Hide the Palindrome div
    $("#btnCode4").click(function () {
        $("#divPalindrome").toggle();

    });



    //Math Functions

    $("#btnMath").click(function () {
    // I want to grab the value inside input id=number1
    var number1 = Number($("#number1").val());
    var number2 = Number($("#number2").val());
    var number3 = Number($("#number3").val());
    var number4 = Number($("#number4").val());
    var number5 = Number($("#number5").val());




    //Step 2: Do something with it
    var sum = number1 + number2 + number3 + number4 + number5;
    var max = Math.max(number1, number2, number3, number4, number5);
    var small = Math.min(number1, number2, number3, number4, number5);
    var product = number1 * number2 * number3 * number4 * number5;
    var mean = (number1 + number2 + number3 + number4 + number5) / 5;


    //Step 3: Out the results to the screen
    $("#sum").text("The sum of your input is: " + sum);
    $("#max").text("The greatest number of your input is: " + max);
    $("#small").text("The least number of your input is: " + small);
    $("#product").text("The product of the numbers you inputed is: " + product);
    $("#mean").text("The mean of the numbers you inputed is: " + mean);

    });

    $("#btnClear").click(function () {
    $("#mean").text("");
    $("#product").text("");
    $("#small").text("");
    $("#max").text("");
    $("#sum").text("");
    $("#number1, #number2, #number3, #number4, #number5").val("");

    });


    //Factorial Function
    $("#btnClear1").click(function () {
    $("#input").val("");
    $("#output1").text("");
    });

    $("#btnCalc1").click(function () {
    //Step 1: Get the user data
    var input = Number($("#input").val());


    //Step 2: Do something with it
    var output = input;

    if (input > 0) {
    for (var loop = input - 1; loop > 1; loop--) {
            output *= loop;
        }
    }
    else if (input == 0) {
            output = 1;
        }
    else {
            output = "undefined";
        }

    //Step 3: Inform the user
    $("#output1").text("The factorial of " + input + " is " + output);

    });


    //Fizz Buzz
    $("#btnClear2").click(function () {
    $("#input1").val("");
    $("#input2").val("");
    $("#output2").text("");

    });

    $("#btnCalc2").click(function () {
    var input1 = Number($("#input1").val());
    var input2 = Number($("#input2").val())

    var output = "";

    //Step 2: Do something with it
    for (var loop = 1; loop <= 100; loop++) {
    var fizzCondition = loop % input1 == 0 ? true : false;
    var buzzCondition = loop % input2 == 0 ? true : false;


    if (fizzCondition && buzzCondition) {
    output += "Fizz-Buzz, ";

    }
    else if (fizzCondition) {
    output += "Fizz, ";
    }

    else if (buzzCondition) {
    output += "Buzz, ";
    }

    else {
    output += loop + ", ";
    }

    }

    //Lop off the trailing comma
    output = output.substr(0, output.length - 2);

    //Step 3: Out the results to the screen
    $("#output2").text(output);

    });

                              
    //Palindrome
    $("#btnPal").click(function () {
        
        var nospaces_str = "";
        var nospaces_rev = "";

        //get value
        var str = $("#input9").val();
        nospaces_str = str.replace(/\s+/g, '').toLowerCase();
        nospaces_rev = Reverse(nospaces_str).toLowerCase();

        //reverse the value
        reversed = Reverse(str);

        //compare values
        if (nospaces_str == nospaces_rev) {
            $("#IsPalindrome").prop("checked", true);
        }
        else
            $("#IsNotPalindrome").prop("checked", true);

        function Reverse(str) {
            var reversed = "";
            for (var i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            return reversed;
        }
    });

    $("#btnClear4").click(function () {
        $("#input9").val("");
        $("#output4").text("");
        $("#IsPalindrome").prop("checked", false);
        $("#IsNotPalindrome").prop("checked", false);
    });   


    //Number Validation
    $("#number1, #number2, #number3, #number4, #number5, #input, #input1, #input2").keypress(function (key) {
        var char = key.which;
        if (char >= 48 && char <= 57 || char === 45 && $(this).val() === "") {
            return true;
        }
        return false;
    });

    $("#closeSimple").click(function () {
        $("#divMath").hide();

    });

    $("#closeFactorial").click(function () {
        $("#divFactorial").hide();

    });

    $("#closeFizzBuzz").click(function () {
        $("#divFizzBuzz").hide();

    });

    $("#closePalindrome").click(function () {
        $("#divPalindrome").hide();

    });



    $("#lnkBlog").click(function (e) {
        e.preventDefault();
        return true;
    });

});


