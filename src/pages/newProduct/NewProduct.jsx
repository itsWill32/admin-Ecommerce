import { useState } from "react";
import "./NewProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { addProduct } from '../../redux/apiCalls';
import Swal from 'sweetalert2';

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = async (e) => {
    e.preventDefault();
  
    if (!img) {
      console.error("No se ha seleccionado ninguna imagen.");
      return;
    }
  
    const imgName = new Date().getTime() + img.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, imgName);
    const uploadTask = uploadBytesResumable(storageRef, img);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.error("Error al cargar la imagen:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          console.log("Producto a enviar:", product);
          addProduct(product, dispatch)
            .then(() => {
              Swal.fire({
                title: 'Éxito',
                text: 'Producto creado con éxito',
                icon: 'success',
                confirmButtonText: 'OK'
              });
            })
            .catch((error) => {
              console.error("Error al añadir el producto:", error);
              Swal.fire({
                title: 'Error',
                text: 'Error al crear el producto',
                icon: 'error',
                confirmButtonText: 'OK'
              });
            });
        }).catch((error) => {
          console.error("Error al obtener la URL de descarga:", error);
        });
      }
    );
  };

  return (
    <>
      <div className="main-NP">
        <h1>New Product</h1>
        <form className="form-NP">
          <div className="desc-NP">
            <label>Image</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="desc-NP">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              placeholder="Apple Airpods"
            />
          </div>
          <div className="desc-NP">
            <label>Description</label>
            <input
              type="text"
              name="desc"
              onChange={handleInput}
              placeholder="Product description..."
            />
          </div>
          <div className="desc-NP">
            <label>Categories</label>
            <input
              type="text"
              onChange={handleCat}
              placeholder="casual, premium, deportivos"
            />
          </div>
          <div className="desc-NP">
            <label>Size</label>
            <input
              type="text"
              name="size"
              onChange={handleInput}
              placeholder="25, 26, 27"
            />
          </div>
          <div className="desc-NP">
            <label>Color</label>
            <input
              type="text"
              name="color"
              onChange={handleInput}
              placeholder="azul, blanco, negro"
            />
          </div>
          <div className="desc-NP">
            <label>Price</label>
            <input
              type="number"
              name="price"
              onChange={handleInput}
              placeholder="10"
            />
          </div>

          <div className="desc-NP">
            <label>Stock</label>
            <select name="inStock" id="active" onChange={handleInput}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button onClick={handleClick} className="button-NP">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
