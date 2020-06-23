import React, { useState } from "react";
import { Route } from "react-router-dom";

import SavedList from "../Movies/SavedList";
import MovieList from "../Movies/MovieList";
import Movie from "../Movies/Movie";

const App = () => {
  const [savedList, saveMovie] = useState([]);

  const addToSavedList = movie => {
    if (savedList.includes(movie)) {
      return;
    } else {
      saveMovie([...savedList, movie]);
    }
  };

  const Wrapper = () => (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
    </div>
  );

  return Wrapper;
};

export default App;
