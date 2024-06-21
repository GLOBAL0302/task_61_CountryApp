export interface ICountry{
  alpha3Code: string,
  independent:boolean,
  name:string
}

export interface IOneCountryInfo{
  name: string,
  flag:string,
  population: number,
  capital:string,
  borders:string[]
}