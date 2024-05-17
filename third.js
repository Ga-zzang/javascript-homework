// 문제(7번)
//setInterval

const timer = document.querySelector("#counter");

let count = Number(timer.textContent);

const intervalId = setInterval(() => {
    if (count < 5) {
        count = count + 1;
        timer.textContent = count;
    } else {
        console.log("종료");
        clearInterval(intervalId);
    }
}, 1000);

