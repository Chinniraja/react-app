import React,{Component} from 'react'
import {observer,inject} from 'mobx-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {css} from 'glamor';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {StyledAddToCart,StyledAddToCartContainer,StyledContent,StyledToasterContainer} from './styledComponents';

@inject("cartStore")
@observer
class AddToCart extends Component{
    
    addToCart = () => {
        const {eachProduct,cartStore:{addToCart}} = this.props;
        addToCart(eachProduct);
        
        toast.info(Toast(), {
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar:true,
            closeButton:false,
            draggable: false,
            className: css({
                backgroundColor: "#d69e2e",
                boxShadow: 'none',
                margin:"0px",
                transition: "transform 0.6s"
            })
        });
    };
    
    render() {
        return (
            <StyledAddToCartContainer>
                <StyledAddToCart onClick={this.addToCart}>{`Add To Cart`}</StyledAddToCart>
                <ToastContainer autoClose={4000}/>
            </StyledAddToCartContainer>
        );
    }
}

export default AddToCart;

function Toast(){
    return(
        <StyledToasterContainer>
          <IoMdCheckmarkCircleOutline/>
          <StyledContent>{`Product added to the cart!`}</StyledContent>
        </StyledToasterContainer>
    );
}