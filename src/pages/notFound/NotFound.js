import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error from '../../img/Error.png'
import { isAuth } from '../../redux/selectors/authSelectors';
import NotFoundWrapper from './NotFoundStyle';

const NotFound = () => {
    const auth = useSelector(isAuth);
    return (
        <NotFoundWrapper>
            <p className='textError'>Oops! This page was not found. Here is the<span> </span>
                {!auth && (<Link to='/' className="linkError">link</Link>)}
                {auth && (<Link to='/diary' className="linkError">link</Link>)}
            </p>
            <img src={Error} alt="ошибка страница не найдена" className="imgError"></img>

        </NotFoundWrapper>
    )
}
export default NotFound
