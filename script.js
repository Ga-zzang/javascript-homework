// 문제 2번
document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector(".title").innerHTML = "제목아니다."
});

// 문제 3번
function sum(num1, num2) {
    console.log(num1 + num2);
};

sum(1, 2);

// 문제 4번
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("짝수입니다")
    } else {
        console.log("홀수입니다")
    }
};

isEvenOrOdd(10);

// 문제 5번
const person = ["이름: 병수", "나이: 20"];
console.log(person[0]);
console.log(person[1]);