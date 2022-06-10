import { debounce } from './utilg'
import backTop from 'components/content/backTop.vue'
export const itemListenterMixin = {
    data() {
        return {
            ImagListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scorll.refresh, 100)
            //一旦创建好，就开始监听图片加载
        this.ImagListener = () => { refresh() }
        this.$bus.$on('itemImageLoad', this.ImagListener)
    }
}
export const backTopMinin = {
    components: {
        backTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scorll.scroll.scrollTo(0, 0, 300)
        }
    }
}