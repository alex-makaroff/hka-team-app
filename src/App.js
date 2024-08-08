import {Route, Routes} from 'react-router-dom'
import ProfilePage from "./pages/profilePage/ProfilePage";
import FriendsPage from "./pages/friendsPage/FriendsPage";


const App = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<ProfilePage/>} />
                <Route path="/friends" element={<FriendsPage/>} />
            </Routes>
        </>

    )
}

export default App;
