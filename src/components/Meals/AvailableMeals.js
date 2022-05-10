import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Tandoori",
    description: "Chicken deeply marinated for 48 hours and smoke-roasted in Tandoor.",
    price: 1500,
  },
  {
    id: "m2",
    name: "Chicken Tikka",
    description: "Tender chicken breast pieces, highly flavoured medium-hot sauce, cooked in Tandoor.",
    price: 800,
  },
  {
    id: "m3",
    name: "Broccoli Masala ",
    description: "Broccoli, mushroom and capsicum, spiced and finished in a special onion sauce (Vegan)",
    price: 700,
  },
  {
    id: "m4",
    name: "Malai Kofta",
    description: "Delicious dumplings of cashew coconut sultanas and potatoes finished in a delicate cream sauce",
    price: 500,
  },
];

const AvailableMeals = () => {
  const mealItems = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
