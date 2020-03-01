import React, { Component, Fragment } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchStyles';
import { withStyles } from '@material-ui/core/styles';
import { GlobalConsumer } from '../context/GlobalState';
import { withRouter } from 'react-router-dom';


export class Search extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <GlobalConsumer>
                    {(value) => (
                        <Fragment>

                            <form className='form-custom-class' onSubmit={(e) => {
                                e.preventDefault();
                                let search_string = e.target.search.value;
                                value.searchCountry(search_string);
                                this.props.history.push(`/search/${search_string}`);

                            }
                            }>
                                <div className="form-group">

                                <div className={` ${classes.search} card-div `}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search for a country…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        name='search'


                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
  </div>
                            </form>

                        </Fragment>

                    )
                    }
                </GlobalConsumer >
            </Fragment >


        );
    }
}

export default withRouter(withStyles(styles)(Search));
