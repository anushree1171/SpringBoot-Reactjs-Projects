import React, { useEffect, useState } from 'react'
import './Categories.css'
import CategoryCard from '../reusable_components/CategoryCard'
import { getAllTaskCategories } from '../service/TaskService';
import { useNavigate } from 'react-router-dom';

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{

    getAllTaskCategories()
    .then((response)=>{
      setCategories(response.data);
    })
    .catch((err)=>{
      console.error(err);
    })

  }, []);

  function getCategoryCards(){
    let categoryCardsArr = [];
    for(let i=0; i<categories.length; i++){
      categoryCardsArr.push(
        <CategoryCard 
        key={i}
        categoryName = {categories[i]}
        className="category-card"
        />
      )
    }

    return categoryCardsArr;
  }


  return (
    <>
      <div className="category-container">
        {
          getCategoryCards()
        }
      </div>
    </>
  )
}
