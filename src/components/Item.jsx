import styles from "./item.module.css";
export default function Item({items}){
    return(<div>
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image}src={`https://spoonacular.com/cdn/ingredients_100x100/`+items.image} alt="" />
                </div>
            <div className={styles.nameContainer}>
            <div className={styles.itemName}>{items.name}</div>
            
            <div className={styles.amountContainer}>
            <div>{items.amount} {items.unit}</div>
            </div>
           </div>
           </div>
    </div>)
}