<template>
    <div class="flex-row">
        <div class="left flex-col"></div>
        <div class="rigth flex-col"></div>
    </div>
</template>
<style lang="scss" scoped>
.flex-row {
    display: flex;
    flex-direction: row;
    .left{
        width: 208px;
        height: 100%;
        padding: 16px 12px;
        border-right: 1px solid #d8d8d8;
    }
    .rigth{
        flex: 1;
        overflow: auto;
        background-color: #fff;
    }
}
.flex-col{
    display: flex;
    flex-direction: column;
}

</style>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>