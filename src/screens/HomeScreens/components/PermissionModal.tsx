import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from '@/components/Icon';
import GeoAlt from '@/assets/icons/geo-alt.svg';
import { theme } from '@/shared/styles/theme';

export const PermissionModal = ({ submitPress }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        날씨어때의 서비스를 이용하기 위해 다음의 앱 권한을 허용해주세요
      </Text>
      <View style={styles.list}>
        <View style={styles.item}>
          <Icon style={styles.itemIcon} xml={String(GeoAlt)} />
          <View>
            <Text style={styles.itemTitle}>위치 정보</Text>
            <Text style={styles.itemDesc}>
              위치 기반 날씨 정보 제공 시 필요
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={submitPress}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    maxHeight: 300,
    backgroundColor: theme.white,
    borderRadius: 8,
    position: 'absolute',
    alignSelf: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    width: '76%',
    lineHeight: 20,
    alignItems: 'center',
    paddingVertical: 18,
  },
  list: {
    flex: 1,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    paddingHorizontal: '5%',
    justifyContent: 'flex-start',
    paddingVertical: 18,
  },
  item: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  itemTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 14,
    color: theme.fontGrey,
  },
  itemIcon: {
    width: 23,
  },
  button: {
    backgroundColor: theme.primary,
    alignItems: 'center',
    paddingVertical: 8,
    width: '100%',
  },
  buttonText: {
    color: theme.white,
  },
});
