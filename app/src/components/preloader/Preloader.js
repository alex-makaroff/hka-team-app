import image1 from '../../images/avatar.png'
import image2 from '../../images/avatar-green.png'
import image3 from '../../images/background.png'
import image4 from '../../images/baseAvatar.png'
import image5 from '../../images/buttonBackground.png'
import image6 from '../../images/cannabis.png'
import image7 from '../../images/cannabis-green.png'
import image8 from '../../images/coin.png'
import image9 from '../../images/fight.png'
import image10 from '../../images/fight-green.png'
import image11 from '../../images/friends.png'
import image12 from '../../images/jerremy1.png'
import image13 from '../../images/jerremy2.png'
import image14 from '../../images/jerremy3.png'
import image15 from '../../images/jerremy-bg-1.png'
import image16 from '../../images/jerremy-bg-2.png'
import image17 from '../../images/jerremy-bg-3.png'
import image18 from '../../images/joint.png'
import image19 from '../../images/joint-green.png'
import image20 from '../../images/premium.png'
import image21 from '../../images/shisha.png'
import image22 from '../../images/shisha1.png'
import image23 from '../../images/dailyRewardBg.png'
import image24 from '../../images/dailyRewardBg2.png'

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
]

const Preloader = () => {
    return(
        <>
            {images.map((image) => (
                <img style={{display: 'none'}} src={image} alt=''/>
            ))}
        </>

    )
}

export default Preloader;
