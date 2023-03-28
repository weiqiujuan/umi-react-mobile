import './index.less';
import backIcon from '../../assets/img/backIcon.png';
import ImgIcon from '@/components/ImgIcon';
import { Input } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { emailReg } from '@/constant';

export default function Register() {
  const [valueEmail, setEmailValue] = useState('');
  const [valuePassword, setPasswordValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailTips, setEmailTips] = useState('');

  useEffect(() => {
    if (!valueEmail.trim()) {
      setIsValidEmail(true);
      return;
    }
    const isTrue = emailReg.test(valueEmail);
    setIsValidEmail(isTrue);
    setEmailTips('请输入合法的邮箱');
  }, [valueEmail]);

  return (
    <div className={'py-20 px-20 bg-white'}>
      <div onClick={() => {
        history.go(-1);
      }}>
        <ImgIcon src={backIcon} width={16} height={16} />
      </div>
      <div className={'text-black font-semibold text-36 my-32'}>
        Register
      </div>
      <>
        <div className={'mb-16'}>
          <div className={'border-black border-2 px-17 py-15'}>
            <Input
              placeholder='Email address'
              value={valueEmail}
              type={'email'}
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
          {!isValidEmail && <div className={'text-12 mt-7 text-[#D82E57]'}>{emailTips}</div>}
        </div>
        <div className={'mb-16'}>
          <div className={'border-black border-2 mb-16 px-17 py-15'}>
            <Input
              placeholder='Create password'
              value={valuePassword}
              type={'password'}
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
        NEXT
      </div>
    </div>
  );
}
