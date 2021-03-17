import request from '@/config/axios'
/**
 * dictionary Api 接口
 */
export const dictionaryApi = {
    bookTypeDictionary: () => request({
        url: 'dictionary_api/dictionary/booktype',
        method: 'get'
    }), 
    sexDictionary: () => request({
        url: 'dictionary_api/dictionary/sex',
        method: 'get'
    }),
    isActiveDictionary: () => request({
        url: 'dictionary_api/dictionary/isActive',
        method: 'get'
    }),
};