import './profilePage.css'

import Button from "../../components/button/Button";
import UserInfo from "../../components/userInfo/UserInfo";
import LeaderBoard from "../../components/leaderBoard/LeaderBoard";
import NavBar from "../../components/navBar/NavBar";
import Modal from "../../components/modal/Modal";

import baseAvatar from '../../images/baseAvatar.png'
import coin from '../../images/coin.png'
import avatarGreen from '../../images/avatar-green.png'
import cannabis from '../../images/cannabis.png'
import joint from '../../images/joint.png'
import fight from '../../images/fight.png'



import {useState} from "react";

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

    const [activeDailyModal, setActiveDailyModal] = useState(false);
    const [activeChangeAvaModal, setActiveChangeAvaModal] = useState(false);

    return(
        <>
            <div className="mainContainer">
                <div className="up-side-container">
                    <div className='up-side'>
                        <UserInfo
                            avatar={baseAvatar}
                            coin={coin}
                            balance={100}
                            name={'parallax_i'}
                            setModalActive={setActiveChangeAvaModal}
                            modalActive={activeChangeAvaModal}
                        />
                        <Button
                            width={120}
                            height={40}
                            fontSize={12}
                            text={'подключить кошелек'}
                            borderRadius={5}
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
                        link={'/friends'}
                    />

                    <Button
                        width={330}
                        height={55}
                        fontSize={20}
                        text={'забрать ежедневный бонус'}
                        borderRadius={5}
                        marginBottom={30}
                        setModalActive={setActiveDailyModal}
                        modalActive={activeDailyModal}
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

                <Modal active={activeDailyModal} setActive={setActiveDailyModal}>
                    <div className='daily-reward-container'>
                        <div className="daily-reward-list">
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>

                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>

                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>

                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                            <div className='daily-reward-item'></div>
                        </div>

                        <Button
                            width={200}
                            height={45}
                            fontSize={25}
                            text={'назад'}
                            borderRadius={10}
                            setModalActive={setActiveDailyModal}
                            modalActive={activeDailyModal}
                        />
                    </div>
                </Modal>

                <Modal active={activeChangeAvaModal} setActive={setActiveChangeAvaModal}>
                    <div className='change-ava-container'>
                        <div className='smf'>
                            <div className="ava-list">
                                <div className='change-ava-item'></div>
                                <div className='change-ava-item'></div>

                                <div className='change-ava-item'></div>
                                <div className='change-ava-item'></div>

                                <div className='change-ava-item'></div>
                                <div className='change-ava-item'></div>
                            </div>
                        </div>


                        <Button
                            width={200}
                            height={45}
                            fontSize={25}
                            text={'назад'}
                            borderRadius={10}
                            setModalActive={setActiveChangeAvaModal}
                            modalActive={activeChangeAvaModal}
                        />
                    </div>
                </Modal>

            </div>

        </>

    )
}

export default ProfilePage;
