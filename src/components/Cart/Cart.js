import React, { useState } from 'react';
import './Cart.css';
import { GiShoppingBag } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveShoppingCart } from "react-icons/md";
import CartItem from './CartItem';
import CartVoucher from './CartVoucher';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { loadCart } from '../../Redux/Actions/CartActions';

const Cart = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCart())
    },[dispatch])    

    const items = useSelector(state => {
        return state.items.cartItems;
    })

    const [cartExpanded, setCartExpanded] = useState(false);
    
    let totalPrice = 0;
    for(let i = 0; i < items?.length; i++){
        totalPrice += items[i].price*items[i].count;
    }

    
    return (
        <>
            {
                !cartExpanded &&
                <div className="cart hover-pointer" onClick={()=> setCartExpanded(true)}>
                    <div className="count-container d-flex align-items-center justify-content-center">
                        <GiShoppingBag color="white"></GiShoppingBag>
                        <span className="item-count ml-1"> {items?.length} items</span>
                    </div>
                    <div className="price-container d-flex justify-content-center">
                        <span className="price bg-white pt-2 pb-2 pl-4 pr-4">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            }
            
            {
                cartExpanded &&
                <div className="cart-expanded shadow">
                    <div className="cart-expanded-header d-flex align-items-center p-3 border-bottom">
                        <GiShoppingBag color="#009e7f" size={25}></GiShoppingBag>
                        <span className="item-count ml-1"> {items?.length} items</span>
                        <GrClose className="ml-auto hover-pointer cart-close" onClick={()=>setCartExpanded(false)}></GrClose>
                    </div>
                    
                        
                    <div className="card-expanded-body">
                        {
                            !items?.length &&
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="mt-5 p-3">
                                    <MdRemoveShoppingCart className="mb-5" size={180} color="#009e7f"></MdRemoveShoppingCart>
                                    <p className="text-center">No products found</p>
                                </div>
                            </div>
                            
                        }
                        {
                            items?.length > 0 &&
                            <div className="cart-items-container">
                                {
                                    items?.map((item,index) => <CartItem key={index} item={item}></CartItem>)
                                    
                                }
                            </div>
                        }
                    </div>
                    
                    <div className="cart-expanded-footer mt-auto p-3">
                        <CartVoucher></CartVoucher>
                        <Link to="/checkout" >
                            <button disabled={items?.length===0} className="border-0 w-100 checkout-btn d-flex justify-content-between align-items-center">
                                <span className="checkout-text">Checkout</span>
                                <span className="checkout-price">${totalPrice.toFixed(2)}</span>
                            </button>
                        </Link>
                    </div>
                </div>
            }
            
        </>
    );
};

export default Cart;