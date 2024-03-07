import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { DefaultVoucherImg } from './assets';
import useStyle from './listItem.styles';
const VoucherListItem = (props: any) => {
  const Styles = useStyle();
  return (
    <View style={Styles.container}>
      <View>
        <Image
          source={
            props.photo && props.photo.url
              ? { uri: props?.photo?.url }
              : DefaultVoucherImg
          }
          resizeMode="cover"
          style={Styles.thumb}
        />
      </View>
      <View style={Styles.voucherLabelContainer}>
        <Text style={Styles.voucherLabel} numberOfLines={2}>
          {props.name}
        </Text>
        <View style={Styles.detailContainer}>
          <View>
            <Text style={Styles.expiryLabel}>
              Expiry: {props.expiration_date_display}
              {'\t'}Remaining: {props.remaining_redeemable}
            </Text>
            {/* <Text style={Styles.descriptionTxt}>
              {props.description.replace(/(<([^>]+)>)/gi, '')}
            </Text> */}
          </View>
          <TouchableOpacity
            style={Styles.moreInfoBtn}
            onPress={() => {
              if (props.onSelect) {
                props.onSelect({ show: true, payload: props });
              }
            }}
          >
            <Text style={Styles.moreInfoLabel}>MORE INFO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VoucherListItem;
