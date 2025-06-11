import React, { useEffect, useState } from 'react';
import { Skeleton, Card } from 'antd';
import './RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes);
        setLoading(false);
      });
  }, []);

  return (
    <div className="recipe-list">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="recipe-card">
            <Skeleton.Image style={{ width: '100%', height: 200, borderRadius: '8px' }} active />
            <Skeleton active paragraph={{ rows: 2 }} />
          </Card>
        ))
      ) : (
        recipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h2>{recipe.name}</h2>
            <p>{recipe.mealType?.join(', ')}</p>
            <a href="#">View Details</a>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
