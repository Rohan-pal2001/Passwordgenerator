import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberallow,setnumberallow]=useState(false)
  const [characterallow,setcharacterallow]=useState(false)
  const [password,setpassword]=useState("")
  const passwordref=useRef("")
  // const passwordgenerator=useCallback(()=>{
  //   let pass=""
  //   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlkmnopqrstuvwxyz"
  //   if(numberallow) str+="0123456789"
  //   if(characterallow) str+="~`!@#$%^&*()_+{}[}]':;<?/>.|"
  //   for (let i = 1; i <=length; i++) {
  //     let char=Math.floor(Math.random()*str.length+1)
  //     pass+=str.charAt(char)
      
  //   }
 //   setpassword(pass)
  //},[length,numberallow,characterallow,setpassword])

  const copypasswordtoclipboard=useCallback(()=>{
    passwordref.current?.select()
     window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordgenerator()
    
  },[length,numberallow,characterallow,passwordgenerator])
  return (
    <>
    <div className='w-full max-w-auto  shadow-md rounded-lg 
    px-4 py-3 my-80 bg-slate-500'>
      <h1 className='text-white text-center py-3 font-semibold text-3xl'> Password Generator</h1>
      <div
      className=' md:mb-9 flex-shadow  rounded-lg overflow-hidden mb-8  '>
        <input type="text"
        // value={password}
        
        className='outline-none md:mb-4 w-5/6 py-4 rounded-md px-3 '
        placeholder='SetPassword'
        
        ref={passwordref}
        
        />
        <button 
        onClick={copypasswordtoclipboard}
        className='text-white outline-none px-3 shrink-0 py-4 font-bold  mx-2  bg-slate-800 rounded-md hover:bg-slate-700'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 pl-20'>
        <div
        className='flex flex-wrap items-center gap-x-1'>
          <input type="range" 
          min={2}
          max={100}
          vlaue={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label className='text-bold text-white text-xl'>Length:{length}</label>
        </div>
        <div className='flex flex-wrap items-center gap-x-1'>
          <input type="checkbox" 
          defaultValue={numberallow}
          id="numberInput"
          onChange={()=>{
            setnumberallow((prev)=>!prev);
          }}/>
          <label className='text-bold text-white text-xl'>Number</label>
        </div>
        <div className='flex  flex-wrap items-center gap-x-1'>
          <input type="checkbox" 
          defaultValue={characterallow}
          id="characterInput"
          onChange={()=>{
            setcharacterallow((prev)=>!prev);
          }}/>
          <label className='text-bold text-white text-xl'>Special Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
