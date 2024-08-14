import {Route, Routes} from 'react-router-dom'

import ProfilePage from "./pages/profilePage/ProfilePage";
import FriendsPage from "./pages/friendsPage/FriendsPage";
import ShishaPage from "./pages/shishaPage/ShishaPage";
import JointPage from "./pages/jointPage/JointPage";

import Preloader from "./components/preloader/Preloader";
import FightPage from "./pages/fightPage/FightPage";
import {useTelegram} from "./hooks/useTelegram";


const App = () => {

    const {tg, user} = useTelegram();

    // tg.expand()
    console.log('tg', tg);
    console.log('user', user);

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
        </>

    )
}

export default App;
