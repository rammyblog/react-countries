import React, { Component } from 'react';
import Filter from './Filter';
import Search from './Search';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';


import { withContext } from '../context/withContext';
class Navbar extends Component {
    render() {
        const { toggleMode, mode } = this.props.value;

        return (
            <>
                <nav>
                    <div className="header-title">
                        <p className="header-text text-bolder">Where in the world!</p>
                    </div>

                    <div>
                        <i className="fas fa-moon-o"></i>
                        <p className="header-text text-bold" onClick={() => toggleMode(!mode)}> {mode ? <WbSunnyIcon /> : <NightsStayIcon />} {mode ? ' Light Mode' : ' Dark Mode'} </p>
                    </div>
                </nav>
                <section className='grid-container ml-5'>

                    <Search />
                    <Filter />
                </section>
            </>
        );
    }
}

export default withContext(Navbar);


