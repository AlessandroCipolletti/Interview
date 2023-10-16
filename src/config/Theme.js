import * as palette from './palette'

const spacingUnit = 16

const Theme = {
  palette: {
    ...palette,
  },
  spacing: {
    size1: `${spacingUnit * 0.25}px`, // 4px
    size2: `${spacingUnit * 0.375}px`, // 6px
    size3: `${spacingUnit * 0.5}px`, // 8px
    size4: `${spacingUnit * 0.625}px`, // 10px
    size5: `${spacingUnit * 0.75}px`, // 12px
    size6: `${spacingUnit * 1.0}px`, // 16px
    size7: `${spacingUnit * 1.25}px`, // 20px
    size8: `${spacingUnit * 1.5}px`, // 24px
    size9: `${spacingUnit * 1.75}px`, // 28px
    size10: `${spacingUnit * 2.0}px`, // 32px
    size11: `${spacingUnit * 2.5}px`, // 40px
    size12: `${spacingUnit * 3.0}px`, // 48px
    size13: `${spacingUnit * 3.5}px`, // 56px
    size14: `${spacingUnit * 4.0}px`, // 64px
    size15: `${spacingUnit * 4.75}px`, // 76px
    size16: `${spacingUnit * 5.5}px`, // 88px
    size17: `${spacingUnit * 6.25}px`, // 100px
    size18: `${spacingUnit * 7.0}px`, // 112px
    size19: `${spacingUnit * 8.0}px`, // 128px
    size20: `${spacingUnit * 9.5}px`, // 152px
    size21: `${spacingUnit * 11.0}px`, // 176px
    size22: `${spacingUnit * 12.5}px`, // 200px
    size23: `${spacingUnit * 14.5}px`, // 232px
    size24: `${spacingUnit * 16.5}px`, // 264px
    size25: `${spacingUnit * 18.75}px`, // 300px
    size26: `${spacingUnit * 20.5}px`, // 328px
    size27: `${spacingUnit * 22.5}px`, // 360px
    size28: `${spacingUnit * 25.0}px`, // 400px
    size29: `${spacingUnit * 27.0}px`, // 432px
    size30: `${spacingUnit * 29.0}px`, // 464px
    size31: `${spacingUnit * 31.25}px`, // 500px
    size32: `${spacingUnit * 34.5}px`, // 552px
    size33: `${spacingUnit * 37.5}px`, // 600px
    size34: `${spacingUnit * 40.5}px`, // 648px
    size35: `${spacingUnit * 44.0}px`, // 704px
    size36: `${spacingUnit * 48.0}px`, // 768px
    size37: `${spacingUnit * 53.5}px`, // 856px
    size38: `${spacingUnit * 59.5}px`, // 952px
    size39: `${spacingUnit * 64.0}px`, // 1024px
    size40: `${spacingUnit * 75.0}px`, // 1200px
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  timing: {
    fadeAnimation: {
      string: '0.3s',
      ms: 300,
    },
    UIAnimations: {
      fastest: {
        string: '0.1s',
        ms: 100,
      },
      fast: {
        string: '0.3s',
        ms: 200,
      },
      medium: {
        string: '0.5s',
        ms: 500,
      },
      slow: {
        string: '1s',
        ms: 1000,
      },
    },
    shakeAnimation: {
      string: '1s',
      ms: 1000,
    },
  },
}

export default Theme
