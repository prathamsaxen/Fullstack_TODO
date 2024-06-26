import React from 'react'
import noitem from '../images/noitem-removebg-preview.png';
import Cardslist from './Cardslist';
import {data} from '../Data'
const Alltasks = (props) => {
  // return (props.tasklist.length===0 )?(<div className='imgdivtasks'>
  //   <img src={noitem} alt=''/>
  // </div>):
  //   <div>Alltasks</div>
  return (data.length!==0 )?(<div className='alltaskscontainer'>
    {
      data.map((item,index)=>{
        return <Cardslist data={item} key ={index}/> 
      })
    }
   
    </div>
  ):(<div className='imgdivtasks'>
     <img src={noitem} alt=''/>
   </div>)
}

export default Alltasks