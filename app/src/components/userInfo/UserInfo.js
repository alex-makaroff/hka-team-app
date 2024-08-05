import './userInfo.css'


const UserInfo = (props) => {
    return(
        <div className="container">
            <div className="user-avatar">
                <img  src={props.avatar} alt="не фартануло, братишка"/>
                <p className="change-avatar">поменять аву</p>
            </div>
            <div className="user-info">
                <p className="user-name">{props.name}</p>

                <div className="user-balance">
                    <img src={props.coin} alt="не фартануло, братишка"/>
                    <p>{props.balance}</p>
                </div>

            </div>
        </div>
    )
}

export default UserInfo;
