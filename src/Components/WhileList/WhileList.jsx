;
import { CiLocationOn } from 'react-icons/ci';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { MdOutlineFindInPage } from 'react-icons/md';
import { getDataWhile } from '../../utility/LocalStore';
import { useEffect, useState } from 'react';
import WhileCard from '../WhileCard/WhileCard';

const WhileList = () => {
    
      const [data,setData]=useState([])
      useEffect(()=>{
          const getData=getDataWhile()
          setData(getData)
      },[])
        console.log(data)
       
           
        return (
           <div className='mt-5'>
             {
                data.map(data=><WhileCard book={data}></WhileCard>)
             }
             
           </div>
    );
};

export default WhileList;