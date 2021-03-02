# LightSoundMemoryGame
Note - This is the Glitch code URL to view the project on gltich [Click to view Sound Memory Game code on glitch](https://glitch.com/edit/#!/actually-candle-aerosteon).

SITE Pre-Work Submission
Name: Khuziama Rehman

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

The following links were used to find appealing colors "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value", "https://coolors.co/palettes/trending".

I used W3schools to read about concepts such as setinterval,clearinterval as well as parsing data and converting it to the correct primitive type "https://www.w3schools.com/jsref/jsref_parseint.asp" I also used W3Schools to read up on generating random numbers using the builtin Math Operations. Finally I used goodle fonts to find a nicer font.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

A challenge I encountered in creating this submission was figuring out how to get the ticking clock to be functional. I had an issue where the clock would reset and start again, but it would count down faster and faster evertime I moved onto the next level. This was becasue the set inverval method was being called in multiple places which caused the timer to count down multiple times in different parts of my code. To solve this, I configured my code to only start the timer again if the countdown had stopped as a result of it reaching 0. I tried many different ways to make it work and was able to solve it by doing some research regarding the setInterval and clearInterval Methods by looking at the MDN Documents. I made a countdown function which counts down from 15 all the way to negative infinity. The counter resets itself to 15 seconds whenever the user starts/stops the game or when the user inputs the pattern correctly. The way I was able to make this method work is that if the counter was less than or equal to 0, the user would simply lose the game as the time ran out and if the user correctly inputs the pattern, the timer will reset and they will move onto the next pattern. Besides this issue, I found the excersize to be fairy simple as everything else came together very nicely.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

While I was working on this project I realized that I had a few bugs that needed to be fixed, I was able to do some research and find the solution myself, however, its hard to imagine a team of developers building a massive project without coming across bugs and issues so my question is, How do developers at codepath seek assistence for webdevelopment related issues for when they need it to be more productive and efficiently solve issues quicker?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had extra time to work on this project, I would improve upon the optional Features and change a few things. Firstly, I would add a better layout design and better colors for aesthetic purposes and find the perfect font for this project. Then I would remove the counter clock and replace it with a animation of either a progress bar, or maybe even a hourglass animation to represent the time remaining. In addition, I realized that if the counter runs out the user most likely will lose the game since they only have 3 strikes. I would have seperate variables for strikes and seperate variables for out of time to distint whether or not the user lost because of timing or incorrectness.

# Gif 
Below is a GIF of the application. The Stikes label represents the current number of incorrect inputs the user has selected. When the user goes beyond 2 strikes, they lose the game. The counter represents the 15 second countdown limit for playing back the pattern. If the counter goes to 0, the user loses the game. 

# Congratulations, Game Won!
![Alt Text](https://media.giphy.com/media/FsErjcUL7Ps286wEXR/giphy.gif)

# Oh no, You ran out of time! You Lose :(    
![Alt Text](https://media.giphy.com/media/3dLCTEWmLRnPY2OojN/giphy.gif)

# Oh no, You got 3 Strikes! You Lose :( 
![Alt Text](https://media.giphy.com/media/7RLFTqVnJwY9Eo1CCA/giphy.gif)
