import React, {useCallback} from 'react';
import { IProduct } from '../store/modules/cart/types';
import {addProductToCartRequest, removeProductToCartSuccess}from '../store/modules/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
interface CatalogItemProps {
    product: IProduct
}

const RemoveButtonItem: React.FC<CatalogItemProps> = ({product}) => {
    const dispatch = useDispatch();
 
    const handleRemoveProductToCart = useCallback(()=>{
        dispatch(removeProductToCartSuccess(product));
    },[dispatch, product]);

    return (
        <article>
            <button type="button" onClick={handleRemoveProductToCart}>
                Remover
            </button>
        </article>
    );
}

export default RemoveButtonItem;