import './AvailableMeals.scss';
import {DUMMY_MEALS} from "../../../constants/DummyMeals";
import {Card} from "../../ui/card/Card";
import {MealItem} from "../meal_item/MealItem";

export const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem price={meal.price} name={meal.name}
                                                        description={meal.description} id={meal.id}/>);
    return <section className={'meals'}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>

}