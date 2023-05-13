import { FC, ReactElement, useState } from 'react';

import { Overview, Social } from './components';

import socialData from './until/social.json';
import overviewData from './until/overview.json';

const App: FC = (): ReactElement => {
  const [isDark, setDark] = useState<boolean>(true);

  const handleChange = () => {
    setDark(!isDark);
    console.log('Click toggle');
  };

  return (
    <main
      className={`${
        isDark ? 'dark' : ''
      } transition-all duration-1000 ease-linear`}
    >
      <section className="dark:bg-themes-dark-very-blue-bg bg-themes-light-very-pale min-h-screen">
        {/* <div className="bg-primary-instagram-to w-full 2xl:h-72 xl:h-56 lg:h-48 md:h-48 sm:h-36 rounded-b-3xl"></div> */}

        <div className="dark:bg-themes-dark-very-blue-bg bg-themes-light-very-white relative h-full 3xl:px-56 3xl:py-14 2xl:py-8 xl:py-6 lg:py-8 lg:px-20 md:py-10 md:px-12 sm:p-5 grid grid-rows-repeat(3_max-content) 3xl:gap-y-12 2xl:gap-y-7 xl:gap-y-7 lg:gap-8 md:gap-9 sm:gap-12 z-10 before:absolute dark:before:bg-themes-dark-very-blue-top before:bg-themes-light-very-pale before:w-full before:3xl:h-72 before:2xl:h-64 before:xl:h-56 before:lg:h-52 before:sm:h-56 before:rounded-b-3xl before:-z-10">
          <div className="w-full grid md:grid-cols-1fr-max-content md:grid-rows-none sm:grid-rows-2 sm:gap-y-4">
            <div className="">
              <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-xl dark:text-themes-dark-text-white text-themes-light-text-verydark tracking-wider">
                Social Media Dashboard
              </h1>
              <p className="font-medium lg:text-base md:text-sm sm:text-xs dark:text-themes-dark-text-blue text-themes-light-text-dark">
                Total Followers: 23,004
              </p>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1fr-max-content gap-x-4 items-center md:pt-0 sm:pt-2 md:border-t-0 sm:border-t-2 dark:sm:border-themes-dark-cardHover sm:border-[#d3d3e4]">
              <p className="font-medium md:text-base sm:text-sm dark:text-themes-dark-text-white text-toggle-light">
                Dark Mode
              </p>

              <label className="switch">
                <input type="checkbox" onClick={handleChange} />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-4 md:grid-rows-none sm:grid-rows-4 md:gap-x-7 sm:gap-y-7">
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
            <h1 className="font-bold lg:text-2xl md:text-xl sm:text-xl text-themes-dark-text-white">
              Overview - Today
            </h1>

            <div className="grid md:grid-cols-4 md:gap-7 sm:grid-cols-1 sm:gap-y-7 md:mb-0 sm:mb-5">
              {overviewData.map((el) => {
                return <Overview key={el.id} {...el}></Overview>;
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
