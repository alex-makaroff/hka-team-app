import './profilePage.css'

import Button from "../../components/button/Button";
import UserInfo from "../../components/userInfo/UserInfo";
import LeaderBoard from "../../components/leaderBoard/LeaderBoard";
// import ProgressBar from "../../components/progressBar/ProgressBar";
import NavBar from "../../components/navBar/NavBar";

import baseAvatar from '../../images/baseAvatar.png'
import coin from '../../images/coin.png'
// import avatar from '../../images/avatar.png'
import avatarGreen from '../../images/avatar-green.png'
import cannabis from '../../images/cannabis.png'
// import cannabisGreen from '../../images/cannabis-green.png'
import joint from '../../images/joint.png'
// import jointGreen from '../../images/joint-green.png'
import fight from '../../images/fight.png'
// import fightGreen from '../../images/fight-green.png'

const userList = [
    {
        id: 1,
        name: 'кирюха',
        avatar: baseAvatar,
        coinsCount: 100_000_000
    },

    {
        id: 2,
        name: 'parallaxi',
        avatar: baseAvatar,
        coinsCount: 100_000_00
    },

    {
        id: 3,
        name: 'niko',
        avatar: baseAvatar,
        coinsCount: 100_000_0
    },

    {
        id: 4,
        name: 'ильхам',
        avatar: baseAvatar,
        coinsCount: 1
    },
]



const ProfilePage = () => {
    return(
        <div className="mainContainer">
            <div className="up-side-container">
                <div className='up-side'>
                    <UserInfo
                        avatar={baseAvatar}
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
                    link={'/friends'}
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
            <div className="navbar-place">
                <NavBar
                    avatar={avatarGreen}
                    cannabis={cannabis}
                    joint={joint}
                    fight={fight}

                />
            </div>

        </div>

    )
}

export default ProfilePage;
