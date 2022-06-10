<template>
    <div class="comment-info" > 
        <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">更多></div>
        </div>
        <div class="info-content">
                <div class="user" v-if="commentInfo.user">
                    <img :src="commentInfo.user.avatar" alt="avatar" />
                    <span class="name">{{commentInfo.user.uname}}</span>
                </div>
                <div class="comment-detail">
                    <div class="desc">{{commentInfo.content}}</div>
                    <div class="other">
                        <span class="date">{{commentInfo.created | showDate}}</span>
                        <span class="color">{{commentInfo.style}}</span>
                    </div>
                    <div class="comment-img" v-if="commentInfo.images && commentInfo.images.length">
                        <img v-for="(item, index) in commentInfo.images" :key="index"
                         :src="item" alt="avatar" />
                    </div>
                </div>
            </div>
    </div> 
</template>
<script>
import {formatDate} from 'common/utilg.js'
export default {
    props: {
        commentInfo:{
            type: Object,
            default(){
                return {};
            }
        }
    },
    filters:{
        showDate(value){
        //服务器返回的时间都是时间戳（秒）格式
            const date = new Date(value *1000);
            return formatDate(date,'yyyy-MM-dd')
        }
    }
}
</script>

<style scoped>
.comment-info {
    padding: 8px 8px 20px;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
}
.info-header {
    padding: 10px 0;
    display: flex; 
    justify-content: space-between; 
    border-bottom: 2px solid rgba(100, 100, 100, .1);
}
.info-content {
    margin-top: 8px;
}
.info-content .user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.info-content .user .name {
    position: relative;
    top: -15px;
    left: 8px;
}
.comment-detail .desc {
    padding: 4px;
    text-indent: 2em;
    color: var(--color-text);
}
.comment-detail .other {
    color: var(--color-text);
}
.comment-detail .other span {
    padding: 4px;
}
.comment-detail .comment-img {
    display: flex;
}
.comment-img img {
    width: 25%;
    padding-right: 6px;
}
</style>