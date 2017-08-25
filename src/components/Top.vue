<template>
	<div id="top">
		<ul class="top">
			<li v-for="item in sort">
				<router-link to="/download">
					<div class="sort"><img width="100%" height="auto" :src=item.img><i class="iconfont icon-bofang"></i></div>
					<dl>
						<dd v-for="(list,index)  in item.song"><span>{{index + 1}}</span>{{list}}</dd>
					</dl>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'top',
		data(){
			return {
				sort:[{
				img:"http://music.baidu.com/cms/mobile/static/apk/KK/tbang188188.jpg",
				song:["风去云不回 - 吴京","姐姐 - 平安","苏幕遮·碧云天 - 李健,幻境工场童声合唱团"]
				},{
				img:"http://a.hiphotos.baidu.com/ting/pic/item/09fa513d269759ee4764e3adb1fb43166d22dfa4.jpg",
				song:["刚好遇见你 - 李玉刚","你还要我怎样 - 薛之谦","成都 - 赵雷"]	
				},{
				img:"http://business.cdn.qianqian.com/qianqian/file/57481149d7662_588.png",
				song:["听到请回答 - SNH48鞠婧祎","等不到你 - SNH48鞠婧祎","成都 - 赵雷"]	
				}]
			}
		}
	}
</script>