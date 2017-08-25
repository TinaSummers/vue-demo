<template>
	<div id="downTop">
	<div class="downTop">
		<div><img width="100%" height="auto" :src=topImg></div>
		<dl class="downList">
			<dt><span>批量下载&nbsp;&nbsp;<i class="iconfont icon-xiazai"></i></span></dt>
			<dd v-for="(item,index) in topList">
				<div>{{index|formatIndex}}&nbsp;<em class="middle" :class="item.tend|computeTrend"></em></div>
				<div class="desc">
					<h4>{{item.name}}<em v-if="item.sq" class="sq"></em></h4>
					<p>{{item.singer}}</p>
				</div>
				<div><i class="iconfont icon-xiazai"></i></div>
			</dd>
		</dl>
	</div>
	</div>
</template>
<script>
	export default{
		name:'download',
		data(){
			return{
				topImg:"http://static3.qianqian.com/web/st//img//app/billboard/new-b78.jpg",
			topList:[{
				tend:1,
				sq:true,
				name:"姐姐",
				singer:"平安"
			},{
				tend:1,
				sq:true,
				name:"姐姐",
				singer:"平安"
			},{
				tend:-1,
				sq:true,
				name:"苏幕遮·碧云天",
				singer:"李建，幻境工厂童声合唱团"
			},{
				tend:0,
				sq:true,
				name:"风趣云不会",
				singer:"吴京"
			},{
				tend:0,
				sq:false,
				name:"老鼠爱大米",
				singer:"香香"
			},{
				tend:-1,
				sq:false,
				name:"越过山区",
				singer:"杨宗纬"
			},{
				tend:1,
				sq:true,
				name:"三生三世十里桃花",
				singer:"那英"
			}]
			}
		},
		filters:{
				formatIndex:function(val){
					return parseInt(val)+1;
				},
				computeTrend:function(val){
					switch(parseInt(val)){
					 case 0: return "just" ;
					 case 1: return "up" ;
					 case -1: return "fall";
					 default:return "just";
						
					}
				}
			},
	}
</script>