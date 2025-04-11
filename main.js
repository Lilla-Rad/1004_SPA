localStorage.clear();
var faqtripped = 0;
var bgshift = 255;
var siteper = 0;
var gamestage = 0;
var playername;
var stageFirst = false;
var stageThird = false;
var stageFifth = false;
const playerinfo = {};
var eogCheck = 0;
var startTime = Date.now()
var puzzlefields = ["one1", "two1", "three1", "four1", "five1", "six1", "seven1"];

function jsonToCsv(items) {
    const header = Object.keys(items[0]); const headerString = header.join(',');
    const replacer = (key, value) => value ?? ''; const rowItems = items.map((row) =>
        header
            .map((fieldName) => JSON.stringify(row[fieldName], replacer))
            .join(',')
    );
    const csv = [headerString, ...rowItems].join('\r\n');
    return csv;
}

function csvToJson(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }

    return JSON.stringify(result);
}

function getTime() {
    var time = new Date();
    let returntime = time.toLocaleTimeString();
    document.getElementById("currenttime").innerHTML = "It is currently " + returntime + ".";
    setTimeout(getTime, 1000);
}

function rest(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetset() {
    puzzlefields.forEach(item => document.getElementById(item).value = "");
}

function bgChange() {
    bgshift -= 12.75;
    document.body.style.backgroundColor = 'rgb(' + [bgshift, bgshift, bgshift].join(',') + ')';;
}

function nameInp() {
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("Please give me your name :)");
        return false;
    }
    console.log("“Formed at altitudes between 1,000 and 5,000ft, these clouds may sometimes produce rain.”");
    document.getElementById("consoleAlert").play();
    playername = JSON.stringify(name);
    playerinfo.playername = name;
    document.getElementById("printname").innerHTML = name + "?";
    document.getElementById("address").innerHTML = name + ".";
    document.getElementById("reaction").style.display = "block";
    document.getElementById("named").disabled = true;
    document.getElementById("name").value = "";
}

function incrsiteper() {
    siteper++;
    percent = Math.ceil((siteper / 7) * 100);
    document.getElementById("siteper").innerHTML = percent + "%";
    if (siteper == 7) {
        var endTime = Date.now() - startTime;
        var timeplayed = endTime / 60000;
        var timer = JSON.stringify(timeplayed);
        playerinfo.time = timeplayed;
        var stagest = JSON.stringify(gamestage);
        //newcsv = jsonToCsv(playerinfo);
        //newjson = csvToJson(newcsv);
        var playname = JSON.parse(playername);
        var playtime = JSON.parse(timer);
        var highstage = JSON.parse(stagest);
        document.getElementById("intro").innerText = "SO LONG.";
        document.getElementById("cumulEndText").innerText = "YOUR NAME: " + playname + "\nYOUR TIME: " + playtime + " MINUTES" + "\nYOUR SCORE: " + percent + "\nYOUR LEVEL: " + highstage;
        document.getElementById("cumulStartText").style.display = "none";
        document.getElementById("cumulEndText").style.display = "block";
        document.getElementById("startimg").style.display = "none";
        document.getElementById("endimg").style.display = "block";
    }
}


function hideshowSwitch() {
    var toHide = document.getElementById("namer");
    toHide.style.display = "none";
    var toShow = document.getElementById("gamer");
    toShow.style.display = "block";
    resetset();
    console.log("Haha, this is cute.");
    document.getElementById("consoleAlert").play();
}


