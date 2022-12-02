import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import CartItem from '../../components/CartItem/CartItem';
import MainButton from '../../components/controls/Button/MainButton';
import LoaderMain from '../../components/LoaderMain/LoaderMain';
import CartService from '../../services/cart-service';
import { ORDER_ROUTE, SHOP_ROUTE } from '../../utils/pages';
import './Cart.scss'

function Cart() {
    const { cart } = useContext(Context)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const fetchAllItemsCart = async () => {
        const { data } = await CartService.getAllItemsCart();
        cart.setCartItems(data)
        setTotalCart()
    }

    const setTotalCart = () => {
        let initialValue = 0
        const totalCart = cart.cartItems.reduce(function (a, b) {
            return a + b.price;
        }, initialValue);
        cart.setTotal(totalCart)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        fetchAllItemsCart()
    }, [cart.selectedItem])




    if (loading) {
        return (
            <LoaderMain />
        )
    }

    return (
        <section className="cart">
            <div className="cart__container">
                <AboutPageDescription namePre={"Main"} nameNow={"Cart"} />
                <div className="cart__rows rows-cart">
                    <div className="rows-cart__col">Item</div>
                    <div className="rows-cart__col">Price</div>
                    <div className="rows-cart__col">Name</div>
                    <div className="rows-cart__col">All</div>
                </div>
                <hr />
                <div className="cart__items item-cart">
                    {cart.cartItems
                        ?
                        cart.cartItems.map(item =>
                            <CartItem key={item._id} item={item} />
                        )
                        :
                        <div>empty</div>
                    }
                </div>
                <div className="cart__order order">
                    <div className="order__total">
                        Total: {cart.total ? `$${cart.total}` : '0'}
                    </div>
                    {cart.cartItems
                        ?
                        <MainButton onClick={() => navigate(ORDER_ROUTE)}>Checkout</MainButton>
                        :
                        <MainButton onClick={() => navigate(SHOP_ROUTE)}>Shop</MainButton>
                    }

                </div>
            </div>
        </section>
    );
}

export default observer(Cart);