<template>
    <div class="Page" :class="{ 'is-inverted': isInverted }">

        <Header/>
        <TitleCard v-if="$page.frontmatter.layout !== 'PageLayout'"/>
        <component :is="layout"/>
    </div>
</template>

<style lang="scss">
@import '../styles/main';
</style>

<script>
import Vue from 'vue'
import { setGlobalInfo } from '@app/util'
import LogoData from '@theme/data/logo'
import Header from '@theme/components/Header'
import TitleCard from '@theme/components/TitleCard'

export default {

    name: 'GlobalLayout',

    components: {
        Header,
        TitleCard,
    },

    computed: {

        layout() {

            const layout = this.getLayout()
            setGlobalInfo('layout', layout)
            return Vue.component(layout)

        },

        isInverted() {
			const layout = this.$page.frontmatter.layout

			if (layout === 'PageLayout') {
				return true
			}

            return ( 0 === LogoData.percent )
        },

    },

    methods: {

        getLayout() {

            if (this.$page.path) {

                const layout = this.$page.frontmatter.layout

                if (layout && (this.$vuepress.getLayoutAsyncComponent(layout) || this.$vuepress.getVueComponent(layout))) {
                    return layout
                }

                return 'Layout'
            }

            return 'NotFound'

        },

    }
}
</script>
