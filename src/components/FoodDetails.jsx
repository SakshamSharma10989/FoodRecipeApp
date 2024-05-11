import ItemList from "./ItemList";
import styles from "./fooddetails.module.css";
import { useEffect,useState } from "react";
export default function FoodDetails({foodId}){
    const [food,setFood]=useState({});
    const[isLoading,setIsLoading]=useState(true);
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "052ff34d367048ad8e5e48ed036e9086";

    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data =await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood()
    },[foodId])
    return(
        <div >
           <div className={styles.recipeCard}>  
           <h1 className={styles.recipeName}>{food.title}</h1>
            <img  className={styles.recipeImage} src={food.image} alt =""/>
           <div className={styles.recipeDetails}>
            <span>
                <strong>
                   {food.readyInMinutes} Minutes  
                </strong>
            </span>
            <span>
            <strong>
                 Serves {food.servings}
                 </strong>
            </span>
            <span>
            <strong>
                {food.vegetarian?" Vegetarian":" Non-vegetarian"}
                </strong>
            </span>
           </div>
           <div>
            <span>
            <strong> $ {food.pricePerServing / 100}Per Serving  </strong></span>
           </div>
           <h2>Ingredients</h2>
           <ItemList food={food} isLoading={isLoading}/>
        <h2> Instructions</h2>
        <div className={styles.recipeInstruction}>
            <ol>
         {
            isLoading?(<p>Loading...</p>): (
           food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))
        )}
          </ol>
        </div>
        </div>
        </div>
        
    )
}