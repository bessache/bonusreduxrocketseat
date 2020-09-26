import React, {useCallback, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../store';
import { ICartItem, IProduct } from '../store/modules/cart/types';
import {removeProductToCartRequest, removeProductToCartSuccess}from '../store/modules/cart/actions';

// interface ICartItemProps {
//     product: IProduct;
// }

const Cart: React.FC = () => {
    const cart = useSelector<IState, ICartItem[]>(state=> state.cart.items)
    const dispatch= useDispatch();
    
    const handleRemoveProductToCart = useCallback(()=>{
        dispatch(removeProductToCartSuccess(product));
    },[dispatch, product]);
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>SubTotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item=>(
                    <tr key={item.product.id}>
                        <div >
                            <td>{item.product.title}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
                            <button>Remover</button>
                        </div>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Cart;