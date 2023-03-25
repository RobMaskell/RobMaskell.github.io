
async function rollDiceClick(rollType, modifier) {

    var res = await get2d6(modifier);

    var textRes = res.tot <= 6 ? "Fail" : (res.tot <= 10 ? "Partial Success" : "Success")

    var div = document.createElement("div");
    div.innerHTML = rollType + "<br>(" + res.roll1 + " + " + res.roll2 + ") " + (modifier>=0?"+":"") + modifier + " = " + res.tot + "<br>Result: " + textRes;
    document.getElementById("rolls").appendChild(div);

}


async function get2d6(modifier) {
    var res = {};
    await fetch("https://www.random.org/integers/?num=2&min=1&max=6&col=2&base=10&format=plain&rnd=new")
        .then((response) => response.text())
        .then((data) => {
            data = data.trim();
            res.roll1 = Number(data.slice(0,1));
            res.roll2 = Number(data.slice(-1));
            res.tot = res.roll1 + res.roll2 + modifier;
        });
    return res;
}