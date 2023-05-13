import { FC } from 'react';

import iconFacebook from '../assets/images/icon-facebook.svg';
import iconDown from '../assets/images/icon-down.svg';
import iconInstagram from '../assets/images/icon-instagram.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconUp from '../assets/images/icon-up.svg';
import iconYoutube from '../assets/images/icon-youtube.svg';

interface Props {
  type: string;
  username: string;
  followers: number | string;
  increase: boolean;
  recents: number;
}

const Social: FC<Props> = ({
  type,
  username,
  followers,
  increase,
  recents,
}): JSX.Element => {
  return (
    <div
      className={`relative bg-themes-dark-card 3xl:px-7 3xl:py-12 2xl:px-7 2xl:py-6 xl:py-5 lg:px-6 lg:py-4 md:px-5 md:py-4 sm:px-4 sm:py-6 rounded-sm grid grid-rows-max-content_1fr_max-content justify-items-center items-center gap-y-5 cursor-pointer hover:bg-themes-dark-cardHover transition-all duration-200 ease-in-out`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 rounded-t-sm ${
          type === 'facebook'
            ? 'bg-primary-facebook'
            : type === 'twitter'
            ? 'bg-primary-twitter'
            : type === 'instagram'
            ? 'bg-gradient-to-r from-primary-instagram-from to-primary-instagram-to'
            : 'bg-primary-youtube'
        }`}
      ></div>

      <div className="grid grid-cols-repeat(2_max-content) gap-x-2 items-center">
        <img
          src={
            type === 'facebook'
              ? iconFacebook
              : type === 'twitter'
              ? iconTwitter
              : type === 'instagram'
              ? iconInstagram
              : iconYoutube
          }
          alt={type}
        />
        <p className="font-medium lg:text-base md:text-sm sm:text-base text-themes-dark-text-blue">
          {username}
        </p>
      </div>

      <div className="grid grid-rows-repeat(2_max-content) gap-y-1 justify-items-center">
        <h1 className="font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-4xl text-themes-dark-text-white">
          {followers}
        </h1>
        <p className="uppercase font-light 2xl:text-sm xl:text-xs lg:text-[12px] md:text-[10px] sm:text-sm text-themes-dark-text-blue lg:tracking-followers md:tracking-[4px] sm:tracking-[6px]">
          {type === 'youtube' ? 'subscribers' : 'followers'}
        </p>
      </div>

      <div className="grid grid-cols-repeat(2_max-content) items-center gap-x-2">
        <img src={increase ? iconUp : iconDown} alt="up" />
        <p
          className={`font-medium lg:text-sm md:text-xs sm:text-xs ${
            increase ? 'text-primary-green' : 'text-primary-red'
          }`}
        >
          {recents} Today
        </p>
      </div>
    </div>
  );
};

export default Social;
