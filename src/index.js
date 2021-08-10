import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./FirstComponent"; // herw we imported our component
import Details from "./Details";

/*here we used our component*/
ReactDOM.render(
  <div>
   <Details />
  <FirstComponent />
 
  </div>, 
  document.getElementById('root')
);

