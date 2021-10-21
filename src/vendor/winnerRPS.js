function whoWinner(player, computer) {
	if ((player === "Rock" && computer === "Rock")
		|| (player === "Paper" && computer === "Paper")
		|| (player === "Scissors" && computer === "Scissors")) return "Ничья..."

	if ((player === "Rock" && computer === "Scissors")
		|| (player === "Scissors" && computer === "Paper")
		|| (player === "Paper" && computer === "Rock")) return "Победил игрок!!!"

	if ((player === "Scissors" && computer === "Rock")
		|| (player === "Paper" && computer === "Scissors")
		|| (player === "Rock" && computer === "Paper")) return "Победил компьютер!!!"
}

export default whoWinner;