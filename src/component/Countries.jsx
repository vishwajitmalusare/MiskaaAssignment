import React from 'react'
import { useState, useEffect } from 'react'

const url = "https://restcountries.eu/rest/v2/region/asia"

const Countries = () => {
    const [countries, setCountries] = useState([])


    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => {
        fetchCountryData()
    }, [])

    return (
        <div>
            <h1>Display Country Data</h1>
            
            {countries.map((country) => {
                
                const{ name, region, subregion, population, capital, borders, languages } = country

                return <article key={id}>Country Data</article>
            })}
        </div>
    )
}

export default Countries
