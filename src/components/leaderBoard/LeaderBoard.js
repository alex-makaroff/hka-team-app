import './leaderBoard.css'


const LeaderBoard = (props) => {
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
                    <div key={index} className="user">

                        <p className="number">{user.id}</p>

                        <p className="name">
                            {user.name}
                            <img src={user.avatar} alt="нет картинки - нет аватарки"/>
                        </p>


                        <p className="coin-count">
                            {user.coinsCount}
                            <img src={props.coin} alt="нет картинки - нет монетки"/>
                        </p>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeaderBoard;
