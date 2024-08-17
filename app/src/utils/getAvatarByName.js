import baseAvatar from "../images/baseAvatar.png";
import betaAva from "../images/betaAva.png";
import shishAva from "../images/shisha-ava.png";
import jerremyAva from "../images/jerremy-ava.png";

export const getAvatarByName = (avatar_name) => {
    if (avatar_name === 'no-ava') return baseAvatar;
    if (avatar_name === 'beta-ava') return betaAva;
    if (avatar_name === 'shisha-ava') return shishAva;
    if (avatar_name === 'jerremy-ava') return jerremyAva;
}
