import React, { useState } from 'react'
import styles from './Category.module.css';

const Category = ({postList, activeIndex, filterListByCategory}) => {
    let categorys = new Set();
    categorys.add("all");
    const [activeCategory, setActiveCategory] = useState(null);
    postList.map((post) => categorys.add(post.category));
    let uniqueCategory = [...categorys];

    function onClickHandler(category) {
        setActiveCategory(category);
        filterListByCategory(category);
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul className={styles.category_list}>
                    {uniqueCategory.map(category =>
                        <li className={`${styles.category} 
                        ${(activeCategory === category ? styles.active : null)}`} 
                        onClick={() => onClickHandler(category)}>
                            {category}
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    )
}

export default Category