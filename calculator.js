displayNum = "";
storedNum = "";
operation = 0;
queue = 0;
calcFinished = false;

function clearDisplay()
{
    var display = document.getElementById("display");
    displayNum = "";
    storedNum = "";
    operation = 0;
    queue = 0;
    display.value = displayNum;
}

function numInput(num)
{
    var display = document.getElementById("display");

    display.value += num; //Display the number just selected
}