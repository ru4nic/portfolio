import { Dispatch, SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../pages/menu';
import AnimatedPage from './AnimatedPage';

type MainLayoutProps = {
  lang: string;
  setLang: Dispatch<SetStateAction<'ru' | 'en'>>;
};
const MainLayout = ({ lang, setLang }: MainLayoutProps) => {
  return (
    <>
      <Menu lang={lang} setLang={setLang} />
      <AnimatedPage>
        <Outlet />
      </AnimatedPage>
    </>
  );
};

export default MainLayout;
