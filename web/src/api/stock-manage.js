import request from '@/utils/request'

// 获取股票列表
export const getStockList = params => {
  return request({
    url: '/api/stockManage/getStockList/',
    method: 'get',
    params,
  })
}

// 获取股票状态列表
export const getStatusList = params => {
  return request({
    url: '/api/stockManage/getStatusList/',
    method: 'get',
    params,
  })
}

// 获取原始数据列表
export const getRawDataList = params => {
  return request({
    url: '/api/stockManage/getRawDataList/',
    method: 'get',
    params,
  })
}

// 更新股票列表(深市/沪市)
export const updateStockList = data => {
  return request({
    url: '/api/stockManage/updateStockList/',
    method: 'post',
    timeout: 1000 * 60 * 60, // 1小时
    data,
  })
}

// 切换状态
export const updateStatus = data => {
  return request({
    url: '/api/stockManage/updateStatus/',
    method: 'post',
    data,
  })
}

// 删除一条股票记录(深市/沪市)
export const deleteStockRecord = data => {
  return request({
    url: '/api/stockManage/deleteStockRecord/',
    method: 'post',
    data,
  })
}

// 更新历史数据
export const update_history_data_single = data => {
  return request({
    url: '/api/stockManage/update_history_data_single/',
    method: 'post',
    timeout: 1000 * 60 * 60 * 24, // 24小时
    data,
  })
}

// 更新股票历史数据(深市or泸市股票all)
export const update_history_data_all = data => {
  return request({
    url: '/api/stockManage/update_history_data_all/',
    method: 'post',
    timeout: 1000 * 60 * 60 * 24 * 360, // 24 * 360 小时
    data,
  })
}
