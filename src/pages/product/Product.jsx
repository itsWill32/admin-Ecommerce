import './Product.css';
import Graphic from '../../components/graphic/Graphic';
import { ProductData } from '../../dummyData';
import { Publish } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateProduct } from '../../redux/apiCalls';
import Swal from 'sweetalert2';


export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    
  const [productData, setProductData] = useState({
    name: '',
    desc: '',
    size: '',
    color: '',
    price: '',
    inStock: true,
    img: ''
  });

  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  
  useEffect(() => {
    if (product) {
      setProductData({
        name: product.name,
        desc: product.desc,
        size: product.size.join(', '),
        color: product.color.join(', '),
        price: product.price,
        inStock: product.inStock,
        img: product.img
      });
    }
  }, [product]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(productId, productData, dispatch)
      .then(() => {
        Swal.fire({
          title: 'Éxito',
          text: 'Producto actualizado con éxito',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      })
      .catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'Error al actualizar el producto',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <>
        <div className="main-Product">
        <div className="titleCont-Product">
                <h1 className='title-Product' > Editar Producto </h1>
            </div>

            <div className="container-Product">
                <div className="stats-Product">
                    <Graphic data={ProductData} dataKey={"Sales"} title={"Ventas Mensuales"}/> 
                </div>

                <div className='dataContainer-Product'>
                    <div className='media-Product'>
                        <img 
                        src={productData.img}
                        alt="imgPorduct" 
                        className='img-Product' 
                        />
                        <span className='name-Product'> {productData.name} </span>
                    </div>
                    <div className='dataStats-Product'>
                        <div className='infoItem-Product'>
                            <span className='id-Product'>Id:</span>
                            <span className='value-Product'>{productId}</span>
                        </div>
                        <div className='infoItem-Product'>
                            <span className='id-Product'>Ventas:</span>
                            <span className='value-Product'>1000</span>
                        </div>
                        <div className='infoItem-Product'>
                            <span className='id-Product'>En Stock:</span>
                            <span className='value-Product'> {productData.inStock ? 'Yes' : 'No'} </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bottom-Product'>
                <form className='form-Product' onSubmit={handleUpdate}>
                    <div className='data-Product' >
                        <label> Nombre del Producto</label>
                        <input type="text" name="name"
                  placeholder={productData.name}
                  onChange={handleChange} />

<label>Descripción del Producto</label>
                <input
                  type="text"
                  name="desc"
                  placeholder={productData.desc}
                  onChange={handleChange}
                />

<label>Talla</label>
                <input
                  type="text"
                  name="size"
                  placeholder={productData.size}
                  onChange={handleChange}
                />

<label>Color</label>
                <input
                  type="text"
                  name="color"
                  placeholder={productData.color}
                  onChange={handleChange}
                />
                                <label>Precio</label>
                <input
                  type="text"
                  name="price"
                  placeholder={productData.price}
                  onChange={handleChange}
                />                <label>En Stock</label>
                <select
                  name="inStock"
                  value={productData.inStock}
                  onChange={(e) => handleChange({ target: { name: 'inStock', value: e.target.value === 'true' } })}
                >
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
   
                    </div>
                    <div className='mediaUpload-Product'>
                        <div className='upload-Product'>
                            <img 
                            src={productData.img}
alt="img-Product" 
                            className='imgUpload-Product'
                            />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id='file' style={{display: 'none'}} />
                        </div>
                        <button className='button-Product'>Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
