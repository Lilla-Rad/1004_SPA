var sitepercent;
var gamestage;


/*GAME PAGE*/

function nameInp() {
    var name = document.getElementById("name").value;
    localStorage.setItem("playername", name);
    const savedname = JSON.stringify(name);
    document.getElementById("printname").innerHTML = name + "?";
    var text = document.getElementById("reaction");
    text.style.display = "block";
}

function getTime() {
    var time = new Date();
    let returntime = time.toLocaleTimeString();
    document.getElementById("currenttime").innerHTML = "It is currently " + returntime + ".";
}

function validateOne() {
    let correct = 0;
    let first = document.getElementById("one").value;
    (first == "p") ? correct++ : correct + 0;
    let second = document.getElementById("two").value;
    (second == "li") ? correct++ : correct + 0;
    let third = document.getElementById("three").value;
    (third == "b") ? correct++ : correct + 0;
    let fourth = document.getElementById("four").value;
    (fourth == "li") ? correct++ : correct + 0;
    let fifth = document.getElementById("five").value;
    (fifth == "i") ? correct++ : correct + 0;
    let sixth = document.getElementById("six").value;
    (sixth == "li") ? correct++ : correct + 0;
    let seventh = document.getElementById("seven").value;
    (seventh == "ul") ? correct++ : correct + 0;
    if (correct == 7) {
        document.getElementById("fill1").style.display = "none";
        gamestage++
    }
    else {
        alert("So close! Keep going :)")
    }
}

/*GLOBAL*/

function incrementPercent() {
    sitepercent++;
}

/*INDEX*/

function displayPercent() {
    let percent = (sitepercent / 5) * 100;
    document.getElementById("siteper").innerHTML = percent + "%";
}

function hideshowSwitch() {
    var toHide = document.getElementById("namer");
    toHide.style.display = "none";
    var toShow = document.getElementById("gamer");
    toShow.style.display = "block";
}

function revealSection(int) {
    document.getElementById(int).style.display = "block";
}

function hideShow() {
    /*var sitepercent = / 7 * 100*/
    if (sitepercent == 7) {
        var toHide = document.getElementById("startimg");
        toHide.style.display = "none";
        var toShow = document.getElementById("endimg");
        toShow.style.display = "block";
    }
}


function startTimer() {
    const d = new Date();
    let time = d.getTime();
    localStorage.setItem("StartTime", time);
}

function endTimer() {
    const d = new Date();
    let time = d.getTime();
    localStorage.setItem("EndTime", time);
}



/*FAQ*/
function checkIntegrity() {
    var integattempt = document.getElementById("integrity").value;
    if (integattempt == "sppgiw") {
        document.getElementById("integrity").disabled = true;
        alert("correct! :)");
        sitepercent++;
    }
    else {
        alert("Have you tried looking down?");
    }
}

function checkPatience() {
    var patattempt = document.getElementById("patience").value;
    if (patattempt == "sbwgeik") {
        document.getElementById("patience").disabled = true;
        alert("correct! :)");
        sitepercent++;
    }
    else {
        alert("Have you tried looking down?");
    }
}

function checkSelf() {
    document.getElementById("self").disabled = true;
    alert(":)");
    sitepercent++;
}


