import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import my from '../views/my'
import address from '../views/address'
import siteSelect from '../views/wantRent/siteSelect'
import rentalSublease from '../views/wantRent/rentalSublease'
// 新闻列表及详情
import newsList from '../views/news/newsList'
import newsDetail from '../views/news/newsDetail'
// 推荐列表 及详情
import RecommendList from '../views/Recommend/RecommendList'
import RecommendDetail from '../views/Recommend/RecommendDetail'
// 我的列表中各个功能
import MyCollection from '../views/MyList/MyCollection'
import MyAppointment from '../views/MyList/MyAppointment'
import MyAppointmentDetail from '../views/MyList/MyAppointmentDetail'
import MyConstract from '../views/MyList/MyConstract'
import MyContractLease from '../views/MyList/MyContractLease'
import RentAccount from '../views/MyList/bill/RentAccount'
import uploadResult from '../views/MyList/bill/uploadResult'
import commentResult from '../views/MyList/bill/commentResult'
import Comments from '../views/MyList/bill/Comments'
import Renewal from '../views/MyList/bill/Renewal'
import MyFootprint from '../views/MyList/MyFootprint'
import MyEvaluation from '../views/MyList/MyEvaluation'
import MyGuide from '../views/MyList/MyGuide'
import MyBill from '../views/MyList/bill/MyBill'
import leaseSublet from '../views/MyList/lease/leaseSublet'
import leaseMatching from '../views/MyList/lease/leaseMatching'
import MyDetail from '../views/MyList/lease/MyDetail'
import siteSelection from '../views/MyList/siteSelection/siteSelection'
import siteMatching from '../views/MyList/siteSelection/siteMatching'
import siteDetail from '../views/MyList/siteSelection/siteDetail'
import MyRenewal from '../views/MyList/MyRenewal'
import MyWallet from '../views/MyList/wallet/MyWallet'
import MyBank from '../views/MyList/wallet/MyBank'
import MySecurity from '../views/MyList/wallet/MySecurity'
import FillCard from '../views/MyList/wallet/FillCard'
import Recharge from '../views/MyList/wallet/Recharge'
import RechargeResult from '../views/MyList/wallet/RechargeResult'
import Cash from '../views/MyList/wallet/Cash'
import CashResult from '../views/MyList/wallet/CashResult'
import MyOpinion from '../views/MyList/MyOpinion'
import MySelect from '../views/MyList/select/MySelect'
import login from '../views/MyList/login/login'
import yzmLogin from '../views/MyList/login/yzmLogin'
import register from '../views/MyList/login/register'
import forgetPassword from '../views/MyList/login/forgetPassword'
import seekingRentList from '../views/seekingRent/seekingRentList'
import AboutMe from '../views/MyList/AboutMe'
import changeLease from '../views/MyList/lease/changeLease'
import myHouseDetail from '../views/MyList/lease/myHouseDetail'
import shareDetail from '../views/MyList/lease/shareDetail'
import MySiteDetail from '../views/MyList/siteSelection/MySiteDetail'
import poster from '../views/poster/poster'
import selectCity from '../views/selectCity'
import searchList from '../views/searchList/searchList'
import ServiceAgreement from '../views/MyList/login/ServiceAgreement'
import Tips from '../views/MyList/login/Tips'
// 2.0包租公正式上线了
import totalAssets from '../views/MyList/bzg/totalAssets'
import totalRevenue from '../views/MyList/bzg/totalRevenue'
import transaction from '../views/MyList/bzg/transaction'
import bzgList from '../views/MyList/bzg/bzgList'
import bzgDetail from '../views/MyList/bzg/bzgDetail'
import moneyDetail from '../views/MyList/bzg/moneyDetail'
import ApplyBzg from '../views/MyList/bzg/Apply/ApplyBzg'
import setPay from '../views/MyList/bzg/Apply/setPay'
import Transfer from '../views/MyList/bzg/Transfer'
import TransferDetail from '../views/MyList/bzg/TransferDetail'
import order from '../views/MyList/bzg/order'
import riskTips from '../views/MyList/bzg/riskTips'
import orderDetail from '../views/MyList/bzg/orderDetail'
import payment from '../views/MyList/bzg/payment'
import contract from '../views/MyList/bzg/contract'
import Apply from '../views/MyList/bzg/Apply'
import bzgGuide from '../views/MyList/bzg/bzgGuide'



Vue.use(Router)

