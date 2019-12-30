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
          <van-uploader :after-read='imfCompressLeft' v-model="imgLeft" preview-image preview-full-image :max-count="1"
            capture>
            <img class="photo" src="../../assets/img/add.jpg" alt="">
            <span class="imgTips">上传左侧图片</span>
          </van-uploader>
          <van-uploader :after-read='imfCompressCenter' v-model="imgCenter" preview-image preview-full-image
            :max-count="1" capture>
            <img class="photo" src="../../assets/img/add.jpg" alt="">
            <span class="imgTips">上传正面图片</span>

          </van-uploader>
          <van-uploader :after-read='imfCompressRight' v-model="imgRight" preview-image preview-full-image
            :max-count="1" capture>
            <img class="photo" src="../../assets/img/add.jpg" alt="">
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
        <div class="Tips">
          <van-icon name="flower-o" />
          <span>
            示例 ： 可输入 长风街华德广场小区100平米底商
          </span>
        </div>
        <!-- <v-distpicker :province="temp.province" :city="temp.city" :area="temp.area" :placeholders="placeholders"
          @selected="onSelected">
        </v-distpicker> -->
        <div class="informationDiv" @click="isShowAreaList = !isShowAreaList">
          <input type="text" v-model="showAreaList" disabled placeholder="省/市/区">
        </div>
        <div class="informationDiv">
          <input type="text" v-model="address" placeholder="详细地址">
          <i class="Location"></i>
        </div>

        <div class="mapBox" v-if=" temp.area != ''">
          <baidu-map class="map" :center="lngAndLat" @dragend='seleceOnload' :zoom="15">
            <!-- <bm-info-window :position="lngAndLat" class="showTitle"  :show="true" >
                <p v-text="title"></p>
            </bm-info-window> -->
            <bm-marker :position="lngAndLat" :dragging="true" @dragend='seleceOnload' :icon='mapIcon'
              :offset="{width:0,height:0}" :raiseOnDrag="true">
            </bm-marker>
            <bm-local-search :keyword="temp.area + address" :panel='false' :auto-viewport="true" :pageCapacity='1'
              :location="temp.area" :autoViewport='true' :selectFirstResult='true' @infohtmlset='selectShop'>
            </bm-local-search>
          </baidu-map>
        </div>

        <div class="textareaDiv">
          <span class="span4">备注</span>
          <textarea placeholder="请简单描述您的需求... (例如：商铺到期时间5-24号，之后想尽快出租。)" v-model="remarks" />
          </div>
      </div>

   
      <div class="requirements titleContact contact">
        <span class="title">联系方式</span>
        <input type="text" v-model="user_name" placeholder="姓名">
        <input type="number" placeholder="手机号" v-model="phone">
        <input type="number" v-if="phone.length == 11" placeholder="选填 请输入您的另一个手机号" v-model="phone2">
        
      </div>
      <div class="islandlady">
        <span class="title">是否房东</span>
        <van-radio-group v-model="radio" class="flex">
          <van-radio name="1">是</van-radio>
          <van-radio name="2">否</van-radio>
        </van-radio-group>
      </div>
    </div>
    <button @click="Submission">确认提交</button>

    <van-area :area-list="areaList" v-if="isShowAreaList" :item-height='40'	 @cancel='isShowAreaList = false' @confirm='onSelected'/>

    <van-popup class="clickPopup" :close-on-click-overlay='false' overlay v-model="isLogin">
        <van-loading  color="#F7241B" size='60px'/>
    </van-popup>
  </div>
</template>

