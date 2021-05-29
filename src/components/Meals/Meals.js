import { Fragment } from 'react';
import MealSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals'
const Meal = (props) =>{
    return (
        <Fragment>
            <MealSummary />
            <AvailableMeals/>
        </Fragment>
    )
}

export default Meal;