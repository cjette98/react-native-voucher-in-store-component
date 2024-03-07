import { StyleSheet, Dimensions, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = width * 0.2;
const LIST_CONTAINER_HEIGHT = (height - HEADER_HEIGHT) * 0.9;
const BTN_SIZE = 75;
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
      flex: 1,
      backgroundColor: Colors.black,
      alignItems: 'center',
    },
    headerContainer: {
      width,
      height: HEADER_HEIGHT,
      flexDirection: 'row',
    },
    backBtn: {
      width: HEADER_HEIGHT * 0.5,
      height: HEADER_HEIGHT,
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      paddingTop: 20,
    },
    rightBtn: {
      width: HEADER_HEIGHT * 0.5,
      height: HEADER_HEIGHT,
      paddingTop: 20,
    },
    headerTitleContainer: {
      width: width * 0.8,
      height: HEADER_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
    },
    brandStyle: {
      width: width * 0.4,
      height: HEADER_HEIGHT,
    },
    brandContainer: {
      width: width * 0.7,
      height: HEADER_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listContainer: {
      width,
      height: LIST_CONTAINER_HEIGHT,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
    },
    listWrapper: {
      width: width * 0.95,
      height: height * 0.9,
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
      paddingBottom: 5,
    },
    locationWrapper: {
      width: width * 0.95,
      height: height * 0.9,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: 'hidden',
    },
    successScreenContainer: {
      width: width * 0.95,
      height: Platform.OS === 'android' ? height : height * 0.9,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mapContainer: {
      width,
      height: height * 0.635,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listTitle: {
      fontWeight: 'bold',
      color: Colors.black,
      fontSize: RFValue(20),
      padding: 15,
      paddingLeft: 20,
      width: width * 0.95,
    },
    emptyListLabel: {
      color: Colors.white,
      fontSize: RFValue(14),
    },
    loadMoreContainer: {
      position: 'absolute',
      zIndex: 9,
      bottom: 0,
      width,
    },
    flatlistVoucher: {
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingBottom: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    vPhoto: {
      width: width * 0.75,
      height: height * 0.2,
      alignSelf: 'center',
      borderRadius: 20,
      marginTop: 20,
    },
    btnContainer: {
      width: width * 0.9,
      height: BTN_SIZE,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
    },
    voucherContainer: {
      width: width * 0.85,
      height: height * 0.7,
      backgroundColor: Colors.white,
      borderRadius: 20,
    },
    voucherInfoContainer: {
      paddingHorizontal: 20,
      flex: 1,
    },
    voucherInfoContainerHeader: {
      height: height * 0.08,
      marginTop: 5,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    voucherName: {
      fontWeight: 'bold',
      fontSize: RFValue(20),
      color: Colors.black,
      marginLeft: 5,
      marginTop: 5,
    },
    redeemBtn: {
      borderRadius: 10,
      width: width * 0.85,
      backgroundColor: Colors.black,
      padding: 10,
    },
    exBtn: {
      borderRadius: 10,
      width: width * 0.85,
      padding: 10,
    },
    exbtnLabel: {
      color: Colors.black,
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    btnLabel: {
      color: Colors.white,
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    voucherDec: {
      fontSize: RFValue(13),
      lineHeight: 20,
    },
    voucherTnC: {
      fontSize: RFValue(12),
      lineHeight: 20,
      marginTop: 10,
      fontStyle: 'italic',
    },
    locationNameContainer: {
      padding: 25,
      backgroundColor: Colors.white,
    },
    locationName: {
      fontWeight: 'bold',
      fontSize: RFValue(20),
      color: Colors.gold,
    },
    confirmBtnWrapper: {
      width: width * 0.95,
      height: height * 0.085,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    confirmLocBtn: {
      backgroundColor: Colors.black,
      padding: 10,
      width: width * 0.8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    confirmLocBtnLabel: {
      color: Colors.white,
      fontWeight: 'bold',
    },
    confirmHeaderContainer: {
      width,
      height: height * 0.075,
      justifyContent: 'center',
      alignItems: 'center',
    },
    goBackBtnContainer: {
      width,
      backgroundColor: Colors.white,
      height: height * 0.075,
      justifyContent: 'center',
      alignItems: 'center',
    },
    confirmBody: {
      width,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    successIcon: {
      width: width * 0.65,
      height: width * 0.65,
    },
    confirmLabel: {
      color: Colors.red,
      fontWeight: 'bold',
      fontSize: RFValue(18),
    },
    confirmNameLabel: {
      fontWeight: 'bold',
      fontSize: RFValue(14),
      textAlign: 'center',
    },
    confirmNameLabelContainer: {
      marginTop: 10,
      width: width * 0.75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      height: height * 0.075 * 0.6,
    },
    locationError: {
      color: Colors.black,
      fontSize: RFValue(15),
      textAlign: 'center',
    },
    googleMap: {
      width,
      height: height * 0.635,
    },
    webView: {
      flex: 1,
      width: width * 0.74,
    },
  });
};

export default useStyle;
