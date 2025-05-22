import React,{useRef} from 'react'
import "./style.css"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handelAdd:(e:React.FormEvent) => void;

}
const InputFeild:React.FC <Props>= ({todo,setTodo,handelAdd}) => {
const inputRef = useRef<HTMLInputElement>(null);
  return (
   <form className='input'onSubmit={(e)=>{handelAdd(e);inputRef.current?.blur()}} >
    <input ref={inputRef} type="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter a task' className='input__box'/>
    <button className='input_submit' type="submit">Go</button>
   </form>
  )
}

export default InputFeild
