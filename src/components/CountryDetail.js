import React, { Component, Fragment } from "react";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {withContext} from '../context/withContext';


export class CountryDetail extends Component {



    state = {
        countryDetail: null
    };

    componentDidUpdate(prevProps){
        const { countryDetail } = this.props.value;
        if (this.state.countryDetail !== this.props.match.params.name) {
            countryDetail(this.props.match.params.name);
            this.setState({
                countryDetail: this.props.match.params.name
            });
        }
    }

  render() {

    const {country}= this.props.value
    console.log(country);
    

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
              <p>
                Border Countries:{" "}
                <span className="btn back-button mb-3">France</span>{" "}
                <span className="btn back-button mb-3">Germany</span>{" "}
                <span className="btn back-button mb-3">Netherlands</span>{" "}
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
                Currencies: <span className="text-normal"></span>
              </p>
              <p className="text-bold text-spacing">
                Laguages:{" "}
                <span className="text-normal">English, Yoruba, Igbo</span>
              </p>
            </div>
          </section>
        </div>
      </Fragment>
    )
  }
}

export default withContext(CountryDetail)
