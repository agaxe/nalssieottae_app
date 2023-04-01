import { requestNotifications } from 'react-native-permissions';

export const requestNotificationPermission = async () => {
  return await requestNotifications(['alert', 'sound']);
};
