import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
export const Colors = {
  primary: '#b8863d',
  secondary: '#E6E6E6',
  darkBlue: '#000E2B',
  inactiveColor: '#AAADC4',
  skyBlue: '#1E80C8',
  black: 'black',
  red: '#EF1E28',
  gray: '#E6E6E6',
  darkGray: '#919191',
  darkGray5: '#383838',
  white: '#FFFFFFFF',
  gold: '#b8863d',
  black1: '#252525',
};

const useStyle = () => {
  return StyleSheet.create({
    container: {
      width: width * 0.75,
      // height: CONTAINER_HEIGHT,
      // marginVertical: 0,
      marginTop: 20,
    },
    voucherLabel: {
      fontWeight: 'bold',
      fontSize: RFValue(14),
      color: Colors.primary,
    },
    voucherLabelContainer: {
      width: width * 0.7,
      alignSelf: 'center',
      marginTop: 10,
    },
    expiryLabel: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: RFValue(12),
    },
    thumbContainer: {
      width: width * 0.625,
      flexDirection: 'row',
      position: 'absolute',
      zIndex: 9,

      backgroundColor: 'blue',
    },

    thumb: {
      width: width * 0.75,
      height: height * 0.2,
      alignSelf: 'center',
      borderRadius: 20,
    },
    voucherValue: {
      fontWeight: 'bold',
      fontSize: RFValue(16),
      color: Colors.white,
    },

    idLabel: {
      fontWeight: 'bold',
      fontSize: RFValue(16),
      color: Colors.white,
    },
    borderWhite: {
      borderWidth: 2,
      borderColor: Colors.white,
    },
    moreInfoLabel: {
      color: 'white',
      fontSize: RFValue(9),
      paddingHorizontal: 10,
      letterSpacing: 1,
      fontWeight: 'bold',
    },
    moreInfoBtn: {
      height: (height * 0.5) / 12,
      width: width * 0.25,
      marginTop: 20,
      backgroundColor: 'black',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    detailContainer: {
      width: width * 0.7,
      // flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    descriptionTxt: {
      color: Colors.black,
    },
  });
};
export default useStyle;
