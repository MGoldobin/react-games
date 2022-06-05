import { action, makeObservable, observable } from "mobx"
import { Theme, themeDark, themeWhite }  from '../utils/types/theme'

class Store {
	isDarkTheme:boolean = !localStorage.getItem('isDarkTheme') ? false : (localStorage.getItem('isDarkTheme') === "true" ? true : false)
	theme:Theme = !localStorage.getItem('isDarkTheme') ? themeWhite : (localStorage.getItem('isDarkTheme') === "true" ? themeDark : themeWhite)
	gameColor:string = ""

	constructor() {
		makeObservable(this, {
			isDarkTheme: observable,
			theme: observable,
			gameColor: observable,
			changeTheme: action,
			changeGameColor: action
		})
		this.changeTheme = this.changeTheme.bind(this)
		this.changeGameColor = this.changeGameColor.bind(this)
	}

	changeGameColor(newGameColor:string): void {
		this.gameColor = newGameColor
	}

	changeTheme(): void {
		this.isDarkTheme = !this.isDarkTheme
		this.theme = this.isDarkTheme ? themeDark : themeWhite
		localStorage.setItem('isDarkTheme', this.isDarkTheme.toString())
	}
}

const store = new Store()

export default store