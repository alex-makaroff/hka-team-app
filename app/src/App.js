import './app.css'
import Button from "./components/button/Button";
import UserInfo from "./components/userInfo/UserInfo";
import avatar from './images/baseAvatar.png'
import coin from './images/coin.png'

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
                    />
                </div>
                <div className="center-side">

                    <Button
                        width={330}
                        height={60}
                        fontSize={24}
                        text={'пригласить друга'}
                        borderRadius={10}
                    />

                    <Button
                        width={330}
                        height={60}
                        fontSize={20}
                        text={'забрать ежедневный бонус'}
                        borderRadius={5}
                    />

                </div>

            </div>

    )
}

export default App;