function pageswitch(string1, string2) {
    document.getElementById(string1).style.display = "none";
    document.getElementById(string2).style.display = "block";
    if (string2 == "notepage" && eogCheck == 0) {
        console.log("To the kid who made this: listen I know you’re not really here anymore but this isn’t what privacy notices are for. BTW. \nSorry I felt like being petty. Carry on.")
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
        eogCheck++;
    }
    if (siteper == 2 && string2 == "indexpage") {
        console.log("It’s a little weird to think about this disappearing. I know nobody’s going to miss it, but it still feels like punching a gap in something soft, you know? \nI mean, the stuff I made is gone now, but I still remember it. I remember the contours of its skeleton, or at least how I imagined it I guess. Will it be the same for the person who made this ? \nDid they forget what they made or why they were making it? \nidk. I’m thinking about this too deeply. Carry on.");
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
    }
    if (siteper == 3 && string2 == "indexpage") {
        console.log("I'm getting tired. Can we take a break?");
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
    }
    if (siteper == 4 && string2 == "indexpage") {
        console.log("I'm getting tired. Can we take a break?");
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
    }
    if (siteper == 5 && string2 == "indexpage") {
        console.log("I'm getting tired. Can we take a break?");
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
    }
    if (siteper == 6 && string2 == "indexpage") {
        console.log("I think ultimately it doesn’t really matter how it turns out or why it turned out like that in the first place. I think once you start making something, the shape of it condenses in the back of your mind and you’re stuck with the understanding that you can never reach out to hold it. ");
        rest(1000).then(() => { console.log("When faced with harsh conditions, the clouds fill with holes."); });
        rest(1000).then(() => { console.log("What am I filled with?"); });
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
    }
    if (string1 == "faqfalse") {
        console.log("You’re on a path in the woods. That’s how these things start, right?");
        document.body.style.backgroundColor = "black";
        faqtripped = 1;
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
    }
    if (faqtripped == 1 && string2 == "faqpage") {
        document.getElementById("favi").href = "/img/favifake.ico";
        document.body.style.backgroundColor = "black";
        document.getElementById("faqtitle").style.color = "white";
        document.getElementById("faqnav").style.color = "white";
    }
    if (faqtripped == 1 && string1 == "faqpage" && siteper != 7) {
        rest(100).then(() => { document.body.style.backgroundColor = "white"; });
        document.getElementById("faqtitle").style.color = "black";
        document.getElementById("faqnav").style.color = "black";
    }
    if (string1 == "lastgame") {
        document.getElementById("gamepage").style.display = "none";
        document.getElementById("indexpage").style.display = "block";
    }

    if (siteper != 7 && string2 != "faqpage" && string1 == "gamepage" || string1 == "lastgame") {
        document.body.style.backgroundColor = "white";
    }

    if (string2 == "eog" && eogCheck != 2) {
        eogCheck = 2;
        console.log("the fuck");
        document.getElementById("consoleAlert").play();
        incrsiteper();
    }
    if (siteper == 7 && string2 == "indexpage") {
        document.getElementById("navi").style.display = "none";
        document.getElementById("cumultext").style.color = "black";
        document.getElementById("intro").style.color = "black";
        document.body.style.backgroundColor = "#872a00";
    }

}

function revealSection(int) {
    if (int == 2) {
        console.log("Unsuccessful web dev endeavours aside, text adventure games were the shit. Easy to make, easy (?) to play. I spent like a year developing one, made the map using a dictionary and everything. If I wanted to, I could’ve made it in an afternoon or two, but in my defence I was working on it for an hour max per week. And also I was 12. Not like it matters, but it’s a little easy to get distracted at that age. ");
        document.getElementById("consoleAlert").play();
    }
    if (int == 6) {
        console.log("I think I’d prefer to be in the woods than whatever the hell this is.");
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
    }
    if (int == 7) {
        console.log(".");
        document.getElementById("consoleAlert").play();
    }
    if (int == 8) {
        console.log("Woops, typo. Anyways, let’s just get through this so I can look at the %ccloud",
            "color: blue",
            "again.");
        rest(2000).then(() => { alert("(1) NEW MESSAGE (F12)"); });
        document.getElementById("consoleAlert").play();
    }
    if (int == 11) {
        document.getElementById("base").style.display = "none";
        document.getElementById("trial").style.display = "block";
    }
    else {
        document.getElementById(int).style.display = "block";
    }
}

