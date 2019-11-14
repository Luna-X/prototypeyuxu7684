var infotext = "Your password should contain letters and numbers.";
console.log(1);
//The text should appear on the page when the function is called
function pwinfo() {
    console.log(2);
    document.getElementById("info").innerHTML = infotext;
    return True
}