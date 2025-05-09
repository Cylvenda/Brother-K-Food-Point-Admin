import React, {  useState } from 'react'
import './Add.css'
import axios from 'axios'
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';

const Add = ({URL}) => {

    const [image, setImage] = useState(false);
    const [data, setData ] = useState({
        name: "",
        description: "",
        price: "",
        category: "chips"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(data=>({...data, [name]: value}))
    }

    const onSubmitHandler= async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)

        const response = await axios.post(`${URL}/api/food/foodAdd`, formData);
        if(response.data.success){
            setData({
                name: "",
                description: "",
                price: "",
                category: "chips"
            })
            setImage(false);
            toast.success(response.data.message);
        }else{
            setImage(false);
        }

    }

  return (
    <div className='add'>
        <form onSubmit={onSubmitHandler} className="flex-col">
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={assets.plus}  />
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}  id="image" required />
                </label>
            </div>

            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text"  name="name" placeholder='Type here...' required />
            </div>

            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Write product about here..' ></textarea>
            </div>

            <div className="add-category-price">
                <p>Product Category</p>
                <select onChange={onChangeHandler} value={data.category} name="category" >
                    <option value="chips">Chips</option>
                    <option value="Wali">Wali</option>
                    <option value="Fish">Fish</option>
                    <option value="Mishkaki">Mishkaki</option>
                    <option value="Sosage">Sosage</option>
                    <option value="Kuku">Kuku</option>
                </select>

                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='5,000 Tsh ' required />

            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
      
    </div>
  )
}

export default Add
