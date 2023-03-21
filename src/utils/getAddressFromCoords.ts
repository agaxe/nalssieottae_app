import { KAKAO_API_KEY } from '@env';
import type { Coords } from '@/shared/types/coords';

export const getAddressFromCoords = async ({ latitude, longitude }: Coords) => {
  const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
    }).then(res => res.json());

    //* error
    if (response.code) {
      throw new Error(response.code);
    }

    if (!response.meta.total_count) {
      return '[위치 정보 없음]';
    }

    return response.documents[0].address_name;
  } catch (error: unknown) {
    if (!(error instanceof Error)) {
      return;
    }

    if (error.message === '-2') {
      return '[서비스 외 지역]';
    }
  }
};
