<template>
<div id="home">
  <div class="newsong">
    <h3>新歌速递<i class="iconfont icon-tiaozheng"></i></h3>
    <ul>
      <li v-for="item in news">
        <router-link :to="{name:'Song',params:{songname:item.name,songer:item.auther}}">
          <img v-bind:src=item.img width="100%" height="auto" >
          <h5>{{item.name}}</h5>
          <p>{{item.auther}}</p>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="ad"><img src="../assets/ad.jpg" width="100%" height="auto" /></div>
  <div class="toplist">
    <h3>音乐榜单 <i class="iconfont icon-tiaozheng"></i></h3>
    <ul class="tab">
      <li v-for="tabname in tablist" @click="selected(tabname)" :class="{active:active == tabname}">{{tabname}}</li>
    </ul>
    <dl class="tablist">
      <transition name="fade" mode="out-in">
      <dd v-show="this.active === '热歌榜'" key="hot">
        <ul>
          <li v-for="(item ,index) in tophot" @click="down(item.name ,item.auther)">
            <div class="surface">
              <img :src=item.img width="100%" height="auto" />
              <span>{{index|formatIndex}}</span>
            </div>
            <div class="trend"><em :class="item.trend|computeTrend"></em></div>
            <div class="desc">
              <h4>{{item.name}}<em v-if="item.sq" class="sq"></em></h4>
              <p>{{item.auther}}</p>
            </div>
            <div class="dowm"><i class="iconfont icon-xiazai"></i></div>
          </li>
        </ul>
        <p class="more"><a href="###">查看该榜单》</a></p>
      </dd>
      </transition>
      <transition name="fade" mode="out-in">
      <dd v-show="this.active === '新歌榜'" key="new">
        <ul>
          <li v-for="(item ,index) in topnew">
            <div class="surface">
              <img :src=item.img width="100%" height="auto" />
              <span>{{index|formatIndex}}</span>
            </div>
            <div class="trend"><em :class="item.trend|computeTrend"></em></div>
            <div class="desc">
              <h4>{{item.name}}<em v-if="item.sq" class="sq"></em></h4>
              <p>{{item.auther}}</p>
            </div>
            <div class="dowm"><i class="iconfont icon-xiazai"></i></div>
          </li>
        </ul>
        <p class="more"><a href="###">查看该榜单》</a></p>
      </dd>
      </transition>
      <transition name="fade" mode="out-in">
      <dd v-show="this.active === 'King榜'" key="king">
        <ul>
          <li v-for="(item ,index) in news">
            <div class="surface">
              <img :src=item.img width="100%" height="auto" />
              <span>{{index|formatIndex}}</span>
            </div>
            <div class="trend"><em :class="item.trend|computeTrend"></em></div>
            <div class="desc">
              <h4>{{item.name}}<em v-if="item.sq" class="sq"></em></h4>
              <p>{{item.auther}}</p>
            </div>
            <div class="dowm"><i class="iconfont icon-xiazai"></i></div>
          </li>
        </ul>
        <p class="more"><a href="###">查看该榜单》</a></p>
      </dd>
      </transition>
    </dl>
  </div>
  <footer>
    <a href="###">意见反馈</a>
    <p><i class="iconfont icon-kefu"></i> 百度音乐&nbsp;&nbsp;听到极致</p>
  </footer>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      //模拟后台数据
        news:[
          {img:"http://musicdata.baidu.com/data2/pic/4104d8267f250b36893b92d25feb206d/551401562/551401562.jpg@s_1,w_150,h_150",
          name:"未知的幸福",
          auther:"平安"
          },{
          img:"http://musicdata.baidu.com/data2/pic/0c326888b0cdee8652e1f195ff96a74a/551449546/551449546.jpg@s_1,w_150,h_150",
          name:"未单身",
          auther:"A-lin"
          },{
          img:"http://musicdata.baidu.com/data2/pic/cc20d32c9c3188665d230968a5f1c641/551365408/551365408.jpg@s_1,w_150,h_150",
          name:"宋词辑",
          auther:"环境工厂"
          },
        ],
        tablist:["热歌榜","新歌榜","King榜"],
        active:"热歌榜",
        tophot : [
          {img:"http://musicdata.baidu.com/data2/pic/d59cab8d47b4ae5cd500cbb67de9cc5c/276867491/276867491.jpg@s_1,w_150,h_150",
          trend:1,
          name:"刚好遇见你",
          auther:"李玉刚",
          sq:true,
          },{
          img:"http://musicdata.baidu.com/data2/pic/5dd1ba70bb3e2d9d7fc79cd614130c8c/93104033/93104033.jpg@s_1,w_150,h_150",
          trend:1,
          name:"你还要我怎样",
          auther:"薛之谦",
          sq:true,
          },{
          img:"http://musicdata.baidu.com/data2/pic/cd8dcc4f40cbb37c7dcf0e6c151fbcc6/275347355/275347355.jpg@s_1,w_150,h_150",
          trend:-1,
          name:"成都",
          auther:"赵磊",
          sq:false,
          },{
          img:"http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/541680639/541680639.jpg@s_1,w_150,h_150",
          trend:0,
          name:"桃花诺",
          auther:"G.E.M.邓紫棋",
          sq:true,
          },{
          img:"http://musicdata.baidu.com/data2/pic/260368391/260368391.jpg@s_0,w_150",
          trend:0,
          name:"大王叫我来巡山",
          auther:"贾乃亮，甜心",
          sq:false,
          }
        ],
        topnew : [
          {img:"http://musicdata.baidu.com/data2/pic/cd8dcc4f40cbb37c7dcf0e6c151fbcc6/275347355/275347355.jpg@s_1,w_150,h_150",
          trend:1,
          name:"风趣云不会",
          auther:"吴京",
          sq:true,
          },{
          img:"http://musicdata.baidu.com/data2/pic/d59cab8d47b4ae5cd500cbb67de9cc5c/276867491/276867491.jpg@s_1,w_150,h_150",
          trend:0,
          name:"老鼠爱大米",
          auther:"香香",
          sq:true,
          },{
          img:"http://musicdata.baidu.com/data2/pic/5dd1ba70bb3e2d9d7fc79cd614130c8c/93104033/93104033.jpg@s_1,w_150,h_150",
          trend:-1,
          name:"越过山丘",
          auther:"杨宗纬",
          sq:true,
          },{
          img:"http://musicdata.baidu.com/data2/pic/260368391/260368391.jpg@s_0,w_150",
          trend:-1,
          name:"看不见的地方",
          auther:"赵传",
          sq:true,
          },{
          img:"http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/541680639/541680639.jpg@s_1,w_150,h_150",
          trend:0,
          name:"三生三世十里桃花",
          auther:"那英",
          sq:true,
          }
        ]
      }
    },
  methods:{
    selected:function(name){this.active = name;},
    down:function(name ,auther){
      window.alert("you click the download button. the song name is \n"+name+"\n and the auther is \n"+auther);
    }
  },
  filters:{
    formatIndex:function(val){
          var num = val + 1;
          return num>9?num:"0"+num;
        },
    computeTrend:function(val){
          switch(parseInt(val)){
           case 0: return "just" ;
           case 1: return "up" ;
           case -1: return "fall";
           default:return "just";
            
          }
        }
    }        
        

}
</script>

