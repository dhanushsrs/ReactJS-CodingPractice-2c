const Box = props => {
  //  Write your code here.
  const {className, text} = props
  return <p className={className}>{text}</p>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Boxes</h1>
    <div className='box-container'>
      <Box className='box small' text='Small' />
      <Box className='box medium' text='Medium' />
      <Box className='box large' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
