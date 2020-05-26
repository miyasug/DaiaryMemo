import { Platform, Dimensions } from 'react-native';


const XIPro_WIDTH = 375;
const XIPro_HEIGHT = 812;
const XI_WIDTH = 414;
const XI_HEIGHT = 896;
const X_PLUS_WIDTH = 414;
const X_PLUS_HEIGHT = 896;
const X_WIDTH = 375;
const X_HEIGHT = 812;
const EIGHT_PLUS_WIDTH = 414;
const EIGHT_PLUS_HEIGHT = 736;
const EIGHT_WIDTH = 375;
const EIGHT_HEIGHT = 667;
const SE_WIDTH = 320;
const SE_HEIGHT = 568;
const IPAD_PRO_129_WIDTH = 1024;
const IPAD_PRO_129_HEIGHT = 1366;
const IPAD_PRO_105_WIDTH = 1112;
const IPAD_PRO_105_HEIGHT = 834;
const IPAD_PRO_97_WIDTH = 768;
const IPAD_PRO_97_HEIGHT = 1024;


// iPhone XI Pro対応
export const iPhoneXIPro = () => {
  const { width, height } = Dimensions.get('window');
  return (
      // Platform.OS === 'ios' &&
      width === XIPro_WIDTH && height === XIPro_HEIGHT
  );
}
// iPhone XI対応
export const iPhoneXI = () => {
  const { width, height } = Dimensions.get('window');
  return (
      // Platform.OS === 'ios' &&
      width === XI_WIDTH && height === XI_HEIGHT
  );
}

// iPhone X Plus対応
export const iPhoneXPlus = () => {
  const { width, height } = Dimensions.get('window');
  return (
      // Platform.OS === 'ios' &&
      width === X_PLUS_WIDTH && height === X_PLUS_HEIGHT
  );
}

// iPhone X対応
export const iPhoneX = () => {
  const { width, height } = Dimensions.get('window');
  return (
      // Platform.OS === 'ios' &&
      width === X_WIDTH && height === X_HEIGHT
  );
}

// iPhone 8 Plus対応
export const iPhoneEightPlus = () => {
  const { width, height } = Dimensions.get('window');
  return (
      width === EIGHT_PLUS_WIDTH && height === EIGHT_PLUS_HEIGHT
  );
}

// iPhone 8対応（iPhone 6s Plus、iPhone 6 Plus、iPhone 7、
//              iPhone 6s、iPhone 6）
export const iPhoneEight = () => {
  const { width, height } = Dimensions.get('window');
  return (
      width === EIGHT_WIDTH && height === EIGHT_HEIGHT
  );
}

// iPhone SE対応
export const iPhoneSe = () => {
  const { width, height } = Dimensions.get('window');
  return (
      width === SE_WIDTH && height === SE_HEIGHT
  );
}

// iPad Pro 12.9-inch対応
export const iPadPro129 = () => {
  const { width, height } = Dimensions.get('window');
  return (
      width === IPAD_PRO_129_WIDTH && height === IPAD_PRO_129_HEIGHT
  );
}

// iPad Pro 10.5-inch対応
export const iPadPro105 = () => {
  const { width, height } = Dimensions.get('window');
  return (
      width === IPAD_PRO_105_WIDTH && height === IPAD_PRO_105_HEIGHT
  );
}

// iPad Pro (9.7-inch)対応（iPad Air 2、iPad Mini 4）
export const iPadPro97 = () => {
  const { width, height } = Dimensions.get('window');
  return (
      width === IPAD_PRO_97_WIDTH && height === IPAD_PRO_97_HEIGHT
  );
}