import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CategoryCard({categoryName}) {
  const navigator = useNavigate();

  function handleOnClick(e){
    navigator(`/tasks/${e.target.textContent}`);
  }

  return (
    <>
      <div className="category-card" >
        <h2 onClick={handleOnClick}
        >{categoryName}</h2>
      </div>
    </>
  )
}
