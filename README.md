Continuing journey with React. Last project was all about basic stuff, and later using Hooks to replace simple Classes with functions. This time
I'm going to use Effects, maybe lifecycle methods. but hopefully Hooks will be enough.

---

This project was fast and easy. I did have little trouble getting started but after I sat down, thought how I'm gonna implement everything, and then
made notes and drafts on paper, rest was a breeze.
So not much to say about this project. I like using Hooks and Effects etc. It makes writing React so much smoother experience. Especially after first
learning to do everything with Classes.

Basically I just made a array of pictures. And used Math.random to make always an array with randomized numbers from 1 to 12. Then I assigned every rendered
card with a certain index from the number array and used it's value to pick the picture for the card.

All I had to do then was to use useEffect to randomize cards everytime score was changing. When card was clicked I concated it to a separate array.
Every turn the game checks if the next card is in that array, and based on that it either raises player's score, or restarts the game (and sets the hiScore to
match the highest score.)
