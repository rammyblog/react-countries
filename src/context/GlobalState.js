import React, { Component } from 'react';
import axios from 'axios';




const GlobalContext = React.createContext();
GlobalContext.displayName = "Country Context";

class GlobalProvider extends Component {
    state = {
        countries: [],
        searchCountries: [],
        filteredCountries: [],
        country: [],
        borders : [],
        mode: localStorage.getItem('mode')

    };


    componentDidMount() {
        this.allCountries();
    }

    //     // Get All countries

    allCountries = async () => {
        let tempCountries = [];
        await axios.get('https://restcountries.eu/rest/v2/all').then(res => {

            res.data.forEach(country => {
                const singleCountry = { ...country };
                tempCountries = [...tempCountries, singleCountry];
            });
        }).catch(err => {
            console.log(err, err.message, err.response);
        });


        this.setState(() => {
            return { countries: tempCountries };
        });
    };

    getCountryWithCode =  (codeArray) => {

        let tempCountries =  this.state.countries.slice();
        let country = []

        codeArray.forEach(countryCode => {
            let borderCountry =  tempCountries.find(item => {
                return item.alpha3Code.toLowerCase() === countryCode.toLowerCase()
            })

            country.push(borderCountry.name)
        })
    


        this.setState(() => {
            return {borders: country}
        })
        
    }

    searchCountry = (name) => {
        let tempCountries = this.state.countries.slice();
        let countries = tempCountries.filter(country => {
            return country.name.toLowerCase().includes(name.toLowerCase());

        });
        this.setState(() => {
            return { searchCountries: countries };
        });
    };

    filterCountry = async (region) => {
        let tempCountries = this.state.countries.slice();
        let filteredCountry = []

        if (region === 'all' || ''){

            filteredCountry = tempCountries

        }else{
            filteredCountry = await tempCountries.filter(country => {
                return country.region.toLowerCase() === region.toLowerCase();
            });
            
        }


        this.setState(() => {
            return { filteredCountries: filteredCountry };
        });
    };

    convertPlusToSpace = (text) => {
        const regex = /-/g;
        return text.replace(regex, ' ');
      };


    countryDetail =  (country_name) => {
        let name = this.convertPlusToSpace(country_name)
        let tempCountries =  this.state.countries.slice();
        let country =  tempCountries.find(item => {
            return item.name.toLowerCase() === name.toLowerCase()
        })
        
            this.getCountryWithCode(country.borders)

        

        this.setState(() => {
            return { country: country };
        });
    }

    toggleMode = (mode) => {
        localStorage.setItem('mode', mode);
        this.setState(() => {
            return {mode : mode}
        })
    }

    render() {
        return (

            <GlobalContext.Provider value={{
                ...this.state,
                searchCountry: this.searchCountry,
                allCountries: this.allCountries,
                filterCountry: this.filterCountry,
                countryDetail: this.countryDetail,
                getCountryWithCode: this.getCountryWithCode,
                toggleMode: this.toggleMode
            }}>
                {this.props.children}
            </GlobalContext.Provider>

        );
    }
}

const GlobalConsumer = GlobalContext.Consumer;


export { GlobalProvider, GlobalConsumer, GlobalContext };