import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import React, { useEffect, useState} from "react";
import Recipe from './Recipe';
  

function App() {

    //Authentication
  const APP_ID = "";
  const APP_KEY = "";

  const [recipe, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <MyApp>
      <SearchForm onSubmit={getSearch}>
        <SearchBar type="text" value={search} onChange={updateSearch}/>
        <SearchButton>
          Search
        </SearchButton>
      </SearchForm>
      {recipe.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      ))}
    </MyApp>
  );
}

export default App;

const MyApp = styled.div`
  background-image: linear-gradient(90deg, #fccb90 0%, #d57eeb 100%);)
`;
const SearchForm = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBar = styled.input`
  width: 50%;
  border: none;
  padding: 10px;
`;
const SearchButton = styled.button`
  border: none;
  padding: 10px;
`;
const H1 = styled.h1`
`;
const Ol = styled.ol`
`;
