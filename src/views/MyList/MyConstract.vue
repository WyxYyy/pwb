<template>
  <div class="MyConstract">
    <van-nav-bar title="我的合同" left-arrow @click-left='$router.go(-1)' />
    <div class="list" v-if="false">
      <div class="Box" @click="wantTo('MyContractLease',{id:1})">
        <div class="Content">
          <span class="ContentTitle">
            房屋租赁合同
          </span>
          <em class="ContentFont">
            查看租赁合同相关文件1111111111111111111111111111111111111111111
          </em>
        </div>
        <div class="Image">
          <div class="ContractImage"></div>
        </div>
      </div>
      <div class="Box" @click="wantTo('MyContractLease',{id:2})">
        <div class="Content">
          <div class="ContentTitle">
            房屋租赁协议
          </div>
          <div class="ContentFont">
            所有房屋相关服务协议都在这里
          </div>
        </div>
        <div class="Image">
          <div class="AgreementImage"></div>
        </div>
      </div>
    </div>
    <img v-else src="../../assets/img/noData.jpg" alt="">
  </div>

</template>

<script>
  export default {
    name: "MyConstract"
  }

</script>

<style scoped lang="scss">
  .MyConstract {
    background-color: #F4F4F4;
  }




  

  /*内容*/
  .list{
    padding: 30px;
  }
  .Box {
    height: 160px;
    background-color: #FFFFff;
    border-radius: 4px;
    margin-bottom: 30px;;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Content {
      width: 370px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
     

      .ContentTitle {
        font-size: 34px;
        font-weight: bold;
        line-height: 36px;
         overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      }

      .ContentFont {
        font-size: 26px;
        color: #999999;
         overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      }
    }

    .Image {
      width: 80px;
      height: 80px;

      .ContractImage {
        width: 80px;
        height: 80px;
        background-image: url("../../assets/img/contract_icon.png");
        background-size: 160px 80px;
      }

      .AgreementImage {
        width: 80px;
        height: 80px;
        background-image: url("../../assets/img/contract_icon.png");
        background-size: 160px 80px;
        background-position: -80px 0;
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