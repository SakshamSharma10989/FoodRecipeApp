import styles from './foodItem.module.css'
export default function FoodItem({ food,setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.imageContainer}src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.btnContainer}>
 <button  onClick={()=>{
            console.log(food.id)
            setFoodId(food.id)
                   }}
 className={styles.itemBtn}>View Recipe
      </button>
      </div>
    </div>
  );
}
