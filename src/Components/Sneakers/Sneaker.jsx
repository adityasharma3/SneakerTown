import React, { useState, Fragment } from 'react'
import ProductModal from './ProductModal'
import { SingularProduct, Button, ButtonSection } from './Styling'

const Sneaker = (props) => {

    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const buttonClickHandler = () => {
        props.cart(props.shoeData);
    }

    return (
        <Fragment>
            <SingularProduct>
                <img
                    alt={props.shoeData.name}
                    src={props.shoeData.grid_picture_url}
                />
                <h3>{props.shoeData.name}</h3>

                <ButtonSection>
                    <Button onClick={() => setShow(true)}>click for more info</Button>
                    <ProductModal
                        onClose={() => setShow(false)}
                        show={show}
                        data={props.shoeData}
                    />
                    
                    <Button onClick={buttonClickHandler}>
                        Add to cart
                    </Button>

                </ButtonSection>

            </SingularProduct>
        </Fragment>
    )
}

export default Sneaker