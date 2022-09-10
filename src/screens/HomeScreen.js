import { Link } from "react-router-dom";

import HeroSection from "./HeroSection";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/api/products');
        setProducts(result.data);
      };
      fetchData();
    }, []);
    return <div>
        <HeroSection></HeroSection>
        <h1 className='text-center'> List products</h1>
        <div className=" products">


            {
                products.map((product) => (
                    <div className="card product" key={product.slug}>
                        <Link to={`/product/${product.slug}`}>
                            <img className="card-img-top" src={product.image} alt={product.name} />
                        </Link>

                        <div className='product-info'>

                            <Link to={`/product/${product.slug}`}>
                                <p>{product.name} </p>
                            </Link>

                            <p>{product.price}</p>
                            <button type="button" class="btn btn-warning ">Add to Card</button>
                        </div>
                    </div>))
            }

        </div>
    </div>
}
export default HomeScreen;