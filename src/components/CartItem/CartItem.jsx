import React from 'react';
import cl from './CartItem.module.scss';
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
                <img onClick={deleteItem} className={cl.itemRemove} src={x} alt={"x"} />
                <img width={125} height={179} src={`${process.env.REACT_APP_SERVER_URL_2}/` + item.img} alt={item.name} />
            </div>
            <div className="rows-cart__col">{'$' + item.price}</div>
            <div className="rows-cart__col">{item.name}</div>
            <div className="rows-cart__col">{'$' + item.price}</div>
        </div>
    );
}

export default observer(CartItem);