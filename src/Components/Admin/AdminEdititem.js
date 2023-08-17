import React, { useContext, useState } from 'react';
import { myContext } from '../Context';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Adminnavbar from './Adminnavbar';

function AdminEdititem() {
  const { Products, setProducts } = useContext(myContext);
  const { id } = useParams();
  const filter = Products.filter((item) => item.id === parseInt(id));
  const [shoename, setShoename] = useState(filter[0].model);
  const [shoecategory, setShoecategory] = useState(filter[0].type);
  const [shoeprice, setShoeprice] = useState(filter[0].price);
  const [isedit, setIsedit] = useState(true);

  const confirmChange = () => {
    const updatedItem = Products.map((item) =>
      item.id === parseInt(id)
        ? {
            ...item,
            model: shoename,
            price: shoeprice,
            type: shoecategory,
          }
        : item
    );
    setProducts(updatedItem);
    alert('Updated');
    setIsedit(true);
  };

  const handleSelection = (event) => {
    setShoecategory(event.target.value);
  };

  return (
    <div>
      <Adminnavbar/>
      <div className='addproductdiv'>
        <div className='addproductdiv2'>
          <img className='addproductimg' src={filter[0].image} alt='Not found' />
        </div>
        <div className='addproductdiv3'>
          <form className={!isedit ? 'form-active' : ''}>
            <div>
              <i
                onClick={() => setIsedit(!isedit)}
                class='fa-solid fa-pen-to-square'
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              ></i>
            </div>
            <label>Shoe Name:</label>
            <input
              type='text'
              value={shoename}
              disabled={isedit ? true : false}
              onChange={(e) => setShoename(e.target.value)}
            />
            <br />
            <label>Amount:</label>
            <input
              type='number'
              value={shoeprice}
              disabled={isedit ? true : false}
              onChange={(e) => setShoeprice(e.target.value)}
            />
            <br />
            <label>Category:</label>
            <select
              disabled={isedit ? true : false}
              onChange={handleSelection}
             >
              <option value={'men'}>Men</option>
              <option value={'women'}>Women</option>
            </select>
            <br />
            {!isedit ? (
              <Button className='addproductbtn' onClick={() => confirmChange()}>{""}
                Confirm
              </Button>
            ) : (
             ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminEdititem;
