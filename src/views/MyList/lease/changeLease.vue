<template>
  <div class="rentalSublease">
    <van-nav-bar @click-left='$router.go(-1)' title="我要出租/转租" left-arrow style="font-size: 20px">
    </van-nav-bar>
    <div class="process">
      <div class="processImg"></div>
    </div>
    <div class="parent">
      <div class=" photo">
        <span class="title">房源照片</span><span class="resources-2">（请按要求上传）</span>
        <div class="photoDiv flex">
          <van-uploader v-model="imgLeft" preview-image preview-full-image :max-count="1" capture>
            <img class="photo" src="../../../assets/img/add.jpg" alt="">
            <span class="imgTips">上传左侧图片</span>
          </van-uploader>
          <van-uploader v-model="imgCenter" preview-image preview-full-image :max-count="1" capture>
            <img class="photo" src="../../../assets/img/add.jpg" alt="">
            <span class="imgTips">上传正面图片</span>

          </van-uploader>
          <van-uploader v-model="imgRight" preview-image preview-full-image :max-count="1" capture>
            <img class="photo" src="../../../assets/img/add.jpg" alt="">
            <span class="imgTips">上传右面图片</span>

          </van-uploader>
        </div>

      </div>
      <div class="requirements information">
        <span class="title">房源基本信息</span>
        <div>
          <select name="" id="" v-model="houseType">
            <option value="0" class="optionSelected" disabled selected>类型</option>
            <option value="1" class="optionSelected">商铺</option>
            <option value="2" class="optionSelected">写字楼</option>
          </select>
          <b></b>
        </div>
        <div class="informationDiv">
          <input type="number" v-model="area" placeholder="面积">
          <span class="squareMetre">平米</span>
        </div>
        <div class="informationDiv">
          <input type="number" v-model="rent" placeholder="租金">
          <span class="squareMetre">元/年</span>
        </div>
        <div class="informationDiv">
          <input type="text" v-model="title" placeholder="标题">
        </div>
        <v-distpicker :province="temp.province" :city="temp.city" :area="temp.area" :placeholders="placeholders"
          @selected="onSelected">
        </v-distpicker>
        <div class="informationDiv">
          <input type="text" v-model="address" placeholder="详细地址">
          <i class="Location"></i>
        </div>
        <div class="mapBox" v-if="address != '' && temp.area != ''">
          <baidu-map class="map" :center="temp.city+temp.area" :zoom="15">

            <bm-marker :position="lngAndLat" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon='mapIcon'
              :offset="{width:-10,height:-25}"></bm-marker>
            <bm-local-search :keyword="temp.area + address" :panel='false' :auto-viewport="true" :pageCapacity='5'
              :location="temp.area" :autoViewport='true' :selectFirstResult='true' @infohtmlset='selectShop'>
            </bm-local-search>
          </baidu-map>
        </div>

        <div class="textareaDiv">
          <span class="span4">备注</span>
          <textarea placeholder="请简单描述您的需求..." v-model="remarks" />
          </div>
        <span class="example">例如：商铺到期时间5-24号，之后想尽快出租。</span>
      </div>

   
      <div class="requirements titleContact contact">
        <span class="title">联系方式</span>
        <input type="text" v-model="user_name" placeholder="姓名">
        <input type="number" placeholder="手机号" v-model="phone">
        
        
      </div>    
      <div class="islandlady">
        <span class="title">是否房东</span>
        <van-radio-group v-model="radio" class="flex">
          <van-radio name="1">是</van-radio>
          <van-radio name="2">否</van-radio>
        </van-radio-group>
      </div>
    </div>
    <button @click="post">确认提交</button>
  </div>
</template>

