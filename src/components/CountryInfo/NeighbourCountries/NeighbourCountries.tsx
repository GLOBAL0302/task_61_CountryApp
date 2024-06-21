import { useCallback, useState, useEffect } from 'react';
import { IOneCountryInfo } from '../../../types';
import axios from 'axios';
import { GetByCountryCode } from '../../../apiRoutes';
import './NeighbourCountries.css';

interface Props {
  borders: string[] | [];
}
const NeighbourCountries: React.FC<Props> = ({ borders }) => {
  const [neighbourCountries, setNeighbourCountries] = useState<
    IOneCountryInfo[]
  >([]);
  const fetchData = useCallback(async () => {
    const promises = borders.map(async (countryCode: string) => {
      const oneCountryUrl = GetByCountryCode + countryCode;
      const { data: country } = await axios.get<IOneCountryInfo>(oneCountryUrl);
      return {
        name: country.name,
        flag: country.flag,
        population: country.population,
        capital: country.capital,
        borders: country.borders,
      };
    });

    const BordersInfo = await Promise.all(promises);
    setNeighbourCountries(BordersInfo);
  }, [borders]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div
      className="NeighbourCountries
      rounded d-flex flex-wrap p-3
      justify-content-evenly gap-5"
    >
      {neighbourCountries.map((country) => (
        <div
          key={country.name}
          className="card"
          style={{ width: '200px', height: '250px' }}
        >
          <img
            style={{ width: '130px', height: '100px' }}
            src={country.flag}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{country.name}</h5>
            <p className="card-text">
              <strong>Capital:</strong>
              {country.capital}
            </p>
            <p>
              <strong>Population</strong>
              <br />
              {country.population}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NeighbourCountries;
