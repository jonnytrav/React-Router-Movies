import React, { useState } from "react";
import { Route } from "react-router-dom";

import SavedList from "../Movies";
import MovieList from "../Movies";
import Movie from "../Movies";

const App = () => {
  //   const [savedList, saveMovie] = useState([]);

  //   const addToSavedList = movie => {
  //     if (savedList.includes(movie)) {
  //       return;
  //     } else {
  //       saveMovie([...savedList, movie]);
  //     }
  //   };
  const wrapper = () => {
    return (
      <div>
        {/* <SavedList list={savedList} /> */}
        <Route exact path="/" component={MovieList} />
        {/* <Route
            path="/movies/:id"
            render={props => {
              return <Movie {...props} addToSavedList={addToSavedList} />;
            }}
          /> */}
      </div>
    );
  };

  return wrapper;
};

export default App;
