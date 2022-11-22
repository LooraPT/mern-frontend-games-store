import React from 'react';
import cl from './CartItem.module.scss';
import logo from '../../assets/main/main2.jpg'
import x from '../../assets/icons/x.svg';
import { observer } from 'mobx-react-lite';
import CartService from '../../services/cart-service';
import { useContext } from 'react';
import { Context } from '../..';

function CartItem({ item }) {

    const { cart } = useContext(Context)

    const deleteItem = async () => {
        const { data } = await CartService.removeItemInCart(item._id)
        cart.setSelectedItems(data)
    }

    return (
        <div className="item__cart">
            <div className="rows-cart__col">
                <img onClick={deleteItem} style={{ paddingRight: '10px', cursor: 'pointer' }} src={x} />
                <img style={{ width: '125px', height: '179px' }} src={`${process.env.REACT_APP_SERVER_URL_2}/` + item.img} />
            </div>
            <div className="rows-cart__col">{'$' + item.price}</div>
            <div className="rows-cart__col">{item.name}</div>
            <div className="rows-cart__col">{'$' + item.price}</div>
        </div>
    );
}

export default observer(CartItem);