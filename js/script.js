// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debounceOutput = document.querySelector('.output.debounced');

// const eventCounter = {
//     vanilla: 0, 
//     throttled: 0,
//     debounced: 0,
// };

// document.addEventListener("scroll", () => {
//     eventCounter.vanilla += 1;
//     vanillaOutput.textContent = eventCounter.vanilla;
// })

// document.addEventListener("scroll", _.throttle(() => {
//     eventCounter.throttled += 1;
//     console.log("event occoured");
//     throttledOutput.textContent = eventCounter.throttled;
// }, 300));

// document.addEventListener("scroll", _.debounce(() => {
//     eventCounter.debounced += 1;
//     debounceOutput.textContent = eventCounter.debounced;
// }, 300, {
//     leading: true,
//     trailing: false,
// }));





//In Class Exercises
//set throttle for scrolling up and down window
// const outputStandard = document.querySelector("#outputScrollStandart");
// const outputThrottled = document.querySelector("#outputScrollThrottling")

// const eventScrollCounter = {
//     standard: 0,
//     throttled: 0,
// };

// document.addEventListener("scroll", () => {
//     eventScrollCounter.standard += 1;
//     outputStandard.textContent = eventScrollCounter.standard;
// });

// document.addEventListener('scroll', _.throttle(() => {
//     eventScrollCounter.throttled += 1;
//     outputThrottled.textContent = eventScrollCounter.throttled;
// }, 1500));



//!================================
//Set throttel for screen window resize

// const outputResizeStandard = document.querySelector("#outputResizeStandart");
// const outputResizeThrottled = document.querySelector("#outputResizeThrottling");

// const eventResizeCounter = {
//     standard: 0,
//     throttled: 0,
// };

// window.addEventListener("resize", () => {
//     eventResizeCounter.standard += 1;
//     outputResizeStandard.textContent = eventResizeCounter.standard;
// });

// window.addEventListener("resize", _.throttle(() => {
//     eventResizeCounter.throttled += 1;
//     outputResizeThrottled.textContent = eventResizeCounter.throttled;
// }, 1500))




//!================================
//throttle and debounce
// const nameInput = document.getElementById("nameInput");

// nameInput.addEventListener(
//     "input",
//     _.debounce(handleInputDebounce, 1000)
// );

// function handleInputDebounce({ target }) {
//     console.log(target.value);
// }


//!================================
const CORRECT_INPUT_LENGTH ={
    min: 3,
    max: 15,
};

const CLASS_NAMES = {
    wrong: "wrong",
    correct: "correct",
};

const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("input", _.debounce(({target}) => {
    if(target.value.length < CORRECT_INPUT_LENGTH.min || 
        target.value.length > CORRECT_INPUT_LENGTH.max){
            target.classList.add(CLASS_NAMES.wrong);
            target.classList.remove(CLASS_NAMES.correct);
        } else{
            target.classList.add(CLASS_NAMES.correct);
            target.classList.remove(CLASS_NAMES.wrong);
        }
}))