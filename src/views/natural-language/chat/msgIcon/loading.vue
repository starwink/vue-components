<template>
    <span>
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
    </span>
</template>
<style lang="scss" scoped>
span{
    margin-right: 4px;
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
</style>