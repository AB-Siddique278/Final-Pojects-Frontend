
import React from 'react';

const HeroSection = () => {
    
    return (
        <div>
            <div className='container'>

                <div className='row my-5'>


                    <dir className='col-md-6 d-flex align-items-center'>
                        <div>
                            <h1 > Wellcome To our Megaann Food</h1>
                            <h2>We sell all kinds of Food </h2>
                            <p>
                                Supplying our customers with the freshest, highest quality fruit.
                            </p>

                            <p>Processing is essential to ensure safety when canning fruits. Fruits, being acidic foods, can be processed safely in a boiling-water bath. However, some people prefer to pressure-process fruits.. </p>
                            <button type="button" class="btn btn-warning btn-lg">Learn More</button>
                        </div>
                    </dir>


                    <div className='col-md-6'>

                        <div className=''>

                            <img className='img-fluid' src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=996&t=st=1661271716~exp=1661272316~hmac=dbce6638cd4abbd6194f76eee4a51cdb938c75a0d629175e3cb6fbc6098909ba" alt="" />

                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default HeroSection;