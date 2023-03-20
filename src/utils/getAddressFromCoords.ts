import { KAKAO_API_KEY } from '@env';
import type { Coords } from '@/shared/types/coords';

export const getAddressFromCoords = async ({ latitude, longitude }: Coords) => {
  const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;

  const address = await fetch(url, {
    headers: {
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
  }).then(res => res.json());

  if (!address.meta.total_count) {
    return '[위치 정보 없음]';
  }

  return address.documents[0].address_name;
};
