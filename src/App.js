import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          key: 1
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 10,
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          key: 2
        },
        {
          price: 999,
          title: "Laptop",
          qty: 4,
          img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          key: 3
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    const mainele = this.state.products;
    const index = mainele.indexOf(product);
    mainele[index].qty += 1;
    this.setState(() => {
      return mainele
    });
  }
  handleDecreaseQuantity = (product) => {
    const mainele = this.state.products;
    const index = mainele.indexOf(product);
    if (mainele[index].qty <= 0) {
      return;
    }
    mainele[index].qty -= 1;
    this.setState({
      products: mainele
    })
  }
  handleDeleteQuantity = (id) => {
    const mainele = this.state.products;
    const items = mainele.filter((item) => item.key !== id)
    this.setState({
      products: items
    });
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cost = 0;
    products.forEach((product) => {
      cost += (product.price * product.qty);
    })
    return cost;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount}
        />
        <Cart
          products={products}
          increaseqty={this.handleIncreaseQuantity}
          decreaseqty={this.handleDecreaseQuantity}
          deleteqty={this.handleDeleteQuantity}
        />
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL: {this.getCartTotal()}</div>
      </div>

    );
  }
}

export default App;
