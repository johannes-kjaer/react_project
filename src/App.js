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
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    image
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {

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
          />
      ))}
    </MyApp>
  );
}

export default App;

const MyApp = styled.div`
`;
const SearchForm = styled.form`
`;
const SearchBar = styled.input`
`;
const SearchButton = styled.button`
`;
const H1 = styled.h1`
`;