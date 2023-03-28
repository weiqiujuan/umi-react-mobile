import './index.less';
import { Image } from 'antd-mobile';
import { history } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <div className={''}
           style={{
             position:'relative',
             height: '87vh',
             backgroundSize: '100%',
             backgroundImage: `url('https://storage.360buyimg.com/imgtools/6ed9ab426c-90705870-c928-11ed-b08f-234844faa103.png')`,
           }}>
        <div className={'flex items-center'} style={{position: 'absolute', bottom: 20, left:16}}>
          <Image width={28} height={28}
                 fit='cover'
                 style={{ borderRadius: '100%' }}
                 src={'https://storage.360buyimg.com/imgtools/a885f36997-1dadabd0-cd42-11ed-852f-75bca1afe312.jpeg'}/>
          <div className={'ml-16'}>
            <div className={'font-semibold text-15'}>weiqiujuan</div>
            <div className={'font-medium text-13'}>@2023-03-28</div>
          </div>
        </div>
      </div>
      <div className='flex bg-white py-15 px-10'>
        <div className='text-13 py-20 font-semibold text-black mr-20 text-center'
             style={{ border: 'black 2px solid', width: '50%' }}
             onClick={() => {
               history.push('/login');
             }}>LOG IN
        </div>
        <div className='text-13 py-20 font-semibold bg-black text-white text-center' style={{ width: '50%' }}
             onClick={() => {
               history.push('/register');
             }}>REGISTER
        </div>
      </div>
    </div>
  );
}
