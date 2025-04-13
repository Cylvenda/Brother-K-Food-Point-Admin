import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({URL}) => {

  const [list, setList] = useState([]);

  const fetchFood = async () => {
    const response = await axios.get(`${URL}/api/food/foodList`);
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${URL}/api/food/foodRemove`, {id:foodId});
    await fetchFood();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div className='list add flex-col'>
        <p>All Food List</p>

        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>

          {list.map((item, index) =>{
              return(
                <div key={index} className="list-table-format">
                    <img src={`${URL}/images/` + item.image} alt="Product" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                </div>
              )
          })}
        </div>
    </div>
  )
}

export default List
