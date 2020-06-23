import React from "react";
import { Link } from "react-router-dom";

// export default class SavedList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="saved-list-box">
//         <div className="saved-list-titles">
//           <h3>Saved Movies:</h3>
//           {this.props.list.map(movie => (
//             <Link to={`/movies/${movie.id}`} className="saved-movie">
//               {movie.title}
//             </Link>
//           ))}
//         </div>
//         <Link to="/" className="home-button">
//           Home
//         </Link>
//       </div>
//     );
//   }
// }

function SavedList(props) {
  return (
    <div className="saved-list-box">
      <div className="saved-list-titles">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <Link to={`/movies/${movie.id}`} className="saved-movie">
            {movie.title}
          </Link>
        ))}
      </div>
      <Link to="/" className="home-button">
        Home
      </Link>
    </div>
  );
}

export default SavedList;
