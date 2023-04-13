import { useCallback, useState } from 'react';
import type { PermissionStatus } from '@/shared/types/permission';
import { checkLocationPermission } from '@/utils/checkLocationPermission';
import { requestLocationPermission } from '@/utils/requestLocationPermission';

export const useLocationPermission = () => {
  const [locationPermission, setLocationPermission] = useState<
    PermissionStatus | ''
  >('');

  const setCheckLocationPermission = useCallback(async () => {
    const permission = await checkLocationPermission();
    setLocationPermission(permission);

    return permission;
  }, []);

  const setRequestLocationPermission = useCallback(async () => {
    const permission = await requestLocationPermission();
    setLocationPermission(permission);

    return permission;
  }, []);

  return {
    locationPermission,
    setCheckLocationPermission,
    setRequestLocationPermission,
  };
};
