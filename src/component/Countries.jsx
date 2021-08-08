import React from 'react'
import { useState, useEffect } from 'react'
import './Countries.css'

const url = "https://restcountries.eu/rest/v2/region/asia"

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
            //console.log(countries)
        }

        fetchCountryData()
    }, [])
    
    

    return (
        <>            
        <section classsName="grid">
            {countries.map((country) => {
                
                const { numericCode,
                      name,
                     flag,
                     region,
                     subregion,
                     population,
                     capital,
                     borders,
                     languages, 
                } = country

                return <article key={numericCode}>
                    <div classsName="grid-item">
                        <img src={flag} alt={name}/>
                        <h3> Country Name: <span> {name} </span> </h3>
                        <h4>Capital:  <span> {capital} </span> </h4>
                        <h4> Region: <span> {region} </span> </h4>
                        <h4> SubRegion: <span> {subregion} </span> </h4>
                        <h4> Language: <span> {languages[0].name} </span>
                        </h4>
                        <h4> Borders: 
                            {borders.map((border) => {
                                return (
                                    <ul key={border}>
                                        {border}
                                    </ul>
                                )
                            })}
                        </h4>
                        <h4> Population: <span> {population} </span></h4>
                    </div>
                </article>
            })}
            </section>
        </>
    )
}

export default Countries
