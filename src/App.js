import React from 'react'
import RecipeList from './RecipeList'

export default function App() {
  return (
      <>
        <RecipeList recipes={sampleRecipes} />
      </>
    )
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain chicken",
    servings: 3,
    cookTime: "1:45",
    intructions: "1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds"
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs"
      }
      
    ]
  },
  {
    id: 2,
    name: "Plain pork",
    servings: 5,
    cookTime: "2:45",
    intructions: "1. Put salt on pork \n2. Put pork in oven \n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "1 pounds"
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs"
      }
      
    ]
  }
]