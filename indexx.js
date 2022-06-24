/*this is the js to access the calculator from mouse */
console.log("Welcome to calculator ");
//array for memory 
var counter = 0;
var elem;
var arr = [];
var playCounter = 0;
var songcounter;
console.log(arr);


//for music 
const music = new Audio('ding11.mp3');
const result = new Audio('result.mp3');
const clearsound = new Audio('clearsound.mp3');
const memorysound = new Audio('memory.mp3');
const song1 = new Audio('song1.mp3');
const song2 = new Audio('song2.mp3')
const song3 = new Audio('song3.mp3')
const song4 = new Audio('song4.mp3')
const song5 = new Audio('song5.mp3')
const song6 = new Audio('song6.mp3')
const song7 = new Audio('song7.mp3')
const song8 = new Audio('song8.mp3')
const song9 = new Audio('song9.mp3')
const song10 = new Audio('song10.mp3')



//id for display
let screen = document.getElementById("screen");
screeninnertext = screen.innerText;

console.log(`${screeninnertext}`)


let tds = document.getElementsByClassName("td")




for (iterator of tds) {
    console.log(iterator)
    console.log(iterator.innerText);
    iterator.addEventListener("click", (e) => {
        innertext = e.target.innerText;

        console.log(`${iterator} is clicked  with value of ${e.target.innerText}`);
        console.log(`the value of variable of innertext is ${innertext}`);
        if (innertext == 'C') {

            screen.innerText = screeninnertext;
            screeninnertext = "";
            clearsound.play();

        } else if (innertext == 'MC') {
            screen.innerText = screeninnertext;
            screeninnertext = "";

            console.log("mc is called ");
            arr = [];
            console.log(`the length of arr is ${arr.length}`)
            memorysound.play();
        } else if (innertext == 'play') {

            console.log("play button is clicked ");
            switch (playCounter) {
                case 0: console.log("playing the first song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song1.play();
                    break;
                case 1: console.log("playing the second song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song2.play();
                    song1.pause();
                    break;
                case 2: console.log("playing the third song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song3.play();
                    song2.pause();
                    break;
                case 3: console.log("playing the fourth song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song4.play();
                    song3.pause();
                    break;
                case 4: console.log("playing the five song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song5.play();
                    song4.pause();
                    break;
                case 5: console.log("playing the sixth song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song6.play();
                    song5.pause();
                    break;
                case 6: console.log("playing the seven song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song7.play();
                    song6.pause();
                    break;
                case 7: console.log("playing the eigth song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song8.play();
                    song7.pause();
                    break;
                case 8: console.log("playing the nine song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song9.play();
                    song8.pause();
                    break;
                case 9: console.log("playing the ten song ");
                    playCounter = playCounter + 1;
                    console.log(`the value of playcounter is ${playCounter}`)
                    song10.play();
                    song9.pause();
                    break;
                default: console.log("counter finished");
                         song10.pause();







            }
        } else if (innertext == 'M+') {


            /*adding the result in array(memory )*/
            console.log("m+ is clicked ")
            arr.push(`${screeninnertext}`);
            console.log(arr);
            // screen.innerText = screeninnertext;
            //screeninnertext = "";
            // screen.innerText = "";
            /*iteraing the array*/
            /*for (r = 0; r < arr.length; r++) {
                console.log(arr[r])
                memorysound.play();
            }*/




        } else if (innertext == 'M-') {
            memorysound.play();
            screen.innerText = screeninnertext;
            screeninnertext = "";

            console.log("m- is clicked ");
            /*removing the result in array(memory )*/
            arr.pop();
            /*iteraing the array*/
            for (r = 0; r < arr.length; r++) {
                console.log(arr[r])

            }

        } else if (innertext == 'MR') {
            screen.innerText = screeninnertext;
            screeninnertext = "";
            console.log("mr is clicked ");
            console.log(arr);

            console.log(`the value of counter is ${counter}`)
            switch (counter) {
                case 0: console.log(arr[0]);
                    counter++;
                    if (arr[0] !== undefined) {
                        screen.innerText = arr[0];
                        memorysound.play();

                    }
                    break;

                case 1: console.log(arr[1]);
                    counter++;
                    if (arr[1] !== undefined) {
                        screen.innerText = arr[1];
                        memorysound.play();

                    }
                    break;

                case 2: console.log(arr[2]);
                    counter++;
                    if (arr[2] !== undefined) {
                        screen.innerText = arr[2];
                        memorysound.play();

                    }
                    break;

                case 3: console.log(arr[3]);
                    counter++;
                    if (arr[3] !== undefined) {
                        screen.innerText = arr[3];
                        memorysound.play();

                    }
                    break;

                case 4: console.log(arr[4]);
                    counter++;
                    if (arr[4] !== undefined) {
                        screen.innerText = arr[4];
                        memorysound.play();

                    }
                    break;

                case 5: console.log(arr[5]);
                    counter++;
                    if (arr[5] !== undefined) {
                        screen.innerText = arr[5];
                        memorysound.play();

                    }
                    break;

                case 6: console.log(arr[6]);
                    counter++;
                    if (arr[6] !== undefined) {
                        screen.innerText = arr[6];
                        memorysound.play();

                    }
                    break;

                case 7: console.log(arr[7]);
                    counter++;
                    if (arr[7] !== undefined) {
                        screen.innerText = arr[7];
                        memorysound.play();

                    }
                    break;

                case 8: console.log(arr[8]);
                    counter++;
                    if (arr[8] !== undefined) {
                        screen.innerText = arr[8];
                        memorysound.play();

                    }
                    break;

                case 9: console.log(arr[9]);
                    counter++;
                    if (arr[9] !== undefined) {
                        screen.innerText = arr[9];
                        memorysound.play();

                    }
                    break;

                case 10: console.log(arr[10]);
                    counter++;
                    if (arr[10] !== undefined) {
                        screen.innerText = arr[10];
                        memorysound.play();

                    }

                    break;

                default: console.log("counter finished");
                    memorysound.play();

            }






        } else if (innertext == '=') {
            console.log("= is clicked ")
            screen.innerText = eval(screeninnertext);

            /*rounding of the number upto two decimal places allowed*/
            //Number(1.345).toFixed(2);
            Number(eval(screeninnertext)).toFixed(2);
            console.log(`${Number(eval(screeninnertext)).toFixed(2)}`)

            /*elem is the variable which will be added in array (memory )
            when m+ is clicked */
            elem = Number(eval(screeninnertext)).toFixed(2);
            console.log(`the value of elem is ${elem}`)

            /*reassinginng the roudded value to screen.innerText*/
            screen.innerText = Number(eval(screeninnertext)).toFixed(2);
            result.play();








        } else {
            console.log("else")
            /*intially the screeninnertext is blank , 
            when screeninnertext += innertext
            (a) when its blank , it adds{"not +"} the value of innertext
                 for eg .. supose intially the value of screeninnertext is blank and 
                           innertext is 1, then the new value of screeninnertext
                            value will be 1.
            (b) when it has some character , it adds the value of inenertext 
                 in next place
                 for eg .. suppose the screeninnertext has a value of 5, and
                           innertext is 1 then the new value of screninnertext
                            will be 51   */
            screeninnertext += innertext;
            screen.innerText = screeninnertext;

            /*when else is clicked this sound is playd */
            music.play();
            console.log("music is playing")

            setTimeout(() => {

                music.pause();
                console.log("music is stopped after some time")




            }, 300);
        }

    }
    )
}
