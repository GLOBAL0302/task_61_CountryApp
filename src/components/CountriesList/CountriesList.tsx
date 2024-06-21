import { ICountry } from '../../types';
import Country from './Country/Country';
import "./CountriesList.css"

interface Props{
  allCountries:ICountry[],
  selectCountry:(country:ICountry)=>void
}
const CountriesList:React.FC<Props> = ({allCountries, selectCountry}) => {
  return (
    <div className="allCountries border border-5 p-3">
      {allCountries
        .map(country => <
          Country
          key={country.alpha3Code}
          country={country}
          selectCountry={selectCountry}
        />)}
    </div>
  );
};

export default CountriesList;