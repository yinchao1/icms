const menuList = [
    {
        title: '运营分析',
        key: '/0',
        icon: 'bar-chart',
        children: [{
            title: '运营总览',
            key: '/1',
            children: [{
                title: '运营总览',
                key: '/home'
            },{
                title: '合伙人运营总览',
                key: '/3'
            }]
        },{
            title: '设备运营分析',
            key: '/4',
            children: [{
                title: '设备分布图',
                key: '/5'
            }]
        },{
            title: '设备区域运营分析',
            key: '/6',
            children: [{
                title: '设备销售统计',
                key: '/7'
            },{
                title: '设备销售明细',
                key: '/8'
            }]
        },{
            title: '商品运营分析',
            key: '/9',
            children: [{
                title: '商品销售统计',
                key: '/10'
            }]
        },{
            title: '商品区域运营分析',
            key: '/11'
        },{
            title: '场景运营分析',
            key: '/12'
        },{
            title: '订单运营分析',
            key: '/13'
        },{
            title: '用户运营分析',
            key: '/14'
        },{
            title: '线上业务统计',
            key: '/15'
        }]
    },{
        title: '设备管理',
        key: '/16',
        icon: 'laptop',
        children: [{
            title: '设备管理',
            key: '/17',
            children: [{
                title: '设备管理',
                key: '/18'
            },{
                title: '设备故障',
                key: '/19'
            },{
                title: '营销模板',
                key: '/20'
            },{
                title: '场景管理',
                key: '/21'
            },{
                title: '设备分组',
                key: '/22'
            },{
                title: '阿米巴分组',
                key: '/23'
            },{
                title: '联排柜管理',
                key: '/24'
            }]
        },{
            title: '设备运营',
            key: '/25',
            children: [{
                title: '保质期预警',
                key: '/26'
            },{
                title: '设备库存清单',
                key: '/27'
            },{
                title: '设备库存详情',
                key: '/28'
            },{
                title: '配送单管理',
                key: '/29'
            },{
                title: '监控与制单',
                key: '/30'
            },{
                title: '配货记录',
                key: '/31'
            }]
        },{
            title: '基础信息管理',
            key: '/32',
            children: [{
                title: '设备型号',
                key: '/33'
            },{
                title: '商检版本',
                key: '/34'
            },{
                title: 'SIM卡批量录入',
                key: '/35'
            },{
                title: '设备信息批量更新',
                key: '/36'
            }]
        }]
    },{
        title: '商品管理',
        key: '/37',
        icon: 'skin',
        children: [{
            title: '商品管理',
            key: '/38'
        },{
            title: '商品标签管理',
            key: '/39'
        },{
            title: '商品赋码',
            key: '/40'
        },{
            title: 'RFID标签绑定',
            key: '/41'
        }]
    }
];
export default menuList;