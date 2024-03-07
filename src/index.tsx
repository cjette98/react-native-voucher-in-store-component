import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import useStyle from './index.styles';
import React, { useState, useCallback } from 'react';
import VoucherListItem from './components/listitem';
import ViewVoucher from './components/viewVoucher';
export function VoucherList({
  data,
  isFetching,
  maxPerPage,
  _onLoadMore,
  _onRedeem,
  redeeming,
}: any) {
  const Styles = useStyle();
  const [viewVoucher, setViewVoucher] = useState({
    show: false,
    payload: null,
  });

  const renderItem = useCallback(
    ({ item }: any) => (
      <VoucherListItem
        {...item}
        onSelect={(payload: any) => {
          setViewVoucher(payload);
        }}
      />
    ),
    []
  );

  return (
    <View>
      {viewVoucher.show ? (
        <ViewVoucher
          payload={viewVoucher.payload}
          onClose={() => {
            setViewVoucher({ show: false, payload: null });
          }}
          _onRedeem={_onRedeem}
          redeeming={redeeming}
        />
      ) : (
        <>
          {data.length < 1 ? (
            <View style={Styles.listWrapper}>
              <Text style={Styles.emptyListLabel}>No vouchers available</Text>
              <TouchableOpacity
                style={Styles.refechBtn}
                // onPress={refetch}
              >
                <Text style={Styles.searchBtnLabel}>Refresh</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={Styles.listWrapper}>
              <Text style={Styles.listTitle}>Vouchers</Text>
              <View style={Styles.flatlistVoucher}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item: any) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  initialNumToRender={10}
                  updateCellsBatchingPeriod={10}
                  maxToRenderPerBatch={10}
                  onEndReachedThreshold={0.1}
                  onEndReached={() => _onLoadMore(data, maxPerPage)}
                  refreshing={isFetching}
                />
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
}
