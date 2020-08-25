<template>
  <div>
    <mt-button type="primary">主要按钮</mt-button>
    <mt-button type="danger">危险按钮</mt-button>
    <mt-button size="small" type="primary">小的按钮</mt-button>
    <mt-button size="large" type="primary">大的按钮</mt-button>
    <mt-button icon="back" type="primary"></mt-button>
    <mt-button icon="more" type="primary"></mt-button>

    <mt-button type="danger" disabled>禁用状态</mt-button>
    <mt-button type="danger" plain>镂空状态</mt-button>

    <mt-button type="primary" size="small">
      <img src="../../assets/search.png" slot="icon">
      搜索
    </mt-button>
  </div>
</template>