<script>
    import VDistpicker from 'v-distpicker'
    import { Toast} from 'vant';
    import qs from 'qs'

    export default {
      data(){
        return{
          imgRight:[],
          imgCenter:[],
          imgLeft:[],
          isShowMap:false,
          houseType:0,    //类型
          remarks:'',     //备注
          area:'',        //面积
          rent:'',        //租金
          address:'',     //详细地址
          code:'',
          temp: {
            province: '',
            city: '',
            area: '',
            provinceId: '',
            cityId: '',
            areaId: '',
        },
        user_name:'',
        placeholders: {
              province: '省/自治区/直辖市',
              city: '市',
              area: '区/县',
        },
        mapIcon: {
          url: require('../../../assets/img/mapCover.png'),
          size: {
            width: 30,
            height: 30
          }
        },
        yzm: '',
        phone:'',
        isSecond: true, //是否获取验证码
        lngAndLat:{},
        second: '',
        radio: '1',
        title:'',
        id:'',
          
        }
      } ,
      components: { VDistpicker },
       methods:{
          get(apiUrl,getData) {
            this.$axios({
            url: apiUrl,
            method: 'get',
            params:getData,
            headers: {
                'XX-Token': this.$cookieStore.getCookie('token'),
                'XX-Device-Type': 'mobile',

            }
            }).then((data) => {
                console.log(data)
                if(data.data.code == 1){

                var lease = data.data.data
                  
                  this.temp.area = lease.house.regionInfo[2].area_name                //地区ID
                  this.temp.city = lease.house.regionInfo[1].area_name                //地区ID
                  this.temp.province = lease.house.regionInfo[0].area_name            //地区ID
                  this.temp.areaId = lease.house.regionInfo[2].id                     //地区ID
                  this.temp.cityId = lease.house.regionInfo[1].id                     //地区ID
                  this.temp.provinceId = lease.house.regionInfo[0].id                 //地区ID
                  this.address = lease.house.address                                  //详细位置
                  this.houseType = lease.house.type                                   //房屋类型
                  this.area = lease.house.area                                        //面积
                  this.remarks= lease.description                                     //备注
                  this.user_name = lease.house.owner_name                             //房东名  
                  this.phone = lease.house.owner_mobile                               //call
                      //  code   this.code, 
                  this.imgLeft.push({
                      url:this.Interface.UrlHost + '/upload/' + lease.house.more.photos[0].url
                  })
                  this.imgCenter.push(  {
                      url:this.Interface.UrlHost + '/upload/' + lease.house.more.photos[1].url

                  } )
                  this.imgRight.push(  {
                      url:this.Interface.UrlHost + '/upload/' + lease.house.more.photos[2].url

                  } )
                  
                  this.rent = lease.capital                      //租金
                  this.radio = lease.is_mask/1+1+''                    //是否房东
                                
                  this.title = lease.title                  //标题
                
               
                }
                
            })
        },
         onSelected(data) {
            this.temp.province = data.province.value
            this.temp.city = data.city.value
            this.temp.area = data.area.value
            this.temp.provinceId = data.province.code
            this.temp.cityId = data.city.code
            this.temp.areaId = data.area.code
        },
        // 将后端传来的值 转 base64

     
        post(){
          let postData = qs.stringify({
            id: this.id,
            region:this.temp.areaId,        //地区ID
            address:this.address,           //详细位置
            type:this.houseType,            //房屋类型
            area:this.area,                 //面积
            remarks:this.remarks,           //备注
            user_name:this.user_name,       //房东名  
            user_phone:this.phone,          //call
            // code:this.code, 
            more:[this.imgLeft[0],this.imgCenter[0],this.imgRight[0]],  
            rent:this.rent,                 //租金
            is_mask:this.radio-1,           //是否房东
            title:this.title,               //标题
            location:[this.lngAndLat.lng,this.lngAndLat.lat]
          })
           this.$axios({
              'url': this.Interface.config.LeaseEdit,
              'method': 'post',
              'data': postData,
              headers:{
                'XX-Token':this.$cookieStore.getCookie('token'),
                'XX-Device-Type':'mobile'
              }
            }).then((res) => {
                if(res.data.code == 1){
                  Toast.success(res.data. msg);
                  this.$router.push({
                    name: 'leaseSublet',
                  })
                }else{
                  Toast.fail(res.data. msg);
                }
            })
        },
        selectShop(e){
           this.lngAndLat = e.point
        },
       
      } ,
      mounted(){
        // this.Interface.config.assess
        
        let id = this.$route.params.id
        this.id = id
        this.get(this.Interface.config.leaseInfo,{'house_id' : this.id})
      },
           
    }
</script>

