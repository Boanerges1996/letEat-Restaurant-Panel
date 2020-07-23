import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import img404 from '../img/Error.jpeg'
import '../error.css'


class ErrorPage extends Component {
    render() {
        return (
            <div className="container">
                <img src={img404} width='200px' height='200px' alt="404 image" className="center" />
                <h2 style={{ textAlign: 'center', color: '#e91e63' }}> Opps it seems your are on a wrong page</h2>
                <div className='container_btn'>
                    <div className="vertical_center">
                        <Link to='/' >
                            <Button variant='contained' style={{ color: "white", background: '#e91e63', marginRight: 'auto' }} >
                                go to home page
                          </Button>
                        </Link>
                    </div>

                </div>
            </div>


        );
    }
}

export default ErrorPage;