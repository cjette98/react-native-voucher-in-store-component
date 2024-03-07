import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import useStyle from './viewVoucher.styles';
import { DefaultVoucherImg } from './assets';
import WebView from 'react-native-webview';

const ViewVoucher = ({ payload, _onRedeem, redeeming }: any) => {
  const Styles = useStyle();
  const isExpired = !payload
    ? false
    : new Date().getTime() > new Date(payload.expiration_date).getTime()
      ? true
      : false;
  const btnType = !payload
    ? 'disable_btn'
    : isExpired
      ? 'expired_btn'
      : payload.is_redeemed
        ? 'redeemed_btn'
        : 'redeem_btn';

  const _onRedeemVoucher = async () => {
    _onRedeem(payload);
  };

  return (
    <>
      <View style={Styles.voucherContainer}>
        <Image
          source={
            payload.photo && payload.photo.url
              ? { uri: payload.photo.url }
              : DefaultVoucherImg
          }
          resizeMode="stretch"
          style={Styles.vPhoto}
        />
        <View style={Styles.voucherInfoContainerHeader}>
          <Text style={Styles.voucherName} numberOfLines={3}>
            {payload && payload.name ? payload.name : ''}
          </Text>
        </View>
        <View style={Styles.voucherInfoContainer}>
          {payload && payload.description ? (
            <WebView
              originWhitelist={['*']}
              source={{
                html: `<div><font size="+5" align="justify">${payload.description}</font><div>`,
              }}
              style={Styles.webView}
            />
          ) : null}
        </View>
      </View>

      <View style={Styles.btnContainer}>
        {btnType === 'disable_btn' ? (
          <View style={Styles.redeemBtn}>
            <Text style={Styles.btnLabel}>REDEEM</Text>
            <Text numberOfLines={6}>Limit:</Text>
          </View>
        ) : btnType === 'expired_btn' ? (
          <Text style={Styles.exbtnLabel}>EXPIRED</Text>
        ) : btnType === 'redeemed_btn' ? (
          <Text style={Styles.exbtnLabel}>REDEEMED</Text>
        ) : (
          <TouchableOpacity
            style={Styles.redeemBtn}
            activeOpacity={0.75}
            onPress={_onRedeemVoucher}
          >
            {redeeming ? (
              <ActivityIndicator size="large" color={'#ffff'} />
            ) : (
              <Text style={Styles.btnLabel}>REDEEM</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default ViewVoucher;
