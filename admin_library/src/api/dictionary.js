import request from '@/config/axios'

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