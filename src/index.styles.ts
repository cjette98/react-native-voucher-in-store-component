import { StyleSheet, Dimensions } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = width * 0.2;
const LIST_CONTAINER_HEIGHT = (height - HEADER_HEIGHT) * 0.9;
const SEARCH_CONTAINER_HEIGHT = LIST_CONTAINER_HEIGHT * 0.07;

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
    searchContainer: {
      flexDirection: 'row',
      width: width * 0.95,
      height: SEARCH_CONTAINER_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBtn: {
      height: SEARCH_CONTAINER_HEIGHT,
      width: SEARCH_CONTAINER_HEIGHT * 1.175,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    refechBtn: {
      backgroundColor: Colors.gold,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      padding: 10,
      marginTop: 10,
    },
    searchBtnLabel: {
      fontWeight: 'bold',
      color: Colors.white,
    },
    inputContainer: {
      flex: 1,
      height: SEARCH_CONTAINER_HEIGHT,
      backgroundColor: Colors.white,
      borderRadius: 8,
      overflow: 'hidden',
      flexDirection: 'row',
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
    },
    listWrapper: {
      width: width * 0.95,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.gray,
      borderRadius: 20,
      // borderTopRightRadius: 20,
      // paddingHorizontal: 20,
      padding: 20,
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
      color: Colors.black,
      fontSize: RFValue(16),
    },
    loadMoreContainer: {
      position: 'absolute',
      zIndex: 9,
      width,
    },
    flatlistVoucher: {
      height: height * 0.81,

      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingBottom: 70,
    },
  });
};

export default useStyle;
