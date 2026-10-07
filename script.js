// -----------------------------------
// DATUM
// -----------------------------------

const targetDate = new Date("2026-10-11T00:00:00");


// -----------------------------------
// HTML ELEMENTE
// -----------------------------------

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const openButton =
    document.getElementById("openButton");

const letterSection =
    document.getElementById("letterSection");

const hiddenSections =
    document.querySelectorAll(".hidden");


// -----------------------------------
// COUNTDOWN
// -----------------------------------

function updateCountdown() {

    const now =
        new Date();

    const distance =
        targetDate - now;


    // Wenn Countdown vorbei ist
    if (distance <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        openButton.disabled = false;

        openButton.textContent =
            "♡ Öffnen";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


// Countdown direkt ausführen
updateCountdown();


// jede Sekunde aktualisieren
setInterval(
    updateCountdown,
    1000
);


// -----------------------------------
// BUTTON
// -----------------------------------

openButton.addEventListener(
    "click",
    function () {

        // Alle versteckten Bereiche anzeigen
        hiddenSections.forEach(
            section => {

                section.classList.remove(
                    "hidden"
                );

            }
        );


        openButton.textContent =
            "♡ Für dich";


        openButton.disabled =
            true;


        // Kurz danach zum Brief scrollen
        setTimeout(
            () => {

                letterSection.scrollIntoView({
                    behavior: "smooth"
                });

                observeElements();

            },
            300
        );

    }
);


// -----------------------------------
// SCROLL ANIMATIONEN
// -----------------------------------

function observeElements() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


// -----------------------------------
// FLOATING HEARTS
// -----------------------------------

function createHeart() {

    const heartsContainer =
        document.getElementById(
            "hearts"
        );


    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "floating-heart"
    );


    heart.innerHTML =
        Math.random() > 0.5
            ? "♡"
            : "♥";


    // zufällige Position
    heart.style.left =
        Math.random() * 100
        + "vw";


    // zufällige Größe
    heart.style.fontSize =
        10 +
        Math.random() * 18
        + "px";


    // zufällige Dauer
    const duration =
        9 +
        Math.random() * 9;


    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(
        heart
    );


    // später entfernen
    setTimeout(
        () => {

            heart.remove();

        },
        duration * 1000
    );

}


// alle 700ms ein Herz
setInterval(
    createHeart,
    700
);









// const targetDate = new Date("2026-10-11T00:00:00");

// const daysElement = document.getElementById("days");
// const hoursElement = document.getElementById("hours");
// const minutesElement = document.getElementById("minutes");
// const secondsElement = document.getElementById("seconds");

// const openButton = document.getElementById("openButton");

// const letterSection = document.getElementById("letterSection");
// const hiddenSections = document.querySelectorAll(".hidden");


// // -----------------------------------
// // TESTMODUS
// // Button kann immer gedrückt werden
// // -----------------------------------

// openButton.disabled = false;
// openButton.textContent = "♡ Öffnen";


// // -----------------------------------
// // COUNTDOWN
// // -----------------------------------

// function updateCountdown() {

//     const now = new Date();
//     const distance = targetDate - now;

//     if (distance <= 0) {

//         daysElement.textContent = "00";
//         hoursElement.textContent = "00";
//         minutesElement.textContent = "00";
//         secondsElement.textContent = "00";

//         return;
//     }

//     const days = Math.floor(
//         distance / (1000 * 60 * 60 * 24)
//     );

//     const hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24))
//         / (1000 * 60 * 60)
//     );

//     const minutes = Math.floor(
//         (distance % (1000 * 60 * 60))
//         / (1000 * 60)
//     );

//     const seconds = Math.floor(
//         (distance % (1000 * 60))
//         / 1000
//     );

//     daysElement.textContent =
//         String(days).padStart(2, "0");

//     hoursElement.textContent =
//         String(hours).padStart(2, "0");

//     minutesElement.textContent =
//         String(minutes).padStart(2, "0");

//     secondsElement.textContent =
//         String(seconds).padStart(2, "0");
// }


// updateCountdown();

// setInterval(
//     updateCountdown,
//     1000
// );


// // -----------------------------------
// // BUTTON
// // -----------------------------------

// openButton.addEventListener("click", function () {

//     hiddenSections.forEach(section => {
//         section.classList.remove("hidden");
//     });

//     openButton.textContent = "♡ Für dich";
//     openButton.disabled = true;

//     setTimeout(() => {

//         letterSection.scrollIntoView({
//             behavior: "smooth"
//         });

//         observeElements();

//     }, 300);

// });


// // -----------------------------------
// // SCROLL ANIMATIONEN
// // -----------------------------------

// function observeElements() {

//     const elements =
//         document.querySelectorAll(".reveal");

//     const observer =
//         new IntersectionObserver(

//             entries => {

//                 entries.forEach(entry => {

//                     if (entry.isIntersecting) {

//                         entry.target.classList.add(
//                             "active"
//                         );

//                     }

//                 });

//             },

//             {
//                 threshold: 0.15
//             }

//         );

//     elements.forEach(element => {
//         observer.observe(element);
//     });
// }


// // -----------------------------------
// // FLOATING HEARTS
// // -----------------------------------

// function createHeart() {

//     const heartsContainer =
//         document.getElementById("hearts");

//     const heart =
//         document.createElement("div");

//     heart.classList.add(
//         "floating-heart"
//     );

//     heart.innerHTML =
//         Math.random() > 0.5
//             ? "♡"
//             : "♥";

//     heart.style.left =
//         Math.random() * 100 + "vw";

//     heart.style.fontSize =
//         10 + Math.random() * 18 + "px";

//     const duration =
//         9 + Math.random() * 9;

//     heart.style.animationDuration =
//         duration + "s";

//     heartsContainer.appendChild(
//         heart
//     );

//     setTimeout(() => {
//         heart.remove();
//     }, duration * 1000);
// }


// setInterval(createHeart, 700);