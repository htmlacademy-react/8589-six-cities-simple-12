import HomePage from '../../pages/homepage/main';

const Setting = {
  placeCount: 108,
} as const;

function App(): JSX.Element {
  return (
    <HomePage placeCount = { Setting.placeCount } />
  );
}

export default App;
