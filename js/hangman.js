/**
 * Created by h205p3 on 11/14/16.
 */
function pickWord(){
var words = ["sausage",
"blubber",
"pencil",
"cloud",
"moon",
"water",
"computer",
"school",
"network",
"hammer",
"walking",
"violently",
"mediocre",
"literature",
"chair",
"two",
"window",
"cords",
"musical",
"zebra",
"xylophone",
"penguin",
"home",
"dog",
"final",
"ink",
"teacher",
"fun",
"website",
"banana",
"uncle",
"softly",
"mega",
"ten",
"attach",
"blue",
"internet",
"bottle",
"tight",
"zone",
"tomato",
"prison",
"hydraulics",
"cleaning",
"television",
"send",
"frog",
"cup",
"book",
"zooming",
"falling",
"evilly",
"gamer",
"lid",
"juice",
"monitor",
"captain",
"bonding",
"loudly",
"thudding",
"guitar",
"shaving",
"hair",
"soccer",
"water",
"racket",
"table",
"late",
"media",
"desktop",
"flipper",
"club",
"flying",
"smooth",
"monster",
"purple",
"guardian",
"bold",
"hyperlink",
"presentation",
"world",
"national",
"comment",
"element",
"magic",
"lion",
"sand",
"crust",
"toast",
"jam",
"hunter",
"forest",
"foraging",
"silently",
"awesome",
"joshing",
"pong"];
var count = 0;
rand = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < rand.length; i++) {
        count += 1;
    }
underscores = "_".repeat(count);

console.log(count);
console.log(rand);
console.log(underscores);
    document.getElementById("output").innerHTML = "The Word: " + underscores;
    document.getElementById("output3").innerHTML = "Lives: " + lives;
}
list = [];
lives = 6;

function guessLetter() {
    var q = document.getElementById("chosenLetter").value;
    var tracker = 0;
    console.log(q);
    var pop = false;

    //don't touch, used for "You already guessed"
    var listLength = list.length;
    for (var o = 0; o < list.length; o++) {
        if (list[o]==q) {
            tracker = tracker + 1;
            console.log(tracker);
        }
    }
    list.push(q);
    //letter guesses
    if (tracker == 0) {
        for (var i = 0; i < rand.length; i++) {
            //yes, hit! (is the current letter in guessed letters?)
            if (rand[i] == q) {
                console.log(true);
                underscores = underscores.substr(0, i) + q + underscores.substr(i + 1);
                pop = true;
            }
        }
        document.getElementById("output5").innerHTML =""
    } else {
        document.getElementById("output5").innerHTML ="You already guessed that letter";
        pop = true;
    }
    if (underscores == rand) {
        document.getElementById("output6").innerHTML = "YOU WIN";
    }

    //lives
    if (pop == false) {
        lives = lives - 1;
    }
    if (lives == 0) {
        document.getElementById("output4").innerHTML = "GAME OVER";
    }



    document.getElementById("output2").innerHTML = "Letters Guessed: " + list;
    document.getElementById("output").innerHTML = "The Word: " + underscores;
    document.getElementById("output3").innerHTML = "Lives: " + lives;
    console.log(list);
    console.log(rand);
    console.log(underscores);
}