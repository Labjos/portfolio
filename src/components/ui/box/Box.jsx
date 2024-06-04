import './Box.css';

function Box( { text, className }) {
  
  return (
    <div className= {className}><p>{text}</p></div>
  )
}

export default Box;