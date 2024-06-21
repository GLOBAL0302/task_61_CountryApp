
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryInfo from './components/CountryInfo/CountryInfo';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { AllCountriesURL } from './apiRoutes';
import { ICountry } from './types';

const App = () => {
  const [allCountries, setAllCountries] = useState<ICountry[]>([

    ])

  const fetchData = useCallback(async ()=>{
    const {data:countriesList} = await axios.get<ICountry[]>(AllCountriesURL)
    setAllCountries(countriesList)
  },[])

  useEffect(() => {
    void fetchData()
  }, [fetchData]);

  return (
    <>
      <div className="col-12 d-flex border border-5 p-3 bg-secondary">
        <CountriesList
          allCountries={allCountries}/>
        <CountryInfo/>
      </div>
    </>
  )
};

export default App
