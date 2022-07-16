export const GAMES_LIST = [
	{ name: "Tic-Tac-Toe", img: "./tictactoe.svg", to: "/xox", color: "#F85623" },
	//{ name: "2048", img: "./2048.svg", to: "/" },
	//{ name: "Minesweeper", img: "./soon.jpg", to: "/" },
	//{name:"Tetris", img:"./tetris.svg", to: "/tetris", color: "#F00"},
	{ name: "Rock, paper, scissors!", img: "./RPS.svg", to: "/rps", color: "#0672DE" },
	{ name: "Memo", img: "./Memo.svg", to: "/memo", color: "#64BF44" },
	{ name: "Quiz", img: "./Quiz.svg", to: "/quiz", color: "#98128B" }
]

export const MEMO_LIST = [
	{ name: "JS", url: "./JS.png", done: false },
	{ name: "Python", url: "./Python.png", done: false },
	{ name: "C#", url: "./CSharp.jpg", done: false },
	{ name: "C++", url: "./СPP.jpg", done: false },
	{ name: "React", url: "./React.png", done: false },
	{ name: "PHP", url: "./PHP.png", done: false },
	{ name: "CSS", url: "./CSS.jpg", done: false },
	{ name: "HTML", url: "./HTML.png", done: false }
]

export const QUIZ_CATEGORY = [
	{ value: '9', label: "General Knowledge" },
	{ value: '10', label: "Entertainment: Books" },
	{ value: '11', label: "Entertainment: Film" },
	{ value: '12', label: "Entertainment: Music" },
	{ value: '14', label: "Entertainment: Television" },
	{ value: '15', label: "Entertainment: Video Games" },
	{ value: '16', label: "Entertainment: Board Games" },
	{ value: '17', label: "Science & Nature" },
	{ value: '18', label: "Science: Computers" },
	{ value: '20', label: "Mythology" },
	{ value: '21', label: "Sports" },
	{ value: '22', label: "Geography" },
	{ value: '28', label: "Vehicles" },
	{ value: '30', label: "Science: Gadgets" }
]

export const QUIZ_DIFFICULTY = [
	{ value: 'easy', label: 'Easy' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'hard', label: 'Hard' } 
]

export const QUIZ_MAIN_URL = 'https://opentdb.com/api.php'
