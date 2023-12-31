const Layout = () => import('@/layout/index.vue')
const StockList = () => import('@/views/stock-manage/stock-list/index.vue')
const Trend = () => import('@/views/stock-manage/trend/index.vue')
const stock_analysis = () => import('@/views/stock-analysis/index.vue')
const StockUpdate = () => import('@/views/stock-manage/history-data/index.vue')

export default [
  {
    path: '/stock-manage',
    component: Layout,
    name: 'stockManage',
    meta: {
      title: '股票管理',
    },
    // icon: 'Management',
    icon: 'TrendCharts',
    alwaysShow: true,
    children: [
      {
        path: 'stock-list',
        name: 'stockList',
        component: StockList,
        meta: {
          title: '股票列表',
          keepAlive: true,
        },
      },
      {
        path: 'history-data',
        name: 'HistoryData',
        component: StockUpdate,
        meta: {
          title: '历史数据',
        },
      },
      {
        path: 'trend',
        name: 'trend',
        component: Trend,
        meta: {
          title: '拟合斜率',
        },
      },
      {
        path: 'stock-analysis',
        name: 'analysis',
        component: stock_analysis,
        meta: {
          title: '选股策略',
        },
      },
      {
        path: 'stock-analysis',
        name: 'analysis',
        component: stock_analysis,
        meta: {
          title: '自动选股',
        },
      },
      {
        path: 'stock-analysis',
        name: 'analysis',
        component: stock_analysis,
        meta: {
          title: '交易管理',
        },
      },
    ],
  },
]
