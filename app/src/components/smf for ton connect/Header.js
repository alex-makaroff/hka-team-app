import { TonConnectButton } from '@tonconnect/ui-react';
import './header.css'
import {TxForm} from "../TxForm/TxForm";

const Header = (props) => {
    return (
        <header>
            <div>
                <span>My App with React UI</span>
                <TonConnectButton className="button"/>
                <TxForm/>
            </div>
        </header>
    );
};

export default Header;
