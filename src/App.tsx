import { FC, ReactElement, useState } from 'react';

import { Overview, Social } from './components';

import socialData from './until/social.json';
import overviewData from './until/overview.json';

const App: FC = (): ReactElement => {
  // const [getCheck, setCheck] = useState<boolean>(true);

  // const handleChange = () => {
  //   setCheck(!getCheck);
  //   console.log('Click toggle');
  // };

  return (
    <section className="bg-themes-dark-very-blue-bg h-screen relative">
      <div className="bg-themes-dark-very-blue-top w-full h-72 rounded-b-3xl"></div>

      <div className="w-full absolute top-0 left-0 px-56 py-14">
        <div className="w-full mb-12 grid grid-cols-1fr-max-content">
          <div className="">
            <h1 className="font-bold text-3xl text-themes-dark-text-white tracking-wider">
              Social Media Dashboard
            </h1>
            <p className="font-medium text-base text-themes-dark-text-blue">
              Total Followers: 23,004
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 items-center">
            <p className="font-medium text-base text-themes-dark-text-white">
              Dark Mode
            </p>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-7 mb-12">
          {socialData.map((el, index) => {
            const { id, type, username, numbers, increase, recent } = el;

            return (
              <Social
                key={id}
                type={type}
                username={username}
                followers={numbers}
                increase={increase}
                recents={recent}
              ></Social>
            );
          })}
        </div>

        <div className="grid gap-y-6">
          <h1 className="font-bold text-2xl text-themes-dark-text-white">
            Overview - Today
          </h1>

          <div className="grid grid-cols-4 gap-7">
            {overviewData.map((el) => {
              return <Overview key={el.id} {...el}></Overview>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
