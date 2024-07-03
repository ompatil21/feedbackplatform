import RNFetchBlob from 'rn-fetch-blob';
import { Platform } from 'react-native';

export const getPathFromContentUri = async (contentUri) => {
  if (Platform.OS === 'android' && contentUri.startsWith('content://')) {
    const uri = await RNFetchBlob.wrap(contentUri);
    const filePath = await RNFetchBlob.fs.stat(uri);
    return filePath.path;
  }
  return contentUri;
};
