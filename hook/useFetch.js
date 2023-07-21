import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			'X-RapidAPI-Key': '59fd558017mshb0f2a8084574345p1a46ffjsn8ee143532812',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
		params: { ...query },
	}

	const fetchData = async () => {
		setIsLoading(true)

		try {
			const response = await axios.request(options)
			setData(response.data.data)
			setIsLoading(false)
		} catch (error) {
			setError(error)
			alert('something went wrong')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const refetch = () => {
		setIsLoading(true)
		fetchData()
	}

	return { data, isLoading, error, refetch }
}

export default useFetch
