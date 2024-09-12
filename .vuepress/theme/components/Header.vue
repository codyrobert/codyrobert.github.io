<template>
    <header :class="{ 'Header': true, 'is-hidden': isHidden }" :style="style">
        <div class="Wrap">

            <Logo/>

        </div>
    </header>
</template>

<script>
import LogoData from '@theme/data/logo'
import UIData from '@theme/data/ui'
import Logo from '@theme/components/Logo'

export default {

    name: 'Header',

    components: {
        Logo,
    },

    computed: {

        isHidden() {
			const layout = this.$page.frontmatter.layout

			if (layout === 'PageLayout') {
				return false
			}

            return ( 0 !== LogoData.percent )
        },

        style() {
			const layout = this.$page.frontmatter.layout

			if (layout === 'PageLayout') {
				if ( 
					!!UIData.scrollTop && 
					(UIData.scrollTop > 40) 
				) {
					return 'opacity:0;'
				}
			}

            if ( 
                !!UIData.scrollTop && 
                !!UIData.windowHeight && 
                (120 + UIData.scrollTop > UIData.windowHeight) 
            ) {
                return 'opacity:0;'
            }
        }

    },

}
</script>
