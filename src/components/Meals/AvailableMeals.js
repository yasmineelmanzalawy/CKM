import React, { useState, useEffect } from 'react';
import MealItem from './MealItem/MealItem';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import useHttp from '../../hooks/use-http';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];
const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const { isLoading, isError, getHttpData: getMeals } = useHttp();

  useEffect(() => {
    function transformMeal(data) {
      setMeals(
        Object.keys(data).map((key) => ({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        }))
      );
    }
    getMeals(
      'https://foodorderapp-51f46-default-rtdb.firebaseio.com/meals.json',
      transformMeal
    );
  }, []);

  // useEffect(()=>{
  //   const fetchMeals = async () => {
  //     const response = await fetch('https://foodorderapp-51f46-default-rtdb.firebaseio.com/meals.json')
  //       if(!response.ok){
  //         throw new Error("Something wrong")
  //       }
  //       const data = await response.json();
  //       setMeals(Object.values(data));
  //   };

  // try{
  //   fetchMeals()
  // }catch(err){

  // }
  // },[])

  const mealsList = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  let content = 'No Meals Available!';
  if (isLoading) {
    content = <p>Loading!!</p>;
  } else if (isError) {
    content = <p> Something Went Wrong!!</p>;
  } else {
    content = mealsList;
  }
  return (
    <section className={styles.meals}>
      <ul>
        <Card>{content}</Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
