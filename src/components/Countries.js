import React, { Component, Fragment } from 'react';
import { GlobalConsumer } from '../context/GlobalState';
import Country from './Country';


class Countries extends Component {

    state = {
        randNumber: null
    };

    componentDidMount() {
        let randNumber = this.randomNumberGenerator();
        this.setState({
            randNumber: randNumber
        });
    }

    randomNumberGenerator = () => {
        return Math.floor((Math.random() * 100) + 1);
    };

    
    render() {

        const randNumber = this.state.randNumber;

        return (
            <Fragment>

               
                <section className='card'>
                    <GlobalConsumer>
                        {value => {
                            {
                                return value.filteredCountries && value.filteredCountries.length > 0 ? 
                                
                                    value.filteredCountries.map(
                                       (country, _index) => {
                                           return <Country key={_index} country={country} />;
                                       }
                                   )                    
                                :
                                    value.countries.slice(randNumber, randNumber + 8).map(
                                        (country, _index) => {
                                            return <Country key={_index} country={country} />;
                                        }
                                    );
                            }
                        }

                        }
                    </GlobalConsumer>

                </section>

            </Fragment >
        );
    }
}


export default Countries;