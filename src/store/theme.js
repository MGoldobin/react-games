import { action, makeObservable, observable } from "mobx"
import themeDark from '../vendor/themeDark'
import themeWhite from '../vendor/themeWhite'

class Store {
	isDarkTheme = !localStorage.getItem('isDarkTheme') ? false : (localStorage.getItem('isDarkTheme') === "true" ? true : false)
	theme = !localStorage.getItem('isDarkTheme') ? themeWhite : (localStorage.getItem('isDarkTheme') === "true" ? themeDark : themeWhite)

	constructor() {
		makeObservable(this, {
			isDarkTheme: observable,
			theme: observable,
			changeTheme: action
		})
		this.changeTheme = this.changeTheme.bind(this)
	}

	changeTheme() {
		this.isDarkTheme = !this.isDarkTheme
		this.theme = this.isDarkTheme ? themeDark : themeWhite
		localStorage.setItem('isDarkTheme', this.isDarkTheme)
	}
}

const store = new Store()

export default store