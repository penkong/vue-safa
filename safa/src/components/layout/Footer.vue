<template>
    <div class="footer">
        <ul class="flex">
            <li class="mr-6">
                <a class="text-white hover:text-blue-200" href="#">Contact Us</a>
            </li>
            <li class="mr-6">
                <a class="text-white hover:text-blue-200" href="#">Address</a>
            </li>
            <li class="mr-6">
                <a class="text-white hover:text-blue-200" href="#">Link</a>
            </li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        components: {
            
        }
    }
</script>

<style lang="scss" scoped>
.footer {
    height: 60px;
    width: 100vw;
    background: #042523;
    ul {
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 1rem auto;
    }
}
</style>