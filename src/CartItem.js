import React from 'react';

const CartItem = (props) => {
    const { price, title, qty,img } = props.lists;
    // this.state = this.props.lists;
    // console.log(this.pr
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs. {price}</div>
                <div style={{ color: '#777' }}>Qty : {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={() => props.increaseqty(props.lists)} />
                    <img alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={() => { props.decreaseqty(props.lists) }} />
                    <img alt="delete"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={() => { props.deleteqty(props.lists.key) }}
                    />
                </div>

            </div>
        </div>
    );
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
};
export default CartItem;