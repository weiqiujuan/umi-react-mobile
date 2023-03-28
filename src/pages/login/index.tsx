import './index.less';
import backIcon from '../../assets/img/backIcon.png';
import ImgIcon from '@/components/ImgIcon';
import { Input } from 'antd-mobile';
import { useState } from 'react';

export default function Register() {
  const [valueEmail, setEmailValue] = useState('');
  const [valuePassword, setPasswordValue] = useState('');

  return (
    <div className={'py-20 px-20 bg-white'}>
      <div onClick={() => {
        history.go(-1);
      }}>
        <ImgIcon src={backIcon} width={16} height={16} />
      </div>
      <div className={'text-black font-semibold text-36 my-32'}>
        Login
      </div>
      <>
        <div className={'mb-16'}>
          <div className={'border-black border-2 px-17 py-15'}>
            <Input
              type={'email'}
              placeholder='Email address'
              value={valueEmail}
              onChange={val => {
                setEmailValue(val);
              }}
              style={{
                '--color': 'rgba(0, 0, 0)',
                '--font-size': '15px',
                '--placeholder-color': 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </div>
        <div className={'mb-16'}>
          <div className={'border-black border-2 mb-16 px-17 py-15'}>
            <Input
              type={'password'}
              placeholder='Password'
              value={valuePassword}
              onChange={val => {
                setPasswordValue(val);
              }}
              style={{
                '--color': 'rgba(0, 0, 0, 0.5)',
                '--font-size': '16px',
                '--placeholder-color': 'rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </div>
      </>
      <div className={'bg-black font-semibold text-white text-16 text-center rounded-6 py-16'}>
        LOGIN
      </div>
    </div>
  );
}
