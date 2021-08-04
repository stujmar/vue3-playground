<template>
    <div>This is a Single Product</div>
    {{ message }}
</template>

<script>
    export default {
        name: "ProductDisplay",
        data () {
            return {
                activeColor: {}
            }
        },
        props: {
            productData: Object,
            message: String,
        }
    }
</script>
