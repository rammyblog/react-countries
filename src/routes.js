import React from 'react';
import { Route, Switch } from "react-router-dom";
import SearchResults from './components/SearchResults';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';



const BaseRouter = () => (

    <Switch>
        <Route exact path='/search/:search_string' component={SearchResults} />
        <Route exact path='/country/:name' component={CountryDetail} />
        <Route exact path='/' component={Countries} />
    </Switch>
)

export default BaseRouter