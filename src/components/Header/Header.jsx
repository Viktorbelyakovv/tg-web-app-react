import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'
import {TonConnectButton} from "@tonconnect/ui-react";
import {Address} from "../../hooks/useTonAddress";
import {Wallet} from "../../hooks/useTonWallet";
import {ModalControl} from "../../hooks/useTonConnectModal";
import {Settings} from "../../hooks/useTonConnectUI";
import {EntrypointPage} from "../../hooks/useIsConnectionRestored";

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
            <TonConnectButton/>
            <div className='info'>
                <div>useTonAddress hook</div>
                <Address/>
            </div>
            <div className='info'>
                <div>useTonWallet hook</div>
                <Wallet/>
            </div>
            <div className='info'>
                <div>useTonConnectModal hook</div>
                <ModalControl/>
            </div>
            <div className='info'>
                <div>useTonConnectModal hook</div>
                <Settings/>
            </div>
            <div className='info'>
                <div>useIsConnectionRestored hook</div>
                <EntrypointPage/>
            </div>
        </div>
    )
}

export default Header;