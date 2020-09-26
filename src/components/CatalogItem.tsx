import React, {useCallback} from 'react';
import { IProduct } from '../store/modules/cart/types';
import {addProductToCartRequest, removeProductToCartSuccess}from '../store/modules/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
interface CatalogItemProps {
    product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
    const dispatch = useDispatch();

    const hasFailedStockCheck = useSelector<IState, boolean>(state=>{
        return state.cart.failedStockCheck.includes(product.id)
    });

    const handleAddProductToCart = useCallback(()=>{
        dispatch(addProductToCartRequest(product));
    },[dispatch, product]);
    
    const handleRemoveProductToCart = useCallback(()=>{
        dispatch(removeProductToCartSuccess(product));
    },[dispatch, product]);

    return (
        <article>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {"  "}
            <button 
                type="button"
                onClick={handleAddProductToCart}
            >
                Comprar
            </button>
            {hasFailedStockCheck && <span style={{color: 'red'}}>Falta de Estoque</span>}

        </article>
    );
}

export default CatalogItem;