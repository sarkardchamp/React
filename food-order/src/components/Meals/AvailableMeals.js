import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchMeals = () => {
    setIsLoading(true);
    setError(false);
    fetch("https://react-http-f7845-default-rtdb.firebaseio.com/meals.json")
      .then((response) => response.json())
      .then((data) => {
        let mealsArray = [];
        for (const meal in data) {
          mealsArray.push(data[meal]);
        }
        setMeals(mealsArray);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
        setIsLoading(false);
      });
  };
  useEffect(fetchMeals, []);
  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading...</p>}
        {error && <p>Couldn't load meals.</p>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
