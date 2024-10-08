import './friendsPage.css'

import friendsImg from '../../images/friends.png'
import coin from '../../images/coin.png'
import premium from '../../images/premium.png'

import Button from "../../components/button/Button";
import {useEffect, useState} from "react";
import axios from "axios";
import {useTelegram} from "../../hooks/useTelegram";

const FriendsPage = () => {

    const shareUrl = 'https://t.me/HkaTeamTestBot'
    const shareText = 'поделиться ссылкой'

    const [friends, setFriends] = useState([])

    const {tgUser} = useTelegram()
    const userId = tgUser?.id || 1072604443;

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userId}/friends`)
            .then(response => {
                setFriends(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [userId]);

    return(
        <div className="friends-page-container">
            <img src={friendsImg} alt='у тебя нет друзей'/>
            <div className="friends-invite-text">
                <p>пригласи друга</p>
                <p>получи бонусы</p>
            </div>
            <div className="friends-invite-info">
                <div className="friends-invite-info-item">
                    <div className="friends-invite-info-prize">
                        +300
                        <img src={coin} alt='нет картинки бля'/>
                    </div>
                    <div className="friends-invite-info-text">
                        за обычного друга
                    </div>
                </div>
                <div className="friends-invite-info-item">
                    <div className="friends-invite-info-prize">
                        +800
                        <img src={coin} alt='нет картинки бля'/>
                    </div>
                    <div className="friends-invite-info-text">
                        за друга мажора
                        <img src={premium} alt='блин, картика потярялась'/>
                    </div>
                </div>

            </div>

            <Button
                width={200}
                height={35}
                fontSize={15}
                text={'поделиться ссылкой'}
                borderRadius={10}
                marginBottom={20}
                href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}
            />

            <div className="friends">
                <p>друзья:</p>
                <div className='friends-list'>

                    {friends.map((friend) => (
                        <div className='friends-list-item'>
                            <div className="friend-name">
                                <p>{friend.user_name}</p>
                                {friend.isPremium ? <img src={premium} alt='не грузануло картинку'/> : ''}
                            </div>
                            <div className="friend-cost">
                                <p>{friend.isPremium ? '+800' : '+300'}</p>
                                <img src={coin} alt='не грузануло картинку'/>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <Button
                width={150}
                height={35}
                fontSize={18}
                text={'назад'}
                borderRadius={10}
                marginBottom={30}
                link={'/'}
            />

        </div>

    )
}

export default FriendsPage;
