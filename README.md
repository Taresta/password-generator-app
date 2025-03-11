# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./starter-code/assets/images/Screenshot%202025-03-11%20125141.jpg)


### Links

- Solution URL: [Solution URL](https://github.com/Taresta/password-generator-app.git)
- Live Site URL: [Live Site URL]()

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- CSS Grid
- JavaScript


### What I learned

It was once again an amazing challenge. I made a lot of mistakes and hence learned a lot in the process. My SCSS and Javascript are filled with comments that highlights the confusion I faced. Let us talk about styling first:

1. SCSS
  a. First challenge I had was customizing the range and the checkboxes. Of course, I had no idea how to, and after seraching many solutions online, I finally managed to somehow get that right. It might not be perfect still, but I am satisfies with it for now. I also learnt that to override the deafult browser styles, I had to write different styles for mozilla and the other browsers, which was quite an interesting discovery.
  ```
  .password-card__range {
                    //styling the track
                    -webkit-appearance:none;
                    background: none;
                    height:8px;
                    width:100%;
                    background: $very-dark-grey;
                    background-image: linear-gradient($neon-green, $neon-green);
                    background-size: 0 100%;
                    background-repeat: no-repeat;

                    //Styling the thumb
                    &::-webkit-slider-thumb {
                        -webkit-appearance:none;
                        height:20px;
                        width:20px;
                        background-color: $almost-white;
                        border-radius: 50%;
                        cursor: pointer;

                        &:hover {
                            background-color: $very-dark-grey;
                            border: 0.125rem solid $neon-green;
                        }
        
                    }
                    &::-moz-range-thumb {
                        -webkit-appearance:none;
                        height:15px;
                        width:15px;
                        background-color: $neon-green;
                        border-radius: 50%;

                        &:hover {
                            background-color: $very-dark-grey;
                            border: 0.125rem solid $neon-green;
                        }
                    }

            }
  ```
  b. There were many other minor challenges that look simple enough but got me thinking a lot, like styling my password input box which kept on overflowing its container because its font size was too large. 
  c. There was also the problem regarding the 'COPIED' message which appeared when we hit the copy icon. On its appearance the overall size of the conatiner would increase suddenly which would not look pleasant, so I had to write a media query just for this for the larger sceen sizes. I am not sure if there is a better solution to this problem, but I would love to know about it if there is one.
  d. There were many other things, which you can find the hints of in my comments.
2. Javascript
  a. This time I did a bit of thinking before writing the code directly as you can see in my comments on top. This pseudo-code helped me a lot in determining which functions do I need and how to write them. I may not have gotten every thing write but I did like this way of doing things. I can work on this skill in my future projects.
  b. I wanted to practice the skill of refactoring which I learned about in my project project here as well, but I might not have succeeded entirely as some of my functions are still very large in size, so this is also something that we can continue to work on in future as well.
To see how you can add code snippets, see below:


### Continued development

Continue to work on my planning and refactoring skills.



### Useful resources

- [How to Generate a Random Password using JavaScript?](https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/) - This article gave a good grasp on the concept of creating a random password generator app.
- [Create a Custom Input Range Slider for Consistency Across Browsers](https://maame.hashnode.dev/custom-input-range-slider) - This article explained to me the concept behind creating custom range-sliders
- [MDN](https://developer.mozilla.org/fr/) - This is my number one helper whenever I am stuck or having trouble in remembering or understanding any concept.


## Author

- Website - [Taresta](https://github.com/Taresta)
- Frontend Mentor - [Paradox](https://www.frontendmentor.io/profile/Taresta)


## Acknowledgments

Once again, a big thanks to all the people who write these helpful articles.
