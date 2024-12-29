import React from 'react'

const CourseCard = (props) => {
  return (
    // <div className='mb-4 p-5 border border-brown-700 rounded text-red-500'>
    //     <h3 className='card-title'>{props.title}</h3>
    //     <p className='card-duration'>{props.duration}</p>
    //     <p className='card-price'>{props.price}</p>
    // </div>
    <div style={divStyle}>
      <p style={textStyle}>
        <strong>{props.title}</strong>
      </p>
      <p style={textStyle}>{props.duration}</p>
      <p style={textStyle}>{props.price}</p>
    </div>

  )
}

const divStyle = {
  border: "1px solid black",
  borderRadius: 5,
  padding: 20,
  marginBottom: 15,
};
const textStyle = {
  fontSize: 20,
  marginBottom: 10,
  textAlign:"center"
};

export default CourseCard