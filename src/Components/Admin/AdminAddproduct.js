import React, { useContext, useState } from 'react';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Adminnavbar from './Adminnavbar';

function AdminAddproduct() {
  const [productname, setProductname] = useState('');
  const [productamount, setProductamount] = useState('');
  const [productcategory, setProductcategory] = useState('men');
  const [img, setImg] = useState('');

  const { Products, setProducts } = useContext(myContext);

  const navigate = useNavigate();

  const handleSelection = (event) => {
    setProductcategory(event.target.value);
  };

  const addNewItem = () => {
    setProducts([
      ...Products,
      {
        model: productname,
        price: productamount,
        image: img,
        category: productcategory,
        id: Products.length + 1,
      },
    ]);
    alert('Added new Item');
    navigate('/Adminproducts');
  };

  return (
    <div>
      <Adminnavbar/>
      <div className='addproductdiv'>
        <div className='addproductdiv2'>
          <img className='addproductimg' src={img} alt='Not found' />
        </div>
        <div className='addproductdiv3'>
          <form>
            <div>
              <label>Product Name:</label>
              <input type='text' onChange={(e) => setProductname(e.target.value)} />
            </div>
            <div>
              <label>Category:</label>
              <select onChange={handleSelection} value={productcategory}>
                <option value='men'>Men</option>
                <option value='women'>Women</option>
              </select>
            </div>
            <div>
              <label>Amount:</label>
              <input type='number' onChange={(e) => setProductamount(e.target.value)} />
            </div>
            <div>
              <label>Image:</label>
              <input type='text' onChange={(e) => setImg(e.target.value)} />
            </div>
            <div>
              <Button className='my-button' type='button' onClick={addNewItem}>
                ADD
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminAddproduct;
