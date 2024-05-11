<template>
	<view class="content">
		<view class="logo" v-if="false">
			<image :style='{"boxShadow":"0 0 16rpx #59f43e","borderColor":"#ccc","borderRadius":"40rpx","borderWidth":"2rpx","width":"160rpx","borderStyle":"solid","url":"http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg","isShow":false,"height":"160rpx"}' src='http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg' mode="aspectFill"></image>
		</view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.xuehao" type="text" class="uni-input" name="" placeholder="学号" />
		</view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima" type="text" class="uni-input" name="" placeholder="密码" />
		</view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.xingming" type="text" class="uni-input" name="" placeholder="姓名" />
		</view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                        <picker @change="xueshengxingbieChange" :value="xueshengxingbieIndex" :range="xueshengxingbieOptions">
                                <view :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
                        </picker>
                </view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.nianling" type="text" class="uni-input" name="" placeholder="年龄" />
		</view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                        <picker @change="xueshengxueyuanChange" :value="xueshengxueyuanIndex" :range="xueshengxueyuanOptions">
                                <view :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.xueyuan?ruleForm.xueyuan:"请选择学院"}}</view>
                        </picker>
                </view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                        <picker @change="xueshengzhuanyeChange" :value="xueshengzhuanyeIndex" :range="xueshengzhuanyeOptions">
                                <view :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.zhuanye?ruleForm.zhuanye:"请选择专业"}}</view>
                        </picker>
                </view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.shouji" type="text" class="uni-input" name="" placeholder="手机" />
		</view>
		<view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"rgba(51, 153, 153, 1)","backgroundColor":"#fff","borderRadius":"20rpx","color":"#333","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.youxiang" type="text" class="uni-input" name="" placeholder="邮箱" />
		</view>
		<view>
			<button @tap="register" type="primary" :style='{"borderColor":"#ccc","backgroundColor":"rgba(51, 153, 153, 1)","borderRadius":"20rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}'>注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                                xueshengxingbieOptions: [],
                                xueshengxingbieIndex: 0,
                                xueshengxueyuanOptions: [],
                                xueshengxueyuanIndex: 0,
                                xueshengzhuanyeOptions: [],
                                xueshengzhuanyeIndex: 0,
				ruleForm: {
				},
				tableName:""
			}
		},
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
	    		this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='xuesheng'){
                        	this.xueshengxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.xueshengxingbieOptions[0]
			}
			if(this.tableName=='xuesheng'){
                        	res = await this.$api.option(`xueyuanfenlei`,`xueyuanfenlei`,{});
                        	this.xueshengxueyuanOptions = res.data;
				this.ruleForm.xueyuan=this.xueshengxueyuanOptions[0]
			}
			if(this.tableName=='xuesheng'){
                        	res = await this.$api.option(`zhuanyefenlei`,`zhuanyefenlei`,{});
                        	this.xueshengzhuanyeOptions = res.data;
				this.ruleForm.zhuanye=this.xueshengzhuanyeOptions[0]
			}
			
			this.styleChange()
		},
		methods: {
                        // 下拉变化
                        xueshengxingbieChange(e) {
                                this.xueshengxingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.xueshengxingbieOptions[this.xueshengxingbieIndex]
                        },
                        // 下拉变化
                        xueshengxueyuanChange(e) {
                                this.xueshengxueyuanIndex = e.target.value
                                this.ruleForm.xueyuan = this.xueshengxueyuanOptions[this.xueshengxueyuanIndex]
                        },
                        // 下拉变化
                        xueshengzhuanyeChange(e) {
                                this.xueshengzhuanyeIndex = e.target.value
                                this.ruleForm.zhuanye = this.xueshengzhuanyeOptions[this.xueshengzhuanyeIndex]
                        },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
					this.$utils.msg(`学号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`xuesheng` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
					this.$utils.msg(`年龄应输入整数`);
					return
				}
				if(`xuesheng` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if(`xuesheng` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;

	.content {
		padding: 100upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	.logo {
		text-align: center;

		image {
			height: 200upx;
			width: 200upx;
			margin: 0 0 60upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
.picker-select-input {
	line-height: 88rpx;
}

</style>
