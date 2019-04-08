import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Retour à l'accueil </Link>
        {this.props.match.params.productNumber}
      </div>
    );
  }
}

export default Product;
