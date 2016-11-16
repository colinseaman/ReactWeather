var React = require('react');

/*
stateless functional component using arrow method
*/

var About = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">About</h1>
    <p>A simple weather app</p>
    </div>
  )
}

module.exports = About;
