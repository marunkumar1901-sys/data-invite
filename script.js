/* =========================================
   DATE INVITATION JAVASCRIPT
========================================= */


let selectedFood = "";

let selectedDate = "";

let selectedTime = "";



/* =========================================
   PAGE CONTROL
========================================= */

function showPage(pageNumber) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const nextPage =
        document.getElementById(
            "page" + pageNumber
        );


    if (nextPage) {

        nextPage.classList.add("active");

    }

}



/* =========================================
   OPEN INVITATION
========================================= */

function openInvitation() {

    showPage(2);

}



/* =========================================
   YES BUTTON
========================================= */

function sayYes() {

    createConfetti();

    setTimeout(function() {

        showPage(3);

    }, 500);

}



/* =========================================
   NO BUTTON
========================================= */

function sayNo() {

    const button =
        document.getElementById("noButton");

    const message =
        document.getElementById("noMessage");


    message.innerHTML =
        "Nice try 😭 Please reconsider...";


    /*
       Move the NO button slightly
       whenever they click it.
    */

    const x =
        Math.random() * 100 - 50;

    const y =
        Math.random() * 60 - 30;


    button.style.transform =
        `translate(${x}px, ${y}px)`;

}



/* =========================================
   DATE + TIME
========================================= */

function saveDateTime() {

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    if (date === "") {

        alert(
            "Please choose a date first 📅"
        );

        return;

    }


    if (time === "") {

        alert(
            "Please choose a time first ⏰"
        );

        return;

    }


    selectedDate = formatDate(date);

    selectedTime = time;


    showPage(5);

}



/* =========================================
   FORMAT DATE
========================================= */

function formatDate(dateString) {

    const date =
        new Date(dateString);


    const options = {

        day: "numeric",

        month: "long",

        year: "numeric"

    };


    return date.toLocaleDateString(
        "en-IN",
        options
    );

}



/* =========================================
   FOOD SELECTION
========================================= */

function chooseFood(button, food) {

    const allFood =
        document.querySelectorAll(
            ".food-option"
        );


    allFood.forEach(function(item) {

        item.classList.remove(
            "selected"
        );

    });


    button.classList.add("selected");


    selectedFood = food;

}



/* =========================================
   CONFIRM FOOD
========================================= */

function confirmFood() {

    if (selectedFood === "") {

        alert(
            "Choose something to eat first 🍕"
        );

        return;

    }


    document.getElementById(
        "finalDate"
    ).textContent =
        selectedDate;


    document.getElementById(
        "finalTime"
    ).textContent =
        selectedTime;


    document.getElementById(
        "finalFood"
    ).textContent =
        selectedFood;


    createConfetti();


    setTimeout(function() {

        showPage(6);

    }, 400);

}



/* =========================================
   FINAL REVEAL
========================================= */

function finalReveal() {

    createConfetti();


    setTimeout(function() {

        showPage(8);

    }, 500);

}



/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const colors = [

        "#e88cab",
        "#f5b5c8",
        "#f8d57e",
        "#ffffff",
        "#d87899"

    ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.classList.add(
            "confetti"
        );


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.backgroundColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDuration =
            (2 + Math.random() * 2)
            + "s";


        piece.style.animationDelay =
            Math.random() * 0.5
            + "s";


        container.appendChild(piece);


        setTimeout(function() {

            piece.remove();

        }, 4000);

    }

}



/* =========================================
   SET MINIMUM DATE TO TODAY
========================================= */

window.addEventListener(
    "DOMContentLoaded",
    function() {

        const dateInput =
            document.getElementById(
                "date"
            );


        if (dateInput) {

            const today =
                new Date();


            const year =
                today.getFullYear();


            const month =
                String(
                    today.getMonth() + 1
                ).padStart(2, "0");


            const day =
                String(
                    today.getDate()
                ).padStart(2, "0");


            dateInput.min =
                `${year}-${month}-${day}`;

        }

    }
);