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



import {useEffect, useState} from "react";
import axios from "axios";
import {useTelegram} from "../../hooks/useTelegram";
import {getAvatarByName} from "../../utils/getAvatarByName";


const avatarList = [
    {
        avatar_name: 'no-ava',
        name: 'без авы',
    },

    {
        avatar_name: 'beta-ava',
        name: 'ава бета-тестера',
    },

    {
        avatar_name: 'shisha-ava',
        name: 'крупная шишка',
    },
    {
        avatar_name: 'jerremy-ava',
        name: 'убитая джереми',
    },


]

const ProfilePage = () => {

    const [activeDailyModal, setActiveDailyModal] = useState(false);
    const [activeChangeAvaModal, setActiveChangeAvaModal] = useState(false);
    const [user, setUser] = useState("usr");
    const [leaderboard, setLeaderboard] = useState([]);
    const [dailyRewardDay, setDailyRewardDay] = useState(1);
    const [isDailyRewardCollected, setIsDailyRewardCollected] = useState(false);
    const [money, setMoney] = useState(0);
    const [avatar, setAvatar] = useState(baseAvatar);


    const {tgUser} = useTelegram()
    const userId = tgUser?.id || 1072604443;
    //6315284021
    //1072604443

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userId}`)
            .then(response => {
                setUser(response.data);
                setMoney(response.data[0].money);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard`)
            .then(response => {
                setLeaderboard(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userId}/dailyRewardDay`)
            .then(response => {
                setDailyRewardDay(response.data[0].daily_reward_day);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userId}/isDailyRewardCollected`)
            .then(response => {
                setIsDailyRewardCollected(response.data[0].is_daily_reward_collected);
            })
            .catch(error => {
                console.error(error);
            });
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userId}/ava`)
            .then(response => {
                setAvatar(getAvatarByName(response.data[0].avatar_name));
            })
            .catch(error => {
                console.error(error);
            });
    }, [userId]);

    const dailyArr = [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
    ]


    return(
        <>
            <div className="mainContainer">
                <div className="up-side-container">
                    <div className='up-side'>
                        <UserInfo
                            avatar={avatar}
                            coin={coin}
                            balance={money}
                            name={user[0].user_name}
                            setModalActive={setActiveChangeAvaModal}
                            modalActive={activeChangeAvaModal}
                        />
                        <Button
                            width={100}
                            height={33}
                            fontSize={8}
                            text={'подключить кошелек'}
                            borderRadius={5}
                        />
                    </div>
                </div>

                <div className="center-side">

                    <Button
                        width={250}
                        height={42}
                        fontSize={14}
                        text={'пригласить друга'}
                        borderRadius={10}
                        marginBottom={25}
                        link={'/friends'}
                    />

                    <Button
                        width={250}
                        height={42}
                        fontSize={12}
                        text={'забрать ежедневный бонус'}
                        borderRadius={5}
                        marginBottom={30}
                        setModalActive={setActiveDailyModal}
                        modalActive={activeDailyModal}
                    />

                    <LeaderBoard
                        userList={leaderboard}
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
                            {dailyArr.map((value, index) => {

                                let classNames = 'daily-reward-item'
                                const currentDay = index + 1
                                let useOnClick = false

                                if (currentDay < dailyRewardDay) {
                                    classNames = 'daily-reward-item collected'
                                }

                                if (currentDay  === Number(dailyRewardDay) && !isDailyRewardCollected) {
                                    classNames = 'daily-reward-item current'
                                    useOnClick = true
                                } else if (currentDay  === Number(dailyRewardDay) && isDailyRewardCollected) {
                                    classNames = 'daily-reward-item collected'
                                }



                                const coinsReward = currentDay < 7 ? currentDay * 10 : 70

                                const collect = () => {
                                    setIsDailyRewardCollected(true)
                                    setMoney(money + coinsReward)
                                    axios.post(`${process.env.REACT_APP_API_URL}/api/user/${userId}/isDailyRewardCollected`)
                                        .then(response => {
                                            setIsDailyRewardCollected(response.data[0].is_daily_reward_collected);
                                        })
                                        .catch(error => {
                                            console.error(error);
                                        });
                                    axios.post(`${process.env.REACT_APP_API_URL}/api/user/${userId}/addMoney/${coinsReward}`, {}, {
                                        headers: {
                                            Authorization: process.env.REACT_APP_REQ_TOKEN
                                        }
                                    })
                                        .then(response => {
                                            setMoney(response.data[0].money);
                                        })
                                        .catch(error => {
                                            console.error(error);
                                        });
                                }

                                return (
                                    <div onClick={useOnClick ? collect : () => {} } className={classNames}>
                                        <p className='days'>день {currentDay}</p>
                                        <p className='reward'>
                                            {coinsReward}
                                            <img src={coin} alt='монета'/>
                                        </p>
                                    </div>
                                )
                            })}
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
                                {avatarList.map((avatar) => {

                                    const changeAva = () => {
                                        axios.post(`${process.env.REACT_APP_API_URL}/api/user/${userId}/changeAva/${avatar.avatar_name}`)
                                            .then(response => {
                                                setAvatar(getAvatarByName(response.data[0].avatar_name));

                                                axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard`)
                                                    .then(response => {
                                                        setLeaderboard(response.data);
                                                    })
                                                    .catch(error => {
                                                        console.error(error);
                                                    })

                                            })
                                            .catch(error => {
                                                console.error(error);
                                            });
                                    }

                                    return(
                                        <div className='change-ava-item'>
                                            <img src={getAvatarByName(avatar.avatar_name)} alt="avatar" />
                                            {avatar.name}
                                            <Button
                                                width={75}
                                                height={15}
                                                fontSize={8}
                                                text={'использовать'}
                                                borderRadius={5}
                                                onClick={changeAva}
                                                buttonType={'using'}
                                            />
                                        </div>
                                    )
                                })}



                            </div>
                        </div>


                        <Button
                            width={155}
                            height={35}
                            fontSize={20}
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
