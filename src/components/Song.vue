<template>
<div id="video">
	<div class="playVideo">
		<div class="videoWrap">
			<video :poster=poster width="100%" height="auto" preload="auto" controls="control" :src="src"></video>
			<h4 v-if="$route.params.songname">{{$route.params.songname}} &nbsp;-&nbsp; {{$route.params.songer}}</h4>
			<h4 v-else>{{singer}}</h4>
		</div>
	</div>
	<div class="command">
		<h3>相关推荐</h3>
		<ul>
			<li v-for="item in commandList">
				<a href="###">
					<div class="img"><img width="100%" height="auto" :src=item.img><i class="iconfont icon-bofang1"></i></div>
					<div class="text">
						<h4>{{item.name}}</h4>
						<p>{{item.singer}}</p>
					</div>
					<div class="rotate"><i class="iconfont icon-jiantouxia"></i></div>
				</a>
			</li>
		</ul>
	</div>
	<footer>
		<dl class="linkto">
			<dd><router-link to="/">首页</router-link></a></dd>
			<dd><a href="###">意见反馈</a></dd>
		</dl>
		<p><i class="iconfont icon-kefu"></i> 百度音乐&nbsp;&nbsp;听到极致</p>
	</footer>
</div>	
</template>
<script>
	export default{
		name:'song',
		data(){
			return{
				poster:"http://musicdata.baidu.com/data2/music/fb6d58ec5682650a10d4af05555d87ed/60568975/60568975.jpg",
			    src:"http://221.228.226.4/3/g/l/b/u/glbupeivioqzsiqoreoqwfjiyhdroa/hc.yinyuetai.com/10F401438B1F4A4464A0ACE09916E96D.flv?sc=d12d4cacfe64aef3",
			    singer:"Blood Sweat & Tears - 防弹少年团",
			commandList:[{
				img:"http://musicdata.baidu.com/data2/music/a2405f427c7464f62ebe3fad1dee9a1e/60356530/60356530.jpeg@s_0,w_160,h_90",
				name:"无所谓",
				singer:"杨坤",
				},{
				img:"http://musicdata.baidu.com/data2/music/6dda36633353e207453f674c1f6fad10/64501704/64501704.jpeg@s_0,w_160,h_90",
				name:"连衣裙",
				singer:"宋冬野"
				},{
				img:"http://musicdata.baidu.com/data2/pic/c24b061fb60f3e208b3c294afe655d1a/261599462/261599462.jpg@s_0,w_160",
				name:"安和桥",
				singer:"宋冬野"
				},{
				img:"http://musicdata.baidu.com/data2/music/4be7b24cf7ab0ff59f2c608d92f71439/112653545/112653545.jpeg@s_0,w_160,h_90",
				name:"鸽子",
				singer:"宋冬野"
				},{
				img:"http://musicdata.baidu.com/data2/music/f626042dd78293731acefc5611ee7860/107804809/107804809.jpeg@s_0,w_160,h_90",
				name:"你还要我怎样",
				singer:"薛之谦"
			}]
			}
		},

	}
</script>