<script>
    import VDistpicker from 'v-distpicker'
    import { Toast} from 'vant';
    import qs from 'qs'
    import areaListJson from '../../assets/js/area.js'
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
          temp: {
            province: '',
            city: '',
            area: '',
            provinceId: '',
            cityId: '',
            areaId: '',
          },
          user_name:'',
          
          mapIcon: {
            url: require('../../assets/img/mapCover.png'),
            size: {
              width: 30,
              height: 30
            }
          },
          phone:'',
          phone2:'',
          lngAndLat:{},
          radio: '1',
          title:'',
          isLogin:false,
          areaList:areaListJson,
          isShowAreaList:false,
          showAreaList:''
        }
      } ,
      components: { VDistpicker },
      mounted(){

        // console.log(this.Interface.config.assess);
      },
      methods:{
         onSelected(e) {
            this.temp.province = e[0].name
            this.temp.city = e[1].name
            this.temp.area = e[2].name
            this.temp.provinceId = e[0].code
            this.temp.cityId = e[1].code
            this.temp.areaId = e[2].code
            this.isShowAreaList = false
            this.showAreaList = e[0].name+'/'+e[1].name+'/'+e[2].name

        },
        imfCompressLeft(file,detail){
          this.compress(file.content,0.3,function(base64data){
            this.imgLeft[0].content =  base64data
          })
          // console.log('abv:'+newBase64)
          // this.imgLeft[0].content =  newBase64
        },
        imfCompressCenter(file,detail){
          this.compress(file.content,0.3,function(base64data){
            this.imgCenter[0].content =  base64data
          })
          // var newBase64 = this.compress(file.content,0.3)
          // this.imgCenter[0].content =  newBase64

        },
        imfCompressRight(file,detail){
          this.compress(file.content,0.3,function(base64data){
            this.imgRight[0].content =  base64data
          })
          // var newBase64 = this.compress(file.content,0.3)
          // this.imgRight[0].content =  newBase64

        },
        Submission(){
          var reg = /\房屋出租/;
          if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone))){ 
              Toast.fail("手机号码有误，请重填");  
              this.phone = ''
          }
          else if(this.title.search(reg) != -1 || this.title.length < 5 ){
              Toast.fail('您输入的标题格式不正确，请看提示后从输');  
          }
          else{
              this.post()
          } 
        },

        post(){
          console.log(1)
          this.isLogin = true
          let postData = qs.stringify({
            region:this.temp.areaId,        //地区ID
            address:this.address,           //详细位置
            type:this.houseType,            //房屋类型
            area:this.area,                 //面积
            remarks:this.remarks,           //备注
            user_name:this.user_name,       //房东名  
            user_phone:this.phone,          //call
            user_phone2:this.phone2,        //第二个电话
            more:[this.imgLeft[0],this.imgCenter[0],this.imgRight[0]],  
            rent:this.rent,                 //租金
            is_mask:this.radio-1,           //是否房东
            title:this.title,               //标题
            location:[this.lngAndLat.lng,this.lngAndLat.lat]
          })
           this.$axios({
              'url': this.Interface.config.assess,
              'method': 'post',
              'data': postData,
              headers:{
                'XX-Token':this.$cookieStore.getCookie('token'),
                'XX-Device-Type':'mobile'
              }
            }).then((res) => {
              this.isLogin = false
              console.log(2)
                if(res.data.code == 1){
                  console.log(3)
                  Toast.success(res.data.msg);
                  this.$router.push({
                    path: 'leaseSublet',
                  })
                }else{
                  console.log(4)
                  Toast.fail(res.data.msg);
                }
            })
        },
        selectShop(e){
           this.lngAndLat = e.point
           console.log(e)
           
        },
        seleceOnload(e){
          console.log(e)
         this.lngAndLat = e.point
        // console.log(target.point)

        }
        
      
      }       
    }
</script>

<style scoped lang='scss'>
  .rentalSublease{
    background:#FFFFff;
    /deep/ .van-area{
      position: fixed;
      bottom: 0;
      width: 100%;
      .van-picker__toolbar{
        height: 100px;;
        div{
          font-size: 30px;
          line-height: 100px;
        }
      }
      .van-picker__columns{
        li{
          font-size: 30px;
        }
      }
    }
    /deep/ .showTitle{
      font-size: 30px;
      color: #999;
      text-align: center;
      width: auto;
      border: 0;

    }
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
    background-image:url("../../assets/img/index_icons.png");
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
      font-size:30px;
      font-weight:400;
    }
    textarea{
      width:100%;
      height:150px;
      border:none;
      font-size:26px;
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
      background-image:url("../../assets/img/icon.png");
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
        background: #fff;
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
        background-image: url(../../assets/img/locat.png);
      }
    }
    .Tips{
      color: #999;
      font-size: 26px;
      padding-bottom: 10px;;
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
    padding: 10px 0;
    .title{
      margin-bottom: 0;
    }
    .van-radio-group{
      height:59px;
      margin-left: 70px;
      
      /deep/ .van-radio{
        margin-right: 50px;
        display: flex;
        align-items: center;
        .van-radio__label{
          font-size: 38px;
        }
        .van-radio__icon{
          .van-icon{
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            margin-top: -8px;
          }
          
        }
        .van-radio__icon--checked .van-icon{
          background-color: #F7241B;
          border-color: #F7241B;
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
  .van-toast{
    font-size: 30px;
    width: auto;
    padding: 20px;
  }
  .clickPopup{
    padding: 50px;
    background: rgba(0,0,0,0)
  }

</style>
