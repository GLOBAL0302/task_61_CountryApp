import { ICountry } from '../../../types';

interface Props{
  country:ICountry
}

const Country:React.FC<Props> = ({country}) => {
  return (
    <div>
      <p className="
      bg-dark-subtle p-2 rounded-pill
      text-decoration-underline fs-5">{country.name}</p>
    </div>
  );
};

export default Country;