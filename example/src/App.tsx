import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { VoucherList } from 'react-native-voucher-in-store-component';

export default function App() {
  const DummyData = [
    {
      id: 204,
      name: 'Save $5 on Fireball Cinnamon Whisky 700ml',
      expiration_date_display: '19/03/2024',
      expiration_date: '2024-03-19 23:59:00',
      description:
        '<p><strong>Purchase Fireball Cinnamon Whisky 700ml at any participating Fleet Street store, and scan the single use voucher to get $5 off!</strong><br><br><span class="text-small" style="color:hsl(0,0%,30%);"><i>*T&amp;Cs apply. Offer available for a limited time. Whilst stocks last. Limit to one discount per person/per bottle.</i></span></p>',
      created_at: '28/02/2024',
      supplier: 'Southtrade',
      value: '5',
      usage_cap: 500,
      date_active: '2024-03-06',
      photo: {
        id: 425,
        name: 'FS-APP-Vouchers2',
        file_name: 'FS-APP-Vouchers2.jpg',
        collection_name: 'voucher_photo',
        mime_type: 'image/jpeg',
        created_at: '2024-02-27T22:52:14.000000Z',
        url: 'https://mobileapps-api.dailypress.agency/storage/425/FS-APP-Vouchers2.jpg',
        thumb_url:
          'https://mobileapps-api.dailypress.agency/storage/425/conversions/FS-APP-Vouchers2-preview.jpg',
      },
      active: 1,
      is_active: 1,
      is_redeemed: false,
      remaining_redeemable: 500,
    },
    {
      id: 205,
      name: 'SAVE $5 on Sapporo Premium Beer 6 Pack',
      expiration_date_display: '19/03/2024',
      expiration_date: '2024-03-19 23:59:00',
      description:
        '<p><strong>Purchase Sapporo Premium Beer 6 Pack at any participating Fleet Street store, and scan the single use voucher to get $5 off!</strong><br><br><span class="text-small" style="color:hsl(0,0%,30%);"><i>*T&amp;Cs apply. Offer available for a limited time. Whilst stocks last. Limit to one discount per person/per pack.</i></span></p>',
      created_at: '28/02/2024',
      supplier: 'Coopers',
      value: '5',
      usage_cap: 500,
      date_active: '2024-03-06',
      photo: {
        id: 427,
        name: 'FS-APP-Vouchers3',
        file_name: 'FS-APP-Vouchers3.jpg',
        collection_name: 'voucher_photo',
        mime_type: 'image/jpeg',
        created_at: '2024-02-27T22:53:44.000000Z',
        url: 'https://mobileapps-api.dailypress.agency/storage/427/FS-APP-Vouchers3.jpg',
        thumb_url:
          'https://mobileapps-api.dailypress.agency/storage/427/conversions/FS-APP-Vouchers3-preview.jpg',
      },
      active: 1,
      is_active: 1,
      is_redeemed: false,
      remaining_redeemable: 500,
    },
  ];

  const _onLoadMore = () => {
    //any Logic Here
  };
  const access_token = '';
  const onRedeem = (payload: any) => {
    console.log(payload);
  };
  return (
    <View style={styles.container}>
      <VoucherList
        data={DummyData}
        isFetching={false}
        maxPerPage={10}
        _onLoadMore={_onLoadMore}
        access_token={access_token}
        _onRedeem={onRedeem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
