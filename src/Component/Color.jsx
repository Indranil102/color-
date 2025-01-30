import React, { useState } from 'react'
import './color.css'
const Color = () => {
    const [colorChange, setColorChange]= useState('blue')
  return (
    <>
       <h2 className='heading' style={{backgroundColor:colorChange}}>Theme</h2>
    <div className='base' style={{backgroundColor:colorChange}}>
         
        
        <div className='box-color'>
       
         <p onClick={()=>setColorChange('red')} style={{backgroundColor:'red'}}> red

         </p>
      
      </div>
      <div className='box-color'>
    
         <p onClick={()=>setColorChange('orange')} style={{backgroundColor:'orange'}}>orange</p>
      
      </div>
      <div className='box-color'>
         
         <p onClick={()=>setColorChange('green')} style={{backgroundColor:'green',
        
         }}>green</p>
      
      </div>
      <div className='box-color'>
    
         <p onClick={()=>setColorChange('gray')} style={{backgroundColor:'gray'}}>gray</p>
      </div>
      <div className='box-color'>
        {
            colorChange==='black' ? <p onClick={()=>setColorChange('black')} style={{backgroundColor:'black',border:'1px solid white'}}>Black</p> : <p onClick={()=>setColorChange('black')} style={{backgroundColor:'black'}}>Black</p>
        }
         
      </div>
    </div>
    </>
  )
}

export default Color
