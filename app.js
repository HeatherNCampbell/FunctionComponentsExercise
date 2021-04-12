// April 12
// React - Function Components Exercise

// 1a.
const GrinchXmas = () => {
    return "Cheer up, dude. It's Christmas.";
}

// 2a.
const GrinchMusic = () => {
    return (
        <div>
            <h1>"Blast this Christmas music! It's joyful and triumphant."</h1>
        </div>
    );
}

// 3a. 
const GrinchIdiot = () => {
    return (
        <div>
            <h2>"I'm an idiot!"</h2>
            <h2>You're an idiot!".</h2>
        </div>
    );
}

// 4a. 
const GrinchSchedule = () => {
    return (
        <div>
            <ol>
                <li>"4:00, wallow in self-pity."</li>
                <li>"4:30, stare into the abyss."</li>
                <li>5:00, solve world hunger, tell no one."</li>
                <li>5:30, jazzercize."</li>
                <li>"6:30, dinner with me. I can't cancel that again."</li>
                <li>"7:00, wrestle with my self-loathing."</li>
            </ol>
            <p>
                "I'm booked. Of course, if I bump the loathing to 9, I could still be done in time to lay in bed, stare at the ceiling and slip slowly into madness."
        </p>
        </div>
    );
}

// 5a. 
const GrinchPoster = () => {
    return (
        <img src="https://img01.mgo-images.com/image/thumbnail/v2/content/1MV1ca3f097dd209568db5d4a36e429dbda.jpeg" />
    );
}

// 1b 2b 3b 4b 5b 6b
//ReactDOM.render(
    //<GrinchXmas />,
    //<GrinchMusic />,
    //<GrinchIdiot/>,
    //<GrinchSchedule/>,
    //<GrinchPoster/>,
    //<GrinchVmail />,
    //document.getElementById('root')
//);

// 6a 6b 6c
const GrinchVmail = () => {
    const u = "YOU";
    return (
        <div>
            <h1>"IF YOU UTTER SO MUCH AS ONE SYLLABLE, I'LL HUNT YOU DOWN AND GUT YOU LIKE A FISH!" {u}</h1>
            <h3>"If you'd like to fax me, press the star key." {u}</h3>
        </div>
    );
}


// 7a. 
const GrinchAll = () => {
    return (
        <div>
            <GrinchXmas />
            <GrinchMusic />
            <GrinchIdiot />
            <GrinchSchedule />
            <GrinchPoster />
            <GrinchVmail />
        </div>
    );
}
// 7b. 
ReactDOM.render(
    <GrinchAll />,
    document.getElementById('root')
);

//BONUS
// 8a. Below the ReactDOM Render method, create another function component using an arrow function expression called DiceRoll.
// // 8b. Inside the function component use Math.random to return a random number between 1 and 6 and set it to const variable called "die1"
// 8c. Below the die1 variable, use Math.random again to return a random number between 1 and 6 and set it to const variable called "die2"
// 8d. Below the die2 variable, have the DiceRoll function component return an h1 element. Inside the h1 element use a TERNARY that…
// Sets the text for the h1 to "SNAKE EYES" if both die1 and die2 are equal to 1 
// Or
// If either die1 or die2 is NOT equal to 1 sets the text for the h1 to the values for each die like shown in this example: 2 & 5.
// 8e. Below the DiceRoll function component, use the ReactDOM Render method again to render/display the DiceRoll function component in the div with the id of "root" in the HTML file
