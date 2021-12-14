import React from 'react'

export default function Recipe(props) {

  const {
    name, 
    cookTime, 
    servings, 
    instrutions,
    ingredients
  } = props;
  return (
    <div>
      <h1> {name} </h1>
      <div> 
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div>
        <span>Cook</span>
        <span>{cookTime} </span>
      </div> 
      <div>
        <span>Servings</span>
        <span>{servings}  </span>
      </div> 
      <div>
        <span>Instrutions</span>
        <div>
          {instrutions}
        </div>
      </div> 
      <div>
        <span>Ingredients</span>
        <div>
          {ingredients}
        </div>
      </div> 
    </div>
  )
}
