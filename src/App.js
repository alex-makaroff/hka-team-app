import {Route, Routes} from 'react-router-dom'

import ProfilePage from "./pages/profilePage/ProfilePage";
import FriendsPage from "./pages/friendsPage/FriendsPage";
import ShishaPage from "./pages/shishaPage/ShishaPage";
import JointPage from "./pages/jointPage/JointPage";

import Preloader from "./components/preloader/Preloader";


const App = () => {
    return(
        <>
            <Preloader/>
            <Routes>
                <Route path="/" element={<ProfilePage/>} />
                <Route path="/friends" element={<FriendsPage/>} />
                <Route path="/shisha" element={<ShishaPage/>} />
                <Route path="/joint" element={<JointPage/>} />
            </Routes>
        </>

    )
}

export default App;