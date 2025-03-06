import './App.css';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={'블로그'} />
      <Button text={'카페'}>
        <div>자식 요소</div>
        <Header />
      </Button>
    </>
  );
}

export default App;
