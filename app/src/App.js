import {Route, Routes} from 'react-router-dom'

import ProfilePage from "./pages/profilePage/ProfilePage";
import FriendsPage from "./pages/friendsPage/FriendsPage";
import ShishaPage from "./pages/shishaPage/ShishaPage";
import JointPage from "./pages/jointPage/JointPage";

import Preloader from "./components/preloader/Preloader";
import FightPage from "./pages/fightPage/FightPage";
import {useTelegram} from "./hooks/useTelegram";

// import { TonConnectUIProvider } from '@tonconnect/ui-react';
// import Header from './components/smf for ton connect/Header';
// import {TxForm} from "./components/TxForm/TxForm";

// import TonConnectUI from '@tonconnect/ui'
//
// const tonConnectUI = new TonConnectUI({
//     manifestUrl: config.manifestUrl,
//     // buttonRootId: '<YOUR_CONNECT_BUTTON_ANCHOR_ID>'
// });


const App = () => {

    const {tg} = useTelegram();

    tg.expand()
    // console.log('tg', tg);
    // console.log('user', user);

    return(
        <>
            {/*<div className="json-container">*/}
            {/*    {JSON.stringify(user)}*/}
            {/*    <br/>*/}
            {/*    {JSON.stringify(user.id)}*/}
            {/*    <br/>*/}
            {/*    {JSON.stringify(user.username)}*/}
            {/*</div>*/}

            <Preloader/>
            <Routes>
                <Route path="/" element={<ProfilePage/>} />
                <Route path="/friends" element={<FriendsPage/>} />
                <Route path="/shisha" element={<ShishaPage/>} />
                <Route path="/joint" element={<JointPage/>} />
                <Route path="/fight" element={<FightPage/>} />
            </Routes>

            {/*<TonConnectUIProvider manifestUrl={config.manifestUrl}>*/}
            {/*    <Header*/}
            {/*        width={100}*/}
            {/*        height={33}*/}
            {/*        fontSize={8}*/}
            {/*        text={'подключить кошелек'}*/}
            {/*        borderRadius={5}*/}
            {/*    />*/}

            {/*</TonConnectUIProvider>*/}
        </>

    )
}

export default App;
