<template>
  <div class="box">
    <div class="player-title">
      {{ videoName }}
      <div class="close-btn" @click="closeVideo" />
    </div>
    <div :id="id"></div>
  </div>
</template>
<script>
import uuid from '@/utils/uuid'
export default {
  props: {
    url: { // 接收视频流
      type: String,
      default: ''
    },
    videoId: { // 接受视频的id，用于关闭使用
      type: String,
      default: ''
    },
    videoName: { // 视频的名字
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: uuid() // 生成随机id
    }
  },
  mounted() {
    this.inintPlayer()
  },
  methods: {
    closeVideo() { // 通过穿进的id关闭播放器窗口
      this.$nextTick(() => {
        this.$emit('closePlayer', this.videoId)
      })
    },
    inintPlayer() {  // 播放器实例化
      this.$nextTick(() => {
        this.player = new WasmPlayer(null, this.id, this.callbackfun, { Height: true, fluent: true, HideKbs: true })
        this.player.play(this.url, 1)
      })
    }
    callbackfun(e) {}
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #0a0d16;
  position: relative;
  /deep/ .iconqingxiLOGO:before {
    // 去除logo
    content: "";
  }
  /deep/ .iconfont + div {
    right: 55px;
  }
  .player-title {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    line-height: 25px;
    width: 100%;
    z-index: 10000;
    background: rgba(0, 0, 0, 0);
    color: #ffffff;
  }
  .close-btn {
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    right: 2px;
    // background-image: url("../assets/video/player-close.png") no-repeat center;
  }
}
</style>
