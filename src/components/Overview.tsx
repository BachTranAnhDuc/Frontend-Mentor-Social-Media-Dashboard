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
    <div className="bg-themes-dark-card px-7 py-5 rounded-sm grid grid-cols-card_overview grid-rows-card_overview gap-x-2 gap-y-4 items-center cursor-pointer hover:bg-themes-dark-cardHover transition-all duration-200 ease-in-ou">
      <h2 className="font-semibold text-base text-themes-dark-text-blue">
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
      />

      <p className="font-bold text-3xl text-themes-dark-text-white">{amount}</p>

      <div className="grid grid-cols-repeat(2_max-content) gap-x-1 items-center">
        <img src={increase ? iconUp : iconDown} alt="up" />
        <p className="font-medium text-sm text-primary-green">
          {percents}
          <span>%</span>
        </p>
      </div>
    </div>
  );
};

export default Overview;
