import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Country extends Component {

    convertSpacesToPlus = (text) => {
        const regex = / /g;
        return text.replace(regex, '-');
      };


    render() {
        const { name, population, region, capital, flag } = this.props.country;
        
        return (
            <Fragment>

                <div className="card-div">
                    <img src={flag} alt="country-flag" />
                    <Link to={{
                        pathname: `/country/${this.convertSpacesToPlus(name)}/`
                    }}><p className="country_name text-bold">{name}</p></Link>
                    <div className="country-info">
                        <p className="text-bold text-spacing">Population: <span className="text-normal">{population}</span></p>
                        <p className="text-bold text-spacing">Region: <span className="text-normal">{region}</span></p>
                        <p className="text-bold text-spacing">Capital: <span className="text-normal">{capital}</span></p>
                    </div>
                </div>
            </Fragment>
        );
    }
};


export default Country;