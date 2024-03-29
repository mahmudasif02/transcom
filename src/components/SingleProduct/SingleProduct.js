import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import Cart from '../Cart/Cart';
import UserDashboardHeader from '../UserDashboard/UserDashboardHeader/UserDashboardHeader';
import SingleProductCarousel from './SingleProductCarousel';
import './SingleProduct.css';
import ProductButton from '../Grocery/ProductButton/ProductButton';
import GroceryItem from '../Grocery/GroceryItem/GroceryItem';

const SingleProduct = () => {

    const productId = useParams('id');
    const product = products.find(pd => (pd.id === parseInt(productId.id)))


    
    return (
        <div className="single-product">

            <UserDashboardHeader></UserDashboardHeader>

            <div className="bg-white border-top single-product-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 cstm-right-border cstm-padding">
                            <SingleProductCarousel product={product}></SingleProductCarousel>
                        </div>
                        <div className="col-lg-6 cstm-padding">
                            <div className="p-4">
                                <h3 className="single-product-title">{product.name}</h3>
                                <p className="single-product-price">${product.price}</p>
                                <p className="single-product-desc">{product.desc}</p>
                                <ProductButton product={product}></ProductButton>
                                <p className="single-product-tags">Tags: <strong>{product.tags.map(tag => tag+", ")}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="container-fluid">
                    <div className="row mt-5 related-items-row" >
                        <div className="col-lg-12" style={{paddingLeft:'5px'}}>
                            <h3>Related Items</h3>
                        </div>
                        {
                            products.map((product,index) => {
                                return (
                                    <div key={index} className="col-md-2" style={{padding:'0'}}>
                                
                                        <GroceryItem  product={product}></GroceryItem>
                                    </div>
                                )
                            })
                        }
                        <div>

                        </div>
                    </div>
                </div>

            </div>
            
            <Cart></Cart>
        </div>
    );
};

export default SingleProduct;