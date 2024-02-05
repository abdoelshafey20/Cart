import React from 'react'
import { CartProvider ,useCart} from 'react-use-cart';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem, emptyCart, cartTotal, totalItems
    } = useCart();

    if (isEmpty) return <h2 className="text-center">Your cart is empty</h2>;

    var total = 0;
    return (
        <div>
            <h1 className="text-center">Cart ({totalUniqueItems})
                <button className="btn btn-danger" onClick={() => emptyCart()}>Delete All Items</button>
            </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <table className="table table-dark">
                            <thead>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Price</th>
                                <th>Operation</th>
                            </thead>

                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td><img src={item.images[0]} style={{ height: "70px" }}></img></td>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.discountPercentage}</td>
                                        <td>{Math.round(item.price * item.quantity * ((100 - item.discountPercentage) / 100))}</td>
                                        <td style={{ display: "none" }}>{total = Math.round(total + item.price * item.quantity * ((100 - item.discountPercentage) / 100))}</td>
                                        <td><button
                                            className="btn btn-warning"
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                            <button
                                                className="btn btn-success mx-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => removeItem(item.id)}>&times;</button>
                                        </td>

                                    </tr>))}

                                <tr>
                                    <td>Total</td>
                                    <td>--------------</td>
                                    <td>{totalItems}</td>
                                    <td>-----------</td>
                                    <td>{total}</td>
                                    <td><Link to="/shop" className='btn btn-primary'> Continue Shopping</Link></td>
                                </tr>
                            </tbody>


                        </table>

                    </div>
                </div>
            </div>




        </div>
    );
}

function Allcart() {
    return (
        <CartProvider>
            <Navbar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Cart/>
        </CartProvider>
    )
}

export default Allcart