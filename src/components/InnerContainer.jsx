import styles from './InnerComponents.module.css'
export default function InnerComponents({children}){
	return(
		<div className ={styles.InnerComponents}>
       {children}
		    </div>
	)
}