<template>
  <div class="ServiceAgreement">
    <van-nav-bar @click-left='$router.go(-1)' left-arrow title="服务协议"></van-nav-bar>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item :title="item.title" :name="index" v-for="(item,index) in list" :key="index">{{item.content}}
      </van-collapse-item>

    </van-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '0',
        list: [{
          title: '简述',
          content: `本APP（铺旺宝）由山西未莱汇网络科技有限公司（下称“本APP”）负责开发、运营、维护。本注册协议双方为本APP与本APP注册用户（下称“用户”或“您”），本注册协议具有法律效力。请您在注册成为本APP用户前务必仔细阅读以下条款。若您一旦注册，则表示您同意接受本APP的服务，并同意接受以下条款的约束。
                            本服务协议内容包括以下条款及已经发布的或将来可能发布的各类规则。所有规则为协议不可分割的一部分,与协议正文具有同等法律效力。本协议由您与本APP共同签订,适用于您在本APP的全部活动。在您注册成为用户时,您已经阅读、理解并接受本协议的全部条款及各类规则,并承诺遵守中国现行的法律、法规、规章及其他政府规定,如有违反而导致任何法律后果的发生,您将以自己的名义独立承担所有相应的法律责任。
                            本APP有权根据需要不时地制定、修改本协议或各类规则,如本协议及规则有任何变更,本APP将在网站上刊载公告,经修订的协议、规则一经在公布后,立即自动生效。您应不时地注意本协议及附属规则地变更,若您不同意相关变更,本APP有权不经任何告知终止、中止本协议或者限制您进入本APP的全部或者部分板块且不承担任何法律责任。但该终止、中止或限制行为并不能豁免您在本APP已经进行的交易下所应承担的任何法律责任。
                            您确认本注册协议后，您的行为即表示同意并签署了本服务协议。本服务协议不涉及您与本APP的其他用户之间因网上交易而产生的法律关系及法律纠纷。但您在此同意将全面接受和履行与本APP其他用户在本APP签订的任何电子法律文本，并承诺按该法律文本享有或放弃相应的权利、承担或豁免相应的义务。
                        `
        }, {
          title: '一，使用规则',
          content: `
                            本APP中的全部内容的版权均属于本APP所有，该等内容包括但不限于文本、数据、文章、设计、源代码、软件、图片、照片及其他全部信息(以下称“APP内容”)。APP内容受《中华人民共和国著作权法及各国际版权公约》的保护。未经本APP事先书面同意，您承诺不以任何形式复制、模仿、传播、出版、公布、展示网站内容，包括但不限于电子的、机械的、复印的、录音录像的方式和形式等。您承认APP内容是属于本APP的财产。未经本APP书面同意，您亦不得将本APP包含的资料等任何内容镜像到任何其他APP、网站或者服务器。任何未经授权对APP内容的使用均属于违法行为，本APP将追究您的法律责任。
                            您承诺合法使用本APP提供的服务及APP内容。禁止在本APP从事任何可能违反中国现行的法律、法规、规章和政府规范性文件的行为或者任何未经授权使用本APP的行为，如擅自进入本APP的未公开的系统、不正当的使用密码和APP的任何内容等。
                            本APP接受中国大陆(不包括香港特区、澳门特区及台湾地区)的18周岁以上的具有完全民事行为能力的自然人成为APP用户。如不具备上述资格，您应立即停止在本APP的注册程序、停止使用本APP服务，本APP有权随时终止您的注册进程及本APP服务，您应对您的注册给本APP带来的损失承担全额赔偿责任，且您的监护人（如您为限制民事行为能力的自然人）或您的实际控制人应承担连带责任。在注册时和使用本APP服务的所有期间，您应提供您自身的真实资料和信息，并保证自您注册之时起至您使用本APP服务的所有期间，其所提交的所有资料和信息（包括但不限于电子邮件地址、联系电话、联系地址、邮政编码、个人身份信息、征信信息等）真实、准确、完整，且是最新的。
                            您注册成功后，不得将本APP的用户名转让给第三方或者授权给第三方使用。您确认，您使用用户名和密码登陆本APP后在本APP的一切行为均代表您本人行为，产生相应的法律后果由您个人承担。
                        `
        }, {
          title: '二，用户的义务',
          content: `
                            
                            1.保证资金来源合法
                            用户保证并承诺通过本APP进行交易的资金来源合法。
                            2.信息发布真实有效
                            用户承诺，其通过本APP发布的信息均真实有效，其向本APP提交的任何资料均真实、有效、完整、准确。如因违背上述承诺，造成本本APP或本APP其他用户损失的，用户将承担相应责任。
                        `
        }, {
          title: '三，隐私条款',
          content: `
                            1.账号及信息的安全
                            本APP将竭尽所能保护所有用户信息安全，不会向任何无关第三方提供、出售、分享和注册用户的个人账号及信息。
                            用户应保管好用户名与密码，不得向其他任何人泄露用户的用户名和密码，亦不可使用其他任何人的用户名和密码。因黑客、病毒或用户的保管疏忽等非本APP原因导致账号遭他人非法使用的，本APP不承担任何责任。
                            冒用他人账号的，本APP及其合法授权主体保留追究实际使用人责任的权利。
                            本APP将严格采取相应技术措施保护用户的账号安全，包括但不限于对用户密码加密的方式。同时，本APP将运用相关安全技术确保其掌握的信息不丢失、不被滥用和变造。但请注意，尽管本APP将竭尽全力保护用户的账号及信息安全，但在互联网情况下不存在绝对安全的保障措施。
                            2. 信息资料的来源
                            （1）本APP收集用户的任何资料旨在保障用户顺利、有效、安全地进行交易等行为。
                            （2）除用户向本APP自愿提供的资料外，用户同意本APP以下列方式收集并核对用户的信息：
                            （a）通过公开及私人资料来源收集用户的额外资料。
                            （b）本APP根据用户在本APP上的行为自动追踪关于用户的相关资料。本APP将合理利用该相关资料进行本APP用户的人数统计及行为的内部研究，以更好地了解您以及本APP的其他用户，从而提供更好、更完善的服务。
                            （c）若其他用户或第三方向本APP发出关于用户在本APP上活动或登录事项的信息，本APP可以将这些资料收集、整理在用户的专门档案中。
                            3.信息披露和使用
                            在如下情况发生时，用户同意本APP披露或使用用户的个人信息：
                            （1）用户同意本APP利用用户的联系方式与用户联络，并向用户传递与用户相关的信息，包括但不限于行政管理方面的通知、产品提供、有关用户使用本APP的服务、通讯以及针对性的广告条；
                            （2）为了分析本APP的使用率、改善本APP的内容和产品推广形式，并使本APP的内容、设计和服务更能符合用户的要求，用户同意本APP使用用户的个人信息。本APP对个人信息的合理使用能使用户在使用本APP服务时得到更为顺利、有效、安全的体验；
                            （3）本APP有义务根据有关法律要求向司法机关和政府部门提供用户的个人信息。
                            （4）为了保护用户的合法权益或为防止严重侵害他人合法权益或为了公共利益的需要，本APP将善意地披露用户的个人信息。
                            （5）经国家生效法律文书或行政处罚决定确认用户存在违法行为，或者本APP有足够事实依据可以认定用户存在违法或违反本注册协议的行为或者借款逾期未还的，该用户同意并授权本APP在本APP及互联网络上公布您的违法、违约行为，并将该内容记入任何与您相关的信用资料和档案。
                            （6）用户无权要求本APP提供其他用户的个人信息，除非司法机关或政府部门根据法律法规要求本APP提供。
                            4.保密义务
                            本APP及本APP所有用户应当履行保密义务。对在文件签署过程中所获取的对方的商业秘密以及相关权益（包括但不限于客户资料、协议合同、技术文档、账号密码），非经相关权利人许可，不得向第三方披露。关于被授权使用的有关资料、商业秘密等信息，只能在授权指定的范围使用，不得用于其他目的。
                        `
        }, {
          title: '四，涉及第三方网站',
          content: `
                            1.本APP内容可能涉及由第三方所有、控制或运营的其它网站（以下称“第三方网站”），含有访问第三方网站的链接；同时，本APP将会在任何需要的时候增加商业伙伴或共用品牌的APP。
                            2.本APP对所有第三方网站的隐私保护措施不负任何责任。
                            3.本APP不保证第三方网站上信息的真实性和有效性。您应按照第三方网站的相关协议与规则使用第三方网站，而不是按照本协议。第三方网站的内容、产品、广告和其他任何信息均由您自行判断并承担风险，而与本APP无关。`
        }, {
          title: '五，责任限制',
          content: `
                            在任何情况下，本APP对您使用本APP服务而产生的任何形式的的直接或间接损失均不承担法律责任，包括但不限于资金损失、利润损失、营业中断损失等。因为本APP或者涉及的第三方网站的设备、系统存在缺陷或者因为计算机病毒造成的损失，本APP均不负责赔偿。但是，中国现行法律、法规另有规定的除外。`
        }, {
          title: '六，网站内容监测',
          content: `
                            本APP没有义务监测网站内容，但是您确认并同意本APP有权不时地根据法律、法规、政府要求透露、修改或者删除必要的、合适的信息，以便更好地运营本APP并保护自身及本APP的其他合法用户。`
        }, {
          title: '七，个人信息的使用',
          content: `
                            本APP对于收集到的经认证的个人信息将按照本APP的隐私条款予以保护。`
        }, {
          title: '八，补偿',
          content: `
                            由于您违反本协议或任何法律、法规及由于侵害第三方的权利而产生或引起的任何索赔、要求、诉讼、及损害(实际的、特别的及有后果的)而产生的可预见的费用（包含并不限于合理的律师费），您同意就此对本APP和(如适用)本APP的母公司、子公司、关联公司、高级职员、董事、代理人和雇员进行补偿保证其免受损害。
                        `
        }, {
          title: '九、服务的中止（即有期限停止）、终止',
          content: `
                            除非本APP终止本协议或者由您申请且经本APP同意终止本协议，否则本协议始终有效。
                            1.发生下列情形之一时，本APP有权随时中止或终止向用户提供的服务：
                            (a)对于网络设备进行必要的保养及施工时；
                            (b)出现突发性的网络设备故障时；
                            (c)由于本APP所使用的网络通信设备由于不明原因停止，无法提供服务时；
                            (d)由于不可抗力因素致使本APP无法提供线上服务时；
                            (e)应相关政府机构的要求。
                            2.如发生下列任何一种情形本APP有权随时中止或终止向用户提供本协议项下的服务而无需通知用户：
                            (a)用户提供的个人资料不准确，不真实，不合法有效；
                            (b)用户使用任何第三方程序进行登录或使用服务；
                            (c)用户滥用所享受的权利；
                            (d)用户有损害其他用户的行为；
                            (e)用户有违背社会风俗和社会道德的行为；
                            (f)用户有违反本协议中相关规定的行为。
                            3.如因系统维护或升级的需要而需暂停网络服务，本APP将尽可能事先进行通告。
                            4.终止用户服务后，用户使用本APP服务的权利立即终止。从终止用户服务即刻起，本APP不再对用户承担任何责任和义务。
                        `
        }, {
          title: '十，违约责任',
          content: `
                            1.当用户的行为涉嫌违反法律法规或违反本协议和规则的，本APP有权采取相应措施，包括但不限于直接屏蔽、删除侵权信息，或直接停止提供服务。如使本APP遭受任何损失的（包括但不限于受到第三方的索赔、受到行政管理部门的处罚等），用户还应当赔偿或补偿本APP遭受的损失及（或）发生的费用，包括诉讼费、律师费、保全费等。
                            2.由于违反本协议，或违反其在本APP上签订的协议或文件，或由于用户使用本APP服务违反了任何法律或侵害第三方权利而导致任何第三方向本APP提出任何补偿申请或要求（包括律师费用），用户应对本APP给予全额补偿并使之不受损害。
                            3.如因本APP违反有关法律、法规或本协议项下的任何条款而给用户造成损失，本APP同意承担由此造成的损害赔偿责任。
                        `
        }, {
          title: '十一，适用于法律和管辖',
          content: `
                            1.如因本协议或因本APP服务所引起或与其有关的任何争议，如协商不成，向未莱汇住所地人民法院起诉。
                            2.用户同意上述诉讼过程中使用电子邮件向用户注册时预留的电子邮箱送达诉讼文书。
                        `
        }, {
          title: '十二，附加条款',
          content: `
                            1.在本APP的某些部分或页面中可能存在除本协议以外的单独的附加服务条款，当这些条款存在冲突时，在该些部分和页面中附加条款优先适用。
                            2.本服务协议部分条款被认定为无效时，不影响本服务协议其他条款的效力。
                            3.本APP对本服务协议享有最终的解释权。
                        `
        }]

      }
    }
  }

</script>

<style lang='scss' scoped>
  .ServiceAgreement {
    background: #fff;

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
  }

  .van-collapse {
    .van-collapse-item {
        
      /deep/ .van-cell {
        line-height: 100px;
        font-size: 30px;
        .van-cell__right-icon {
            line-height: 100px;
            font-size: 30px;
        }
      }
    }

  }

</style>
