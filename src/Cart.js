import React from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
    const arr = props.products;
    console.log(props);
    // const item = {};
    // console.log(arr);
    return (
        <div className="cart">
            {
                arr.map((item) => {
                    return <CartItem
                        lists={item}
                        key={item.key}
                        increaseqty={props.increaseqty}
                        decreaseqty={props.decreaseqty}
                        deleteqty={props.deleteqty}
                    />
                })
            }
        </div>
    );
}

export default Cart;