import './Form.css'
import {useRef} from 'react'

const Form = ({onSubmit}) => {
    const inputRef = useRef();

    const handleClick = (e)=>{
        e.preventDefault();
        if(inputRef.current.value === ""){
          alert("Write Something!");
        }else{
          onSubmit(inputRef.current.value)
        }
        inputRef.current.value = ""
    }
  return (
        <form className='formContainer'>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Add</button>
        </form>
  )
}

export default Form