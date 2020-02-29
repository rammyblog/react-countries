import React, { Component, Fragment } from "react";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {withContext} from '../context/withContext';


export class CountryDetail extends Component {



    state = {
      country_name: null,
      border_countries : []
    };

    componentDidMount(){
      const { countryDetail, getCountryWithCode, country} = this.props.value;

      if(country.length !== 0){
        country.border.forEach(code => {
          console.log(getCountryWithCode(code));
          
          
          this.setState({
            border_countries : getCountryWithCode(code)

          })
        
        })
      }

    }
    componentDidUpdate(prevProps){
        const { countryDetail, getCountryWithCode, country} = this.props.value;




        if (this.state.country_name !== this.props.match.params.name) {
            countryDetail(this.props.match.params.name);

            if(country.name !== undefined){
              country.border.forEach(code => {

                console.log(code);
                
                
                this.setState({
                  border_countries : getCountryWithCode(code)

                })
              
              })
            }
            
            this.setState({
                country_name: this.props.match.params.name
            });



        }
    }

  render() {

    const {country, borders}= this.props.value
    console.log(country.name);
    

    return (
      <Fragment>

        <div className="container">
          <button className="btn back-button mb-4"> <KeyboardBackspaceIcon/> Back</button>

          <section className="card-details">
            <div className="card-details-img-div">
              <img
                src={country.flag}
                alt=""
              />
            </div>

            <div className="country-info-details">
              <p className="country_name text-bold">{country.name}</p>
              <p className="text-bold text-spacing">
                Population: <span className="text-normal">{country.population}</span>
              </p>
              <p className="text-bold text-spacing">
                Region: <span className="text-normal">{country.region}</span>
              </p>
              <p className="text-bold text-spacing">
                Sub Region: <span className="text-normal">{country.subregion}</span>
              </p>
              <p className="text-bold text-spacing">
                Capital: <span className="text-normal">{country.capital}</span>
              </p>
              <p className='text-bold'>
                Border Countries:{" "}
                {
                  borders.map(border => <span className="btn back-button mb-3 mr-1">{border}</span> )
                }
              </p>
            </div>

            <div className="country-info-details">
              <p className="text-bold text-spacing">
                Top Level Domain: <span className="text-normal">
                     {
                         country.topLevelDomain ? country.topLevelDomain[0]  : null
                     }
          
                    </span>
              </p>
              <p className="text-bold text-spacing">
                    Currencies: <span className="text-normal">{
                              country.currencies ?  country.currencies[0].name : null
                            
                            }</span>
              </p>
              <p className="text-bold text-spacing">
                Laguages:{" "}
                <span className="text-normal">{
                              country.languages ?  country.languages[0].name : null
                            
                            }</span>
              </p>
            </div>
          </section>
        </div>

      </Fragment>
    )
  }
}

export default withContext(CountryDetail)
