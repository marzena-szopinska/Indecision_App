import React from 'react';

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  // set default props if props arent provided
  Header.defaultProps = {
    title: 'Indecision App'
  };

  export default Header;