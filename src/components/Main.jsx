// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (boolean, null, undefined 와 같은 값은 렌더링 되지 않음)
// 3. 최상위 태그는 반드시 하나여야만 한다.
import './Main.css';

const Main = () => {
  const user = {
    name: 'hoon',
    isLogin: true,
  };

  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
};

export default Main;
