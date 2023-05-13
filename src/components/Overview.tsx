import { FC } from 'react';

import iconFacebook from '../assets/images/icon-facebook.svg';
import iconDown from '../assets/images/icon-down.svg';
import iconInstagram from '../assets/images/icon-instagram.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';
import iconUp from '../assets/images/icon-up.svg';
import iconYoutube from '../assets/images/icon-youtube.svg';

interface Props {
  title: string;
  type: string;
  amount: number | string;
  increase: boolean;
  percents: number;
}

const Overview: FC<Props> = ({
  title,
  type,
  amount,
  increase,
  percents,
}): JSX.Element => {
  return (
    <div className="dark:bg-themes-dark-card bg-themes-light-card xl:px-7 xl:py-5 lg:px-5 lg:py-4 md:px-5 md:py-4 sm:px-8 sm:py-6 rounded-sm grid grid-cols-card_overview grid-rows-card_overview gap-x-2 gap-y-4 items-center cursor-pointer dark:hover:border-t-themes-dark-cardHover hover:bg-themes-light-cardHover transition-all duration-200 ease-in-ou">
      <h2 className="font-semibold text-base dark:text-themes-dark-text-blue text-themes-light-text-dark">
        {title}
      </h2>

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
        className="md:justify-self-end"
      />

      <p className="font-bold 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl dark:text-themes-dark-text-white text-themes-light-text-verydark">
        {amount}
      </p>

      <div className="grid grid-cols-repeat(2_max-content) gap-x-1 items-center">
        <img src={increase ? iconUp : iconDown} alt="up" />
        <p className="font-medium lg:text-sm md:text-xs sm:text-xs text-primary-green md:justify-self-end">
          {percents}
          <span>%</span>
        </p>
      </div>
    </div>
  );
};

export default Overview;
