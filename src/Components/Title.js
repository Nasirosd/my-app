"ues c"

const Title = (props) => {
  console.log( props.text);
  return (
    <h1 className='text-lg text-center font-semibold'>{props.text}</h1>
  )
}

export default Title