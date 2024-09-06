import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();

  const products = useSelector((state) => {
    console.log("Estado completo:", state);
    return state.product ? state.product.products : [];
  });
  console.log("Productos desde el estado:", products);

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      deleteProduct(id, dispatch);
    }
  };
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "product",
      headerName: "Producto",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productInfo-PL">
            <img src={params.row.img} alt="img" className="productImg-PL" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "inStock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "price",
      headerName: "Precio",
      width: 300,
    },
    {
      field: "action",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/Product/" + params.row._id}>
              <button type="submit" className="editB-PL">
                Editar
              </button>
            </Link>
            <DeleteOutline
              className="deleteB-PL"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="main-PL">
        <Link to={"/NewProduct"}>
          <button className="buttonAdd-Product"> Añadir Producto</button>
        </Link>

        <DataGrid
          rows={products.length > 0 ? products : []}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          autoHeight
        />
      </div>
    </>
  );
}
