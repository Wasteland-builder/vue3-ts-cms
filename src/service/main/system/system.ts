import emRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return emRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return emRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return emRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return emRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
