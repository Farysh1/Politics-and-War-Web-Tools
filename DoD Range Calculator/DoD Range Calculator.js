function War_Range_calculation() {
    var NationScore = document.getElementById("Nation_Score").value; //Get Nation Score number
    var War_Range_Min = NationScore * 0.75; //Calculate minimum war range
    var War_Range_Max = NationScore * 1.75; //Calculate maximum war range
    var War_Range_Min2 = War_Range_Min.toLocaleString(); //Adds dots and commas to the Minimum War Range for easier readability
    var War_Range_Max2 = War_Range_Max.toLocaleString(); //Adds dots and commas to the Maximum War Range for easier readability

    document.getElementById("calculation_War_Range").innerHTML = War_Range_Min2 + " - " + War_Range_Max2;
}

function Spy_Range_calculation() {
    var NationScore = document.getElementById("Nation_Score").value; //Get Nation Score number
    var Spy_Range_Min = NationScore * 0.40; //Calculate minimum spy range
    var Spy_Range_Max = NationScore * 2.50; //Calculate maximum spy range
    var Spy_Range_Min2 = Spy_Range_Min.toLocaleString(); //Adds dots and commas to the Minimum Spy Range for easier readability
    var Spy_Range_Max2 = Spy_Range_Max.toLocaleString(); //Adds dots and commas to the Maximum Spy Range for easier readability

    document.getElementById("calculation_Spy_Range").innerHTML = Spy_Range_Min2 + " - " + Spy_Range_Max2;
}

function CopyDataToClipboard() {
    var NationScore = document.getElementById("Nation_Score").value; //Get Nation Score number
    var War_Range_Min = NationScore * 0.75; //Calculate minimum war range
    var War_Range_Max = NationScore * 1.75; //Calculate maximum war range
    var War_Range_Min2 = War_Range_Min.toLocaleString(); //Adds dots and commas to the Minimum War Range for easier readability
    var War_Range_Max2 = War_Range_Max.toLocaleString(); //Adds dots and commas to the Maximum War Range for easier readability

    var NationScore = document.getElementById("Nation_Score").value; //Get Nation Score number
    var Spy_Range_Min = NationScore * 0.40; //Calculate minimum spy range
    var Spy_Range_Max = NationScore * 2.50; //Calculate maximum spy range
    var Spy_Range_Min2 = Spy_Range_Min.toLocaleString(); //Adds dots and commas to the Minimum Spy Range for easier readability
    var Spy_Range_Max2 = Spy_Range_Max.toLocaleString(); //Adds dots and commas to the Maximum Spy Range for easier readability

    const textToCopy = "War Range: " + War_Range_Min2 + " - " + War_Range_Max2 + "  |  " + "Spy Range: " + Spy_Range_Min2 + " - " + Spy_Range_Max2;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch((err) => {
            console.error('Error copying text to clipboard:', err);
        });
}