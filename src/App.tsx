
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

  const [selectedCountry, setSelectedCountry] = useState<string|null>(null)

  const fetchData = useCallback(async ()=>{
    const {data:countriesList} = await axios.get<ICountry[]>(AllCountriesURL)
    setAllCountries(countriesList)
  },[])

  useEffect(() => {
    void fetchData()
  }, [fetchData]);

  const selectCountry = (country:ICountry)=>{
    setSelectedCountry(country.alpha3Code)
  }

  return (
    <>
      <div className="col-12 d-flex border border-5 p-3 bg-secondary">
        <CountriesList
          allCountries={allCountries}
          selectCountry={selectCountry}
        />
        {selectedCountry?<CountryInfo
          selectedCountry={selectedCountry}
        />: <h4 className="ms-auto me-auto">Please Choose Country</h4>}
      </div>
    </>
  )
};

export default App