export default new Router({
  mode:'history', 
  // base:'/app_pwb/',

  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/siteSelect',
      name: 'siteSelect',
      component: siteSelect
    },
    {
      path: '/rentalSublease',
      name: 'rentalSublease',
      component: rentalSublease
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/RecommendList',
      name: 'RecommendList',
      component: RecommendList
    },
    {
      path: '/RecommendDetail/:id',
      name: 'RecommendDetail',
      component: RecommendDetail
    },
    {
      path: '/MyCollection',
      name: 'MyCollection',
      component: MyCollection 
    },
    {
      path: '/MyAppointment',
      name: 'MyAppointment',
      component: MyAppointment 
    },
    {
      path: '/MyAppointmentDetail/:id',
      name: 'MyAppointmentDetail',
      component: MyAppointmentDetail 
    },
    {
      path: '/MyConstract',
      name: 'MyConstract',
      component: MyConstract
    },
    {
      path: '/MyContractLease',
      name: 'MyContractLease',
      component: MyContractLease
    },
    {
      path: '/RentAccount',
      name: 'RentAccount',
      component: RentAccount
    },
    {
      path: '/MyFootprint',
      name: 'MyFootprint',
      component: MyFootprint
    },
    {
      path: '/MyEvaluation',
      name: 'MyEvaluation',
      component: MyEvaluation
    },
    {
      path: '/MyGuide',
      name: 'MyGuide',
      component: MyGuide
    },
    {
      path: '/MyBill',
      name: 'MyBill',
      component: MyBill
    },
    {
      path: '/Comments',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/uploadResult',
      name: 'uploadResult',
      component: uploadResult
    },
    {
      path: '/commentResult',
      name: 'commentResult',
      component: commentResult
    },
    {
      path: '/Renewal',
      name: 'Renewal',
      component: Renewal
    },
    {
      path: '/leaseSublet',
      name: 'leaseSublet',
      component: leaseSublet
    },
    {
      path: '/leaseMatching/:id',
      name: 'leaseMatching',
      component: leaseMatching
    },
    {
      path: '/MyDetail',
      name: 'MyDetail',
      component: MyDetail
    },
    {
      path: '/siteSelection',
      name: 'siteSelection',
      component: siteSelection
    },
    {
      path: '/siteMatching/:id',
      name: 'siteMatching',
      component: siteMatching
    },
    {
      path: '/siteDetail/:id',
      name: 'siteDetail',
      component: siteDetail
    },
    {
      path: '/MyRenewal',
      name: 'MyRenewal',
      component: MyRenewal
    },
    {
      path: '/MyWallet',
      name: 'MyWallet',
      component: MyWallet
    },
    {
      path: '/MyBank',
      name: 'MyBank',
      component: MyBank
    },
    {
      path: '/MySecurity',
      name: 'MySecurity',
      component: MySecurity
    },
    {
      path: '/FillCard',
      name: 'FillCard',
      component: FillCard
    },
    {
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/RechargeResult',
      name: 'RechargeResult',
      component: RechargeResult
    },
    {
      path: '/Cash',
      name: 'Cash',
      component: Cash
    },
    {
      path: '/CashResult',
      name: 'CashResult',
      component: CashResult
    },
    {
      path: '/MyOpinion',
      name: 'MyOpinion',
      component: MyOpinion
    },
    {
      path: '/MySelect',
      name: 'MySelect',
      component: MySelect
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/yzmLogin',
      name: 'yzmLogin',
      component: yzmLogin
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/seekingRentList',
      name: 'seekingRentList',
      component: seekingRentList
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/changeLease/:id',
      name: 'changeLease',
      component: changeLease
    },
    {
      path: '/myHouseDetail/:id',
      name: 'myHouseDetail',
      component: myHouseDetail
    },
    {
      path: '/shareDetail/:id',
      name: 'shareDetail',
      component: shareDetail
    },
    {
      path: '/MySiteDetail/:id',
      name: 'MySiteDetail',
      component: MySiteDetail
    },
    {
      path: '/poster',
      name: 'poster',
      component: poster
    },
    {
      path: '/selectCity',
      name: 'selectCity',
      component: selectCity
    },
    {
      path: '/searchList',
      name: 'searchList',
      component: searchList
    },
    {
      path: '/ServiceAgreement',
      name: 'ServiceAgreement',
      component: ServiceAgreement
    },
    {
      path: '/Tips',
      name: 'Tips',
      component: Tips
    },
     // 2.0 包租公正式上线了   2019/10/29
    
     {
      path: '/totalAssets',
      name: 'totalAssets',
      component: totalAssets
    },
    {
      path: '/totalRevenue',
      name: 'totalRevenue',
      component: totalRevenue
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: transaction
    },
    {
      path: '/bzgList',
      name: 'bzgList',
      component: bzgList
    },
    {
      path: '/bzgDetail',
      name: 'bzgDetail',
      component: bzgDetail
    },
    {
      path: '/moneyDetail',
      name: 'moneyDetail',
      component: moneyDetail
    },
    {
      path: '/ApplyBzg',
      name: 'ApplyBzg',
      component: ApplyBzg
    },
    {
      path: '/setPay',
      name: 'setPay',
      component: setPay
    },
    {
      path: '/Transfer',
      name: 'Transfer',
      component: Transfer
    },
    {
      path: '/TransferDetail/:state/:id',
      name: 'TransferDetail',
      component: TransferDetail
    },{
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/riskTips/:id',
      name: 'riskTips',
      component: riskTips
    },
    {
      path: '/orderDetail/:id',
      name: 'orderDetail',
      component: orderDetail
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },{
      path: '/contract',
      name: 'contract',
      component: contract
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: Apply  
    },
    {
      path: '/bzgGuide',
      name: 'bzgGuide',
      component: bzgGuide  
    },
    
    
  ]
})
