import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const {name,image,recipe,price, _id} = item;
const {user} = useContext(AuthContext);
const [, refetch] = useCart();
const navigate = useNavigate();
const location = useLocation()

  const handelAddToCart = item =>{
    console.log(item);
    if(user && user.email){
      const cartItem = {menuId:_id , name,image,recipe,price, email: user.email}
      fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch(); // updated add to cart
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food added in the cart.',
            showConfirmButton: false,
            timer: 1500
          })
        }
        
      })
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}})
        }
      })
    }
  }

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-black text-white font-semibold absolute right-0 mt-4 mr-4 p-1 rounded-s-2xl">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mx-auto">
          <button onClick={()=>handelAddToCart(item)} className="btn btn-outline text-[#BB8506] border-b-4 border-0 hover:bg-[#BB8506] shadow-2xl">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
