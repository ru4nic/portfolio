import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

import { AnimatePresence } from 'framer-motion';
import Home from './components/pages/home';
import MainLayout from './components/layout/MainLayout';
import About from './components/pages/about';
import Contacts from './components/pages/contacts';
import Portfolio from './components/pages/portfolio';
import { Wrapper } from './components/layout/layout_styles';

function App() {
  const location = useLocation();
  const [lang, setLang] = useState<'ru' | 'en'>('ru');

  useEffect(() => {
    const initialLanguage = localStorage.getItem('language'); //Получаем из localstorage данные
    if (!initialLanguage) {
      //если данных нет, то ничего не делаем
      return;
    }
    //Если данные есть, то устанавливаем соответствующий язык
    if (initialLanguage === 'ru') {
      setLang('ru');
    }
    if (initialLanguage === 'en') {
      setLang('en');
    }
  }, [setLang]);
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AnimatePresence mode="wait" initial={false}>
          <Routes key={location.pathname} location={location}>
            <Route
              path="/"
              element={<MainLayout lang={lang} setLang={setLang} />}
            >
              <Route index element={<Home lang={lang} />} />
              <Route path="about" element={<About lang={lang} />} />
              <Route path="contacts" element={<Contacts lang={lang} />} />
              <Route path="portfolio" element={<Portfolio lang={lang} />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
