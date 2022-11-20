import React from 'react';
import MainInput from '../../controls/Input/MainInput';
import MainButton from '../../controls/Button/MainButton';
import cl from './ModalCall.module.scss';

function ModalCall({ visible, setVisible }) {

    const rootCl = [cl.modalCall]

    if (visible) {
        rootCl.push(cl.active);
    }

    return (
        <div className={rootCl.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalCall__content} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '15px', paddingTop: '20px' }}>Buy callback</div>
                <MainInput placeholder="name" />
                <MainInput placeholder="email" />
                <MainInput placeholder="phone" />
                <MainButton>Order Call</MainButton>
            </div>
        </div>
    );
}

export default ModalCall;