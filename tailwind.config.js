const projectConfig = require('./tailwind.project');
const convert = require('color-convert');

const pxNumber = (() => {
  let obj = {};
  for (let index = 1; index < 101; index++) {
    obj[index] = index + 'px';
  }
  return obj;
})();

const colorRgba = (() => {
  return projectConfig.colors;
  let obj = {};
  let c = projectConfig.colors;
  Object.keys(c).forEach((e) => {
    let value = c[e];
    if (value.indexOf('#') == 0) {
      let arr = convert.hex.rgb(value.replace('#', ''));
      obj[e] = `rgba(${arr.join(',')},1)`;
    } else {
      obj[e] = c[e];
    }
  });
  return obj;
})();
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  theme: {
    extend: {
      /**
       * 颜色主题等控制，需要和antMobile做联动，本地默认自动执行
       */
      colors: colorRgba,
      padding: pxNumber,
      spacing: pxNumber,
      margin: pxNumber,
      borderRadius: {
        ...pxNumber,
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      width: pxNumber,
      height: pxNumber,
      borderWidth: pxNumber,
      minWidth: pxNumber,
      minHeight: pxNumber,
      maxWidth: pxNumber,
      maxHeight: pxNumber,
      gap: pxNumber,
      zIndex: () => {
        let obj = {};
        for (let index = 1; index < 500; index++) {
          obj[index] = index;
        }
        return obj;
      },
      lineHeight: () => {
        let obj = {};
        [1, 1.25, 1.5, 2, 2.25, 2.5, 3].forEach((e) => {
          obj[(e + '').replace('.', '_')] = e;
        });
        return obj;
      },
      fontSize: (() => {
        let obj = {};
        for (let index = 0; index < 101; index++) {
          obj[index] = [
            index + 'px',
            (() => {
              let a = {};
              // if (index >= 12) {
              //   a.lineHeight = index * 1.47059 + 'px';
              // }
              return a;
            })(),
          ];
        }
        return obj;
      })(),
      boxShadow: {
        tab: '0 1px 16px rgba(0, 0, 0, 0.1)',
        'revers-tab': '0 -1px 16px rgba(0, 0, 0, 0.1)',
        sm: '0 1px 2px 0 rgba(0 ,0, 0 , 0.05)',
        default:
          '0 1px 3px 0 rgba(0 ,0 ,0 , 0.1), 0 1px 2px -1px rgba(0 ,0 ,0 , 0.1)',
        md: ' 0 4px 6px -1px rgba(0 ,0 ,0 , 0.1), 0 2px 4px -2px rgba(0 ,0 ,0 , 0.1)',
        lg: ' 0 10px 15px -3px rgba(0 ,0 ,0 , 0.1), 0 4px 6px -4px rgba(0 ,0 ,0 , 0.1)',
        xl: ' 0 20px 25px -5px rgba(0 ,0 ,0 , 0.1), 0 8px 10px -6px rgba(0 ,0 ,0 , 0.1)',
        '2xl': ' 0 25px 50px -12px rgba(0 ,0 ,0 , 0.25)',
        inner: ' inset 0 2px 4px 0 rgba(0 ,0 ,0 , 0.05)',
        life: '0 2px 10px 0 rgba(0,0,0,0.06)',
        none: '0 0 #0000',
      },
      fontFamily: {
        JD: 'JDLANGZHENGTI',
        num: 'PingFangSC-Regular',
      },
    },
  },
}
