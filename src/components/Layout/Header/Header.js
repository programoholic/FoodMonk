import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealImage from '../../../Assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1> FoodMonk </h1>
                <HeaderCartButton onClick={ props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
               <img src={mealImage} alt="a table full of meals" />
            </div>
        </Fragment>
    )
}

export default Header;