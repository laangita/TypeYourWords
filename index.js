
var allTheWords=[];

var word;
var wordArray = [];
var gameOn = false;
var actualLetter;
var actualPosition =0;

//if a letter is pressed: start the game
$(".letter").on("click", function(){
    if (!gameOn){
        gameOn = true;
        allTheWords.push($(".uw1").val());
        allTheWords.push($(".uw2").val());
        allTheWords.push($(".uw3").val());
        allTheWords.push($(".uw4").val());
        allTheWords.push($(".uw5").val());
        
        startWord();
    }
})




function startWord(){
    //initialize variables
    actualPosition=0;
    var randomNumber = Math.floor(Math.random()*(allTheWords.length));
    word = allTheWords[randomNumber];
    wordArray = word.split(""); 
    actualLetter=wordArray[actualPosition];
    //change title
    $("#instructions").text(word);
    $("#pressStart").text("Type the letters");
    $(".letter").remove();

    //create a restart button
    $("#restart").append("<button class= 'restart letter'>RESTART</button>");
    $(".restart").on("click", function (evt){
        window.location.reload();
    })
    for (var i= 0; i < wordArray.length; i++) {
    //create buttons with letters
         $(".playerLetters ").append(
            
            '<button class="' + i + ' letter"> ' + wordArray[i] + '  </button>'
        );
      /*   "<button class=" + i +"> " + wordArray[i] + '  </button>');
       $("." + i).addClass("letter");  //alternative zu quotations problem */
       
    }
    playLetter();
}

function playLetter(){
    $(document).on("keydown", function(evt){
        //if actualetter is the same as inputletter add class right
        if (actualLetter === evt.key) {
            $("." + actualPosition).addClass("right"); 
            actualPosition++;
            actualLetter=wordArray[actualPosition];
            //start next letter
            playLetter();
        }
       if (actualPosition >= wordArray.length){
        //todo: timeout is not working!!!
       // setTimeout(startWord, 800);
startWord();
       }
    }
    
    )
}