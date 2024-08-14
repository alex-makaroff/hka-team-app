import './jerremy.css'

import jerremyBg1 from '../../images/jerremy-bg-1.png'
import jerremyBg2 from '../../images/jerremy-bg-2.png'
import jerremyBg3 from '../../images/jerremy-bg-3.png'
import jerremy1 from '../../images/jerremy1.png'
import jerremy2 from '../../images/jerremy2.png'
import jerremy3 from '../../images/jerremy3.png'

const Jerremy = (props) => {

    let jerremyPlaceStyles = {}
    let jerremyImgStyles = {}
    let jerremyImg

    if(props.frameNumber === 1 ) {
        jerremyPlaceStyles.backgroundImage = `url(${jerremyBg1})`
        jerremyImgStyles.bottom = '-12px'
        jerremyImgStyles.left = '24px'
        jerremyImg = jerremy1
    }

    if(props.frameNumber === 2 ) {
        jerremyPlaceStyles.backgroundImage = `url(${jerremyBg2})`
        jerremyImgStyles.bottom = '-12px'
        jerremyImgStyles.left = '30px'
        jerremyImg = jerremy2
    }

    if(props.frameNumber === 3 ) {
        jerremyPlaceStyles.backgroundImage = `url(${jerremyBg3})`
        jerremyImgStyles.bottom = '-22px'
        jerremyImgStyles.left = '16px'
        jerremyImg = jerremy3
    }

    return(
        <div style={jerremyPlaceStyles} className="jerremy-place">
            <img style={jerremyImgStyles} src={jerremyImg} alt="девочка не пришла" />
        </div>
    )
}

export default Jerremy;
