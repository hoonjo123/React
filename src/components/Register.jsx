import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={onChangeName}
          placeholder={'이름'}
        ></input>
      </div>

      <div>
        <input value={birth} onChange={onChangeBirth} type="date"></input>
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea
          placeholder="자기소개를 입력해주세욤"
          value={bio}
          onChange={onChangeBio}
        ></textarea>
      </div>
    </div>
  );
};

export default Register;
