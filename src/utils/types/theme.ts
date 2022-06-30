export type Theme = {
	color: {
		primary: string,
		secondary: string
	},
	backgroundColor: string,
	borderColor: string,
	icons: {
		switchButton: string,
		gitLogo: string
	}
}

export const themeDark:Theme = {
	color: {
		primary: '#fff',
		secondary: '#eee'
	},
	backgroundColor: '#252525',
	borderColor: "#fff",
	icons: {
		switchButton: "./moonWhite.png",
		gitLogo: "./GitHubLight.png"
	}
}


export const themeWhite:Theme = {
	color: {
		primary: '#000',
		secondary: '#111'
	},
	backgroundColor: "#fff",
	borderColor: "#000",
	icons: {
		switchButton: "./moonBlack.png",
		gitLogo: "./GitHubDark.png"
	}
}