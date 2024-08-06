import './app.css'

import Button from "./components/button/Button";
import UserInfo from "./components/userInfo/UserInfo";
import LeaderBoard from "./components/leaderBoard/LeaderBoard";
import NavBar from "./components/navBar/NavBar";

import avatar from './images/baseAvatar.png'
import coin from './images/coin.png'

const userList = [
    {
        id: 1,
        name: 'кирюха',
        avatar: avatar,
        coinsCount: 100_000_000
    },

    {
        id: 2,
        name: 'parallaxi',
        avatar: avatar,
        coinsCount: 100_000_00
    },

    {
        id: 3,
        name: 'niko',
        avatar: avatar,
        coinsCount: 100_000_0
    },

    {
        id: 4,
        name: 'ильхам',
        avatar: avatar,
        coinsCount: 1
    },
]



const App = () => {
    return(
            <div className="mainContainer">
                <div className="up-side">
                    <UserInfo

                        avatar={avatar}
                        avata1r={avatar}
                        coin={coin}
                        balance={100}
                        name={'parallax_i'}
                    />
                    <Button
                        width={120}
                        height={40}
                        fontSize={12}
                        text={'подключить кошелек'}
                        borderRadius={5}
                        backgroundSize={120}
                    />
                </div>

                <div className="center-side">

                    <Button
                        width={330}
                        height={55}
                        fontSize={24}
                        text={'пригласить друга'}
                        borderRadius={10}
                        marginBottom={30}
                        backgroundSize={330}
                    />

                    <Button
                        width={330}
                        height={55}
                        fontSize={20}
                        text={'забрать ежедневный бонус'}
                        borderRadius={5}
                        marginBottom={30}
                        backgroundSize={330}
                    />

                    <LeaderBoard
                        userList={userList}
                        coin={coin}
                    />

                </div>

                <NavBar/>

            </div>

    )
}

export default App;
