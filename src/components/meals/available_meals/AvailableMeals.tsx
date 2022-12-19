import './AvailableMeals.scss';
import {DUMMY_MEALS} from "../../constants/DummyMeals";

export const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
    return <section className={'meals'}>
        {mealsList}
    </section>
  
}