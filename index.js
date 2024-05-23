// 문제 8번 (로컬스토리지)

const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
}
localStorage.setItem ("user", JSON.stringify({
	이름: "병수",
	나이: 20,
	주소: "시골",
}));
console.log(user);


const newuser = {
	이름: "병수",
	나이: 30,
	주소: "시골",
}
localStorage.setItem ("newuser", JSON.stringify({
	이름: "병수",
	나이: 30,
	주소: "시골",
}));
console.log(newuser);

// 삭제...?
localStorage.removeItem("user");
console.log(user);

// 문제 1번 (API문서 가져오기)
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'GET'
})
	.then((response) => response.json())
	.then((data) => console.log(data));

