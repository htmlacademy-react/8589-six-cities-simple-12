import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import HomePageScreen from '../../pages/homepage/homepage';
import NotFoundScreen from '../../pages/page-not-found/page-not-found';
import LoginScreen from '../../pages/login/login';
import RoomPropertyScreen from '../../pages/room-property/room-property';

const Setting = {
  placeCount: 108,
} as const;

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<HomePageScreen placeCount={Setting.placeCount} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Login} element={<RoomPropertyScreen />} />

        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
