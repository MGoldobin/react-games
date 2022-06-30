export const GAMES_LIST = [
	{ name: "Tic-Tac-Toe", img: "./tictactoe.svg", to: "/xox", color: "#F85623" },
	//{ name: "2048", img: "./2048.svg", to: "/" },
	//{ name: "Minesweeper", img: "./soon.jpg", to: "/" },
	//{name:"Developing...", img:"./soon.jpg", to: "/"},
	{name:"Tetris", img:"./tetris.svg", to: "/tetris", color: "#F00"},
	//{ name: "Memo", img: "./pairs.svg", to: "/memo", color: "#64BF44" },
	{ name: "Rock, paper, scissors!", img: "./RPS.svg", to: "/rps", color: "#0672DE" },
	{ name: "Quiz", img: "./Quiz.svg", to: "/quiz", color: "#98128B" }
]

export const MEMO_LIST = [
	{ id: 1, name: "JS", url: "./JS.png", done: false },
	{ id: 2, name: "Python", url: "./Python.png", done: false },
	{ id: 3, name: "C#", url: "./CSharp.jpg", done: false },
	{ id: 4, name: "C++", url: "./СPP.jpg", done: false },
	{ id: 5, name: "React", url: "./React.png", done: false },
	{ id: 6, name: "PHP", url: "./PHP.png", done: false },
	{ id: 7, name: "CSS", url: "./CSS.jpg", done: false },
	{ id: 8, name: "HTML", url: "./HTML.png", done: false }
]

export const QUIZ_CATEGORY = [
	{ value: '9', name: "General Knowledge" },
	{ value: '10', name: "Entertainment: Books" },
	{ value: '11', name: "Entertainment: Film" },
	{ value: '12', name: "Entertainment: Music" },
	{ value: '13', name: "Entertainment: Musicals & Theatres" },
	{ value: '14', name: "Entertainment: Television" },
	{ value: '15', name: "Entertainment: Video Games" },
	{ value: '16', name: "Entertainment: Board Games" },
	{ value: '17', name: "Science & Nature" },
	{ value: '18', name: "Science: Computers" },
	{ value: '19', name: "Science: Mathematics" },
	{ value: '20', name: "Mythology" },
	{ value: '21', name: "Sports" },
	{ value: '22', name: "Geography" },
	{ value: '23', name: "History" },
	{ value: '24', name: "Politics" },
	{ value: '25', name: "Art" },
	{ value: '26', name: "Celebrities" },
	{ value: '27', name: "Animals" },
	{ value: '28', name: "Vehicles" },
	{ value: '29', name: "Entertainment: Comics" },
	{ value: '30', name: "Science: Gadgets" },
	{ value: '31', name: "Entertainment: Japanese Anime & Manga" },
	{ value: '32', name: "Entertainment: Cartoon & Animations" }
]

export const QUIZ_DIFFICULTY = [
	{ value: 'easy',  name: 'Easy' },
	{ value: 'medium',  name: 'Medium' },
	{ value: 'hard',  name: 'Hard' } 
]

export const QUIZ_MAIN_URL = 'https://opentdb.com/api.php'
