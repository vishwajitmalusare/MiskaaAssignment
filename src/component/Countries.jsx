import React from 'react'
import { useState, useEffect } from 'react'
import './Countries.css'
import { Grid } from '@material-ui/core'

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
        <Grid container className="wrapper" xs={12} >
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
                    <Grid item className="content" xs={12} >
                        
                        <img src={flag} alt={name}/>

                        <h3> Country Name: <span> {name} </span> </h3>
                        
                        <h4>Capital:  <span> {capital} </span> </h4>
                        
                        <h4> Region: <span> {region} </span> </h4>
                        
                        <h4> SubRegion: <span> {subregion} </span> </h4>
                        
                        <h4> Language: <span>
                            {languages.map((language) => {
                                return (
                                    <ul key= {language}>
                                        {language.name}
                                    </ul>
                                )
                            })}
                        </span>
                        </h4>
                        
                        <h4> Borders: 
                            <span>
                            {borders.map((border) => {
                                return (
                                    <ul key={border}>
                                        {border}
                                    </ul>
                                )
                            })}
                            </span>
                        </h4>
                        
                        <h4> Population: <span> {population} </span></h4>
                    
                    </Grid>
                </article>
            })}
            </Grid>
        </>
    )
}

export default Countries

// const FlexboxPage = () => (
//     <>
//       <div className="d-flex flex-column">
//         <div className="p-2 col-example text-left">Flex item 1</div>
//         <div className="p-2 col-example text-left">Flex item 2</div>
//         <div className="p-2 col-example text-left">Flex item 3</div>
//       </div>
//       <div className="d-flex flex-column-reverse">
//         <div className="p-2 col-example text-left">Flex item 1</div>
//         <div className="p-2 col-example text-left">Flex item 2</div>
//         <div className="p-2 col-example text-left">Flex item 3</div>
//       </div>
//     </>
//   );