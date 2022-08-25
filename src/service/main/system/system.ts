import emRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return emRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
