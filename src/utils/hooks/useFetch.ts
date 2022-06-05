import { useState, useEffect } from "react"

interface UseFetchProps {
	url: string,
}

export const useFetch = ({ url }: UseFetchProps) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
			(
				async function(){
					try{
						setIsLoading(true)
						const response = await fetch(url).then(res => res.json())
						setData(response.data)
					} catch(err){
						setError((err as Error).message)
					} finally{
						setIsLoading(false)
					}
				}
		)()
	}, [])

	return [ data, error, isLoading]
}