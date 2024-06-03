import './Box.css';

function Box(props) {
  const { border, size } = props

  return (
    <div className='box-one' style={{width: '200px', heigth: `${size}`, borderColor: border }}><p>Estudios</p></div>
  )
}

export default Box;