import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { GetByCountryCode } from '../../apiRoutes';
import { IOneCountryInfo } from '../../types';
import NeighbourCountries from './NeighbourCountries/NeighbourCountries';

interface Props{
  selectedCountry:string
}
const CountryInfo:React.FC<Props> = ({selectedCountry}) => {
  const[currentCounty, setCurrentCountry] = useState<IOneCountryInfo>(
    {
      name: "",
      flag:"",
      population: 0,
      capital:"",
      borders:[]
    }
  )

    const fetchData = useCallback(async ()=>{
      const {data:countryInfo} = await axios.get<IOneCountryInfo>(GetByCountryCode + selectedCountry)
      setCurrentCountry(countryInfo)

    }, [selectedCountry])

    useEffect(() => {
      fetchData()
    }, [fetchData]);

  return selectedCountry && (
    <div className="col-8">
      <div className='currentCountry_Header d-flex p-3 justify-content-evenly'>
        <div className="">
          <h2><strong>Name:</strong> {currentCounty.name}</h2>
          <p><strong>Capital:</strong> {currentCounty.capital}</p>
          <p><strong>Population:</strong> {currentCounty.population}</p>
        </div>
        <img
          style={{width:"200px"}}
          src={currentCounty.flag} alt='' />
      </div>
      <hr/>
      <p><strong>{currentCounty.borders?"Border Countries": "No Borders for this country"}</strong></p>

      <NeighbourCountries
        borders={currentCounty.borders? currentCounty.borders:[]}
      />
    </div>
  );
}

export default CountryInfo;