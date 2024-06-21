import { ICountry } from '../../../types';

interface Props {
  country: ICountry;
  selectCountry: (country: ICountry) => void;
}

const Country: React.FC<Props> = ({ country, selectCountry }) => {
  return (
    <div>
      <p
        className="
      bg-dark-subtle p-2 rounded-pill
      text-decoration-underline fs-5"
        onClick={() => selectCountry(country)}
      >
        {country.name}
      </p>
    </div>
  );
};

export default Country;
