// 문제 1번 (배열과 객체 만들기)
const persons = [
    {
        이름: "철수", 
        나이: 19, 
        성별: "남"
    },
    {
        이름: "짱구",
        나이: 20, 
        성별: "남"
    },
    {
        이름: "유리", 
        나이: 21, 
        성별: "여"
    },
];

const personsContainer = document.querySelector(".person-container");
const names = document.querySelectorAll(".name");
const ages = document.querySelectorAll(".age");
const genders = document.querySelectorAll(".gender");

// 문제 2번 (데이터를 html에 보여주기)
persons.forEach(function (person) {
    let html템플릿 = `<div class="person">
                    <h3 class="name">${person.이름}</h3>
                    <h3 class="age">${person.나이}</h3>
                    <h3 class="gender">${person.성별}</h3>
                    </div>`;
    personsContainer.insertAdjacentHTML("beforeend", html템플릿);
});

// 문제 3번 (find)
const girl = persons.find((person) => {
    return person.성별 === "여";
});

console.log("문제 3번");
console.log(girl);

// 문제 4번 (filter)
const boys = persons.filter((person) => {
    return person.성별 === "남" ;
});

console.log("문제 4번");
console.log(boys);


// 문제 5번 (map)
const newPersons = persons.map((person) => {
    return {
        이름: person.이름,
        나이: person.나이 + 10,
        성별: person.성별
    }
});

console.log("문제 5번");
console.log(persons);
console.log(newPersons);

// 문제 6번 (sort / spread operator(...)) 
const persons2 = [...persons]

persons2.sort((a, b) => {
    return b.나이 - a.나이
});

console.log("문제 6번");
console.log(persons);
console.log(...persons);

// 문제 7번 (destructuring (구조 분해 할당))
const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
};

console.log("문제 7번");
console.log(user.주소);

const 주소 = user.주소;
console.log(주소);