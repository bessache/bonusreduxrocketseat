import React, {useCallback} from 'react';
import { IProduct } from '../store/modules/cart/types';
import {addProductToCartRequest, removeProductToCartSuccess}from '../store/modules/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
interface CatalogItemProps {
    product: IProduct
}

const IncrementItem: React.FC<CatalogItemProps> = ({product}) => {
    const dispatch = useDispatch();

    const hasFailedStockCheck = useSelector<IState, boolean>(state=>{
        return state.cart.failedStockCheck.includes(product.id)
    });

    const handleAddProductToCart = useCallback(()=>{
        dispatch(addProductToCartRequest(product));
    },[dispatch, product]);
    
    return (
        <article>
            <button 
                type="button"
                onClick={handleAddProductToCart}
            >
                Adicionar Qty
            </button>
            {hasFailedStockCheck && <span style={{color: 'red'}}>Falta de Estoque</span>}

        </article>
    );
}

export default IncrementItem;