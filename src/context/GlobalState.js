import React, { Component } from 'react';
import axios from 'axios';




const GlobalContext = React.createContext();
GlobalContext.displayName = "Country Context";

class GlobalProvider extends Component {
    state = {
        countries: [],
        searchCountries: [],
        filteredCountries: [],
        country: []

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
            console.log(err, err.data, err.response);
        });


        this.setState(() => {
            return { countries: tempCountries };
        });
    };

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

    countryDetail = async (name) => {

        
        let tempCountries = await this.state.countries.slice();
        console.log(tempCountries);
        

        let country = await tempCountries.find(item => {
            console.log(item.name);
            
            return item.name.toLowerCase() === name.toLowerCase()
        })

        

        this.setState(() => {
            return { country: country };
        });
    }

    render() {
        return (

            <GlobalContext.Provider value={{
                ...this.state,
                searchCountry: this.searchCountry,
                allCountries: this.allCountries,
                filterCountry: this.filterCountry,
                countryDetail: this.countryDetail
            }}>
                {this.props.children}
            </GlobalContext.Provider>

        );
    }
}

const GlobalConsumer = GlobalContext.Consumer;


export { GlobalProvider, GlobalConsumer, GlobalContext };