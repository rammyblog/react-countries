import React, { Component } from 'react';
import Filter from './Filter';
import Search from './Search';


export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className="header-title">
                        <p className="header-text text-bolder">Where in the world!</p>
                    </div>

                    <div>
                        <i className="fas fa-moon-o"></i>
                        <p className="header-text text-bold">Dark mode</p>
                    </div>
                </nav>
                <div className='flex-container'>

                    <Search />
                    <Filter />
                </div>
            </>
        );
    }
}
