import './App.css'

function App() {
  return (
    <div className="entire-calculator">
      <div className="output-screen">
        <div className="old-operand"></div>
        <div className="new-operand"></div>
      </div>
      <button className='span-two'>AC</button>
      <button className='span-two'>DEL</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>&divide;</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>&times;</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>+</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>
    </div>
  )
}

export default App
