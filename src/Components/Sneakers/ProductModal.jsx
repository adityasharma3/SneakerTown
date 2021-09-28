import React, { useEffect, useRef } from 'react'
import { Modal, ModalBody, Button, ModalSpecifics, Sizes, Size, ProductPrice, ButtonSection2 } from './Styling'

const ProductModal = (props) => {

    const sizes = useRef(null);

    const closeOnEscapeKeyPress = (event) => {
        if (event.charCode || event.keyCode === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyPress);

        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyPress);
        }
    }, []);

    useEffect(() => {
        document.getElementById('')
    }, []);

    if (!props.show) {
        return null;
    }

    return (
        <Modal>
            <ModalBody>
                <h1>{props.data.name}</h1>
                <img
                    src={props.data.main_picture_url}
                    alt={props.data.name}
                />

                <ProductPrice>
                    ₹{props.data.retail_price_cents / 100 * 72}
                </ProductPrice>

                <ModalSpecifics>
                    <h2>{props.data.brand_name}</h2>
                    <h2>{props.data.gender}</h2>
                    <h2>{props.data.category}</h2>
                    <h2>{props.data.details}</h2>
                </ModalSpecifics>

                <Sizes ref={sizes}>
                    {props.data.size_range.map((item) =>
                        <Size key={item}>{item}</Size>
                    )}
                </Sizes>

                <ButtonSection2>
                    <Button onClick={props.onClose}>Close</Button>
                    {/* <Button>Add to Cart</Button> */}
                </ButtonSection2>
            </ModalBody>
        </Modal>
    )
}

export default ProductModal;