<style scoped lang='scss'>
  .rentalSublease{
    background:#FFFFff;
  }
  ::-webkit-input-placeholder {
    color:#999;
  }
 
  /*内容*/
  .parent{
    margin:61px 30px 0;
  }
  .requirements{
    margin-bottom:61px;
    /deep/ .distpicker-address-wrapper select{
        padding: 0;
        width:100%;
        height:90px;
        border:2px solid rgba(203,203,203,1);
        border-radius:6px;
        margin-bottom:30px;
        padding-left:1em;
        font-size:30px;
        color:#999;
        background: #fff;
        font-weight:400;
        display:block;
        /*将默认的select选择框样式清除*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;

    }
    div{
      position:relative;
    }
  }
  button{
    width:550px;
    height:90px;
    border:none;
    border-radius:45px;
    margin:0 0 30px 98px;
    background:linear-gradient(90deg,#F97B00,#F7241B);
    font-size:34px;
    color:#FFFFFF;
    font-weight:bold;
    text-align:center;
    line-height:44px;
    outline:none;
  }
  .area{
    input{
      width:100%  ;
      height:85px;
      border:2px solid #CBCBCB;
      border-radius:6px;
      margin-bottom:30px;
      font-size:30px;
      font-weight:400;
      text-indent:1em;
      line-height: 85px;
    }
  }
  select{
    width:100%;
    height:90px;
    border:2px solid rgba(203,203,203,1);
    border-radius:6px;
    margin-bottom:30px;
    padding-left:1em;
    font-size:30px;
    color:#999;
    background: #fff;
    font-weight:400;
    display:block;
    /*将默认的select选择框样式清除*/
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
  }
  b{
    width:30px;
    height:28px;
    background-image:url("../../../assets/img/index_icons.png");
    background-size:962px 196px;
    background-position:-924px 8px;
    position:absolute;
    right:30px;
    top:30px;
    display:block;
  }
  .title{
    font-size:36px;
    font-weight:400;
    display: inline-block;
    margin-bottom: 40px;;
  }
  .textareaDiv{
    width:100%;
    height:239px;
    border:2px solid #CBCBCB;
    border-radius:6px;
    padding: 30px;
    span{
      font-size:26px;
      font-weight:400;
    }
    textarea{
      width:100%;
      height:150px;
      border:none;
      font-size:30px;
      font-weight:400;
      color:#333333;
    }

  }
  .titleContact{
    input{
      width:100%;
      height:90px;
      border:2px solid #CBCBCB;
      border-radius:6px;
      font-size:30px;
      font-weight:400;
      text-indent:1em;
    }
  }
  .contact{
    margin-bottom:30px;
    input{
      margin-bottom:30px;
      font-size:30px;
      font-weight:400;
      text-indent:1em;
    }
    div{
      width:100%;
      height:90px;
      border:2px solid #CBCBCB;
      border-radius:6px;
      position:relative;
      input{
        width:510px;
        height:85px;
        border:none;
        margin-bottom:30px;
        font-size:30px;
        font-weight:400;
        text-indent:1em;
      }
      .code{
        right:31px;
        top: 25px;
        border-radius:6px;
        font-size:30px;
        color:#F7241B;
        position:absolute;
      }
    }
  }
  .process{
    width:100%;
    height:130px;
    background-color:#EEEEEE;
    position:relative;
    .processImg{
      width:100%;
      height:130px;
      background-image:url("../../../assets/img/icon.png");
      background-size:594px 226px;
      background-repeat:no-repeat;
      background-position:77px -140px;
      position:absolute;
      top:22px;
    }
  }
  .information{
    .informationDiv{
      width:100%;
      height:90px;
      border:2px solid #CBCBCB;
      border-radius:6px;
      margin-bottom:30px;
      display:flex;
      align-items:center;
      justify-content: space-between;
      padding: 0 30px;
      input{
        width:400px;
        height:85px;
        border:none;
        box-sizing:border-box;
        font-size:30px;
        font-weight:400;
      }
      .squareMetre{
        font-size:30px;
        color:#333333;
        font-weight:400;
       
      }
      .Location{
        display: block;
        width: 36px;
        height: 36px; 
        background-size:100% ;
        background-image: url(../../../assets/img/locat.png);
      }
    }
    .example{
      margin-top:30px;
      font-size:26px;
      font-weight:400;
      text-indent:1em;
      display:block;
    }
  }
  .photoDiv{
    
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /deep/ .van-uploader{
      text-align: center;
      .van-uploader__wrapper{
        .van-uploader__input-wrapper{
          width: 220px;
          img.photo{
            width: 100%;
            height: 220px;
            border-radius:6px;
          }
           span.imgTips{
            padding-top: 15px;
            font-size: 26px;
          }
        }
        .van-uploader__preview-image{
         width: 220px;
          height: 220px;
        }
      }
      
      
    }
    
  }
  
  
  .resources{
    display:inline-block;
  }
  .resources-2{
    font-size:26px;
    color:#999999;
    display:inline-block;
  }
  .mapBox {
    margin: 40px 0;
    width: 100%;
    height: 500px;
    .map {
      width: 100%;
      height: 100%;
    }
  }
  .islandlady{
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    .title{
      margin-bottom: 0;
    }
    .van-radio-group{
      height:39px;
      margin-left: 70px;
      
      /deep/ .van-radio{
        margin-right: 50px;
        .van-radio__icon{
          .van-icon{
            width: 26px;
            height: 26px;
          }
        }
        
        .van-radio__label{
          font-size: 14px;
        }
      }
    }
  }
</style>
<style lang="scss" scoped>
 .van-nav-bar {
    height: 100px;
    line-height: 100px;
    background: #fff;
    border-bottom: 1px solid #ebebeb;

    .van-nav-bar__title {
      font-size: 36px;
    }

    .van-icon {
      font-size: 50px;
      color: #333;
    }
  }
</style>
