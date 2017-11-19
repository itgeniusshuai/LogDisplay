import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var storage = new Storage({
    size: 1000,
    defaultExpires: null,
    enableCache: true,
    storageBackend: AsyncStorage,
})
global.storage = storage;