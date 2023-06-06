function validate() {
    var CityNumber = document.getElementById("city_number").value;

    if (CityNumber == "") {
        alert("Please fill in all required fields.");
        return false;
        stop
    }
}

function cost_calculation() {
    var city = document.getElementById("city_number").value; //Get city number
    var cost = 50000 * Math.pow((city - 1), 3) + 150000 * city + 75000; //Calculate next city cost
    var cost2 = cost.toLocaleString(); //Adds dots and commas to price for easier readability

    document.getElementById("calculation_price").innerHTML = cost2;
}

function projects_and_policy() {
    var a = document.getElementById("city_number").value;
    let calculation_price = document.getElementById("calculation_price").value;

    if (document.getElementById("MP").checked && (a > 21)) //Metropolitan Planning
    {
        var city = document.getElementById("city_number").value; //Get city number
        var cost = 50000 * Math.pow((city - 1), 3) + 150000 * city + 75000 - 300000000; //Calculate next city cost
        var cost2 = cost.toLocaleString(); //Adds dots and commas to price for easier readability

        document.getElementById("calculation_price").innerHTML = cost2;
    } else if (document.getElementById("AUP").checked && (a > 16)) //Advanced Urban Planning
    {
        var city = document.getElementById("city_number").value; //Get city number
        var cost = 50000 * Math.pow((city - 1), 3) + 150000 * city + 75000 - 150000000; //Calculate next city cost
        var cost2 = cost.toLocaleString(); //Adds dots and commas to price for easier readability

        document.getElementById("calculation_price").innerHTML = cost2;
    } else if (document.getElementById("UP").checked && (a > 11)) //Urban Planning
    {
        var city = document.getElementById("city_number").value; //Get city number
        var cost = 50000 * Math.pow((city - 1), 3) + 150000 * city + 75000 - 50000000; //Calculate next city cost
        var cost2 = cost.toLocaleString(); //Adds dots and commas to price for easier readability

        document.getElementById("calculation_price").innerHTML = cost2;
    }
}