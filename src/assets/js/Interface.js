const UrlAdress = 'http://192.168.1.106',
      UrlHost = 'http://192.168.1.106/YueFuDaRen/public',
    config = {
        latestAnnouncement : UrlHost+'/api/home/index/latestAnnouncement',                     //最新公告   
        AllList : UrlHost+'/api/home/index/homePage',                                          //全部列表
        seekingRent : UrlHost+'/api/home/index/stateGroup',                                    //求租列表
        seekingDetail : UrlHost+'/api/home/index/siteSelectionInfo',                           //求租详情
        listDetail : UrlHost+'/api/home/index/Detail',                                         //列表详情
        assess : UrlHost+'/api/merch/Merch/houseShelves',                                       //我要出租           
        login : UrlHost+'/api/user/login',                                                     //登录
        register : UrlHost+'/api/user/register',                                               //注册
        homeCondition: UrlHost+'/api/home/common/homeCondition',                                //筛选条件
        forgetPassword: UrlHost+'/api/home/index/setPassword',                                 //重置密码
        parameter: UrlHost+'/api/home/common/parameter',                                        //我要选址中所要几个条件
        tenant : UrlHost+'/api/merch/Merch/tenant',                                            //我要选址
        isCollection: UrlHost+'/api/home/index/isCollection',                                  //收藏
        appoint: UrlHost+'/api/merch/Merch/houseAppoint',                                      //预约
        getUser : UrlHost+'/api/home/my/my',                                                    //获取我的
        myCollection:UrlHost+'/api/home/my/myCollection',                                       //我的页面收藏
        myAppoint: UrlHost+'/api/home/my/myAppoint',                                               //我的预约
        appointDetail: UrlHost+'/api/home/my/appointDetail',                                    //预约详情
        myFootprint: UrlHost+'/api/home/my/myFootprint',                                        //我的足迹
        myLease: UrlHost+'/api/home/my/myLease',                                                //我的出租
        mySiteSelection: UrlHost+'/api/home/my/mySiteSelection',                                //我的选址  
        leaseMatching: UrlHost + '/api/home/my/leaseMatching',                                  //出租匹配
        leaseInfo: UrlHost+'/api/home/my/leaseInfo',                                            //获取用户要修改
        getYZM : UrlHost+'/api/user/send',                                                      //获取验证码
        LeaseEdit: UrlHost+'/api/home/my/LeaseEdit',                                            //我的房屋出租修改
        WXshare : UrlHost+'/api/user/profile/sharingShelves',                                  //分享成功上架
        downloadApp: UrlHost+'/api/home/common/checkVersion',                                     //下载APP
        yzmLogin : UrlHost+'/api/user/captchaLogin',                                               //验证码登录
        leaseDelete : UrlHost+'/api/home/my/leaseDelete',                                           //房屋下架
        siteSelectionMatching : UrlHost+'/api/home/my/siteSelectionMatching',                       //选址匹配
        siteSelectionDelete : UrlHost+'/api/home/my/siteSelectionDelete',                           //下架选址      
        search: UrlHost+'/api/home/index/search ',                                                  //搜索
        nickName: UrlHost+'/api/user/nickname',                                              // 修改用户名
        changePassword: UrlHost+'/api/user/changePassword',                                            //  修改密码         
        isAuth:UrlHost+'/api/home/user/isIdentityAuthentication' ,                              //是否认证         
        Auth : UrlHost+'/api/home/user/identityAuthentication',                                 //认证四要素             
        setPayPassword : UrlHost+'/api/home/user/setPayPassword',                               //设置支付密码
        newhandsel : UrlHost+'/api/home/order/createOrder',                                     //获取订单定金接口    
        orderList : UrlHost+'/api/home/order/orderList',                                        //订单列表     
        orderInfo : UrlHost+'/api/home/order/orderInfo',                                        //订单详情
        payHandsel: UrlHost+'/api/home/order/payHandsel',                                       //支付定金
        createCaptcha:UrlHost+'/api/user/createCaptcha' ,                                       //生成验证码图片
        getImg : UrlHost + '/api/user/captcha',                                                 //请求图片

    }
   


    // for(let key  in config1){
    //     config[key] = config1[key]
    // }

export default {
    config,UrlAdress,UrlHost
}