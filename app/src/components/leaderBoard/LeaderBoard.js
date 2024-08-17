import './leaderBoard.css'
import {useTelegram} from "../../hooks/useTelegram";
import {getAvatarByName} from "../../utils/getAvatarByName";

const LeaderBoard = (props) => {

    const {tgUser} = useTelegram()
    const userId = tgUser?.id || 1072604443;



    return(
        <div className="leader-board-container">
            <p className="title">лидеры</p>
            <div className="users">
                <div className="user-title user">

                    <p className="number">#</p>

                    <p className="name">имя</p>

                    <p className="coin-count">
                        количество
                        <img src={props.coin} alt="нет картинки - нет монетки"/>
                    </p>


                </div>
                {props.userList.map((user, index) => (
                    <div key={index} className={Number(user.tg_id) === Number(userId) ? 'user current-user' : 'user'}>

                        <p className="number">{index + 1}</p>

                        <p className="name">
                            {user.user_name}
                            <img src={getAvatarByName(user.avatar_name)} alt="нет картинки - нет аватарки"/>
                        </p>


                        <p className="coin-count">
                            {user.money}
                            <img src={props.coin} alt="нет картинки - нет монетки"/>
                        </p>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeaderBoard;
