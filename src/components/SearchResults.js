import React, { Component, Fragment } from "react";
import Country from "./Country";
import { withContext } from "../context/withContext";

export class SearchResults extends Component {
    state = {
        search_params: null
    };

    componentDidUpdate(prevProps) {
        const { searchCountry } = this.props.value;
        if (this.state.search_params !== this.props.match.params.search_string) {
            searchCountry(this.props.match.params.search_string);
            this.setState({
                search_params: this.props.match.params.search_string
            });
        }
    }

    render() {
        const { searchCountries } = this.props.value;
        return (
            <Fragment>
                <h3 className='text-center'>Showing results for <em>{this.props.match.params.search_string}</em></h3>
                <section className="search-card">

                    {searchCountries.map((country, _index) => {
                        return <Country key={_index} country={country} />;
                    })}
                </section>
            </Fragment>
        );
    }
}

export default withContext(SearchResults);
