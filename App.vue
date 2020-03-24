<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/iconfont/iconfont.eot?t=1585017144342'); /* IE9 */
	  src: url('~@/static/iconfont/iconfont.eot?t=1585017144342#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
	  url('~@/static/iconfont/iconfont.woff?t=1585017144342') format('woff'),
	  url('~@/static/iconfont/iconfont.ttf?t=1585017144342') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/iconfont/iconfont.svg?t=1585017144342#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-chaoshi:before {
	  content: "\e6a7";
	}
	
	.icon-lianxiwomen:before {
	  content: "\e612";
	}
	
	.icon-wei-:before {
	  content: "\e609";
	}
	
	.icon-tupian:before {
	  content: "\e639";
	}
</style>
