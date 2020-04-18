import { AsyncStorage } from "react-native";

export const storeData = (key, value) =>
  getData(key).then((data) => {
    if (data) {
      AsyncStorage.setItem(key, JSON.stringify([value].concat(data)));
    } else {
      AsyncStorage.setItem(key, JSON.stringify([value]));
    }
  });

export const getData = (key) =>
  AsyncStorage.getItem(key).then((data) => {
    if (data) {
      return Object.values(JSON.parse(data));
    } else {
      return [];
    }
  });

export const removeData = (key) => AsyncStorage.removeItem(key);
