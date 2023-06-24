// import React, { useState } from 'react';
// import axios from 'axios';
// import ImageResults from "../imageResults/imageResults";
// import ActionSearch from 'material-ui/svg-icons/action/search';

// const Search = () => {
//   const [searchText, setSearchText] = useState('');
//   const [apiUrl] = useState('https://pixabay.com/api');
//   const [apiKey] = useState('37788459-53e12c68e97bebb68bb861515');
//   const [images, setImages] = useState([]);
//   const [searchClicked, setSearchClicked] = useState(false);

//   const onTextChange = (e) => {
//     const val = e.target.value;
//     setSearchText(val);
//   };

//   const onSearchClick = () => {
//     axios
//       .get(
//         `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&safesearch=true`
//       )
//       .then(res => {
//         setImages(res.data.hits);
//         setSearchClicked(true);
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <>
//       <div className="cont" style={{ paddingTop: '15px' }}>
//         <h1 style={{ color: 'black', textAlign: 'center', fontFamily: 'Raleway', fontSize: '35px', fontWeight: '600', marginBottom: '2px' }}>IMAGE SEARCH APP</h1>
//       </div>
//       <div>
//         <input
//           type="text"
//           style={{
//             backgroundColor: 'black',
//             color: 'white',
//             marginLeft: '500px',
//             marginTop: '30px',
//             padding: '7px 70px 7px 70px',
//             fontSize: '30px',
//             border: '3px solid white',
//             borderRadius: '30px',
//             textAlign: 'center'
//           }}
//           placeholder="Search For Images"
//           name="searchText"
//           value={searchText}
//           onChange={onTextChange}
//         />
//         <button onClick={onSearchClick}
//           style={{
//             marginTop: '30px',
//             marginLeft: '10px',
//             backgroundColor: '#2eb82e',
//             color: 'white',
//             border: '3px solid black',
//             padding: '10px 12px 10px 12px',
//             fontSize: '16px',
//             borderRadius: '30px',
//             cursor: 'pointer'
//           }}>
//           <ActionSearch></ActionSearch>
//         </button>
//         <br />
//         {searchClicked && images.length > 0 ? (<ImageResults images={images} />) : null}
//       </div>
//     </>
//   );
// };

// export default Search;

import React, { useState } from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults";
import ActionSearch from 'material-ui/svg-icons/action/search';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [apiUrl] = useState('https://pixabay.com/api');
  const [apiKey] = useState('37788459-53e12c68e97bebb68bb861515');
  const [images, setImages] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const onTextChange = (e) => {
    const val = e.target.value;
    setSearchText(val);
  };

  const onSearchClick = () => {
    axios
      .get(
        `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&safesearch=true`
      )
      .then(res => {
        setImages(res.data.hits);
        setSearchClicked(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="cont" style={{ paddingTop: '15px' }}>
        <h1 style={{ color: 'black', textAlign: 'center', fontFamily: 'Raleway', fontSize: '35px', fontWeight: '600', marginBottom: '2px' }}>IMAGE SEARCH APP</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          style={{
            backgroundColor: 'black',
            color: 'white',
            margin: '30px 0px 5px 0px',
            padding: '7px 70px 7px 70px',
            fontSize: '30px',
            border: '3px solid white',
            borderRadius: '30px',
            textAlign: 'center',
            width: '80%',
            maxWidth: '400px'
          }}
          placeholder="Search For Images"
          name="searchText"
          value={searchText}
          onChange={onTextChange}
        />
        <button onClick={onSearchClick}
          style={{
            margin: '2px 0',
            backgroundColor: '#2eb82e',
            color: 'white',
            border: '3px solid black',
            padding: '10px 12px 10px 12px',
            fontSize: '16px',
            borderRadius: '30px',
            cursor: 'pointer'
          }}>
          <ActionSearch></ActionSearch>
        </button>
        {searchClicked && images.length > 0 ? (<ImageResults images={images} />) : null}
      </div>
    </>
  );
};

export default Search;
