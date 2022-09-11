import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product(props) {
    const { product } = props;
    return (
        <Card >
            <Link to={`/product/${product.slug}`}>
                <img className="card-img-top" src={product.image} alt={product.name} />
            </Link>

            <Card.Body className='product-info'>

                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name} </Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />

                <Card.Title>{product.price}</Card.Title>
                <button type="button" class="btn btn-warning ">Add to Card</button>
            </Card.Body>
        </Card>
    )

}
export default Product;