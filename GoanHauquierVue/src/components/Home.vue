<template>
    <div>
        <Header />
        <Subheader />
        
    </div>
</template>

<script>
import Header from './Header';
import Subheader from './Subheader';

export default {
    name: 'home',
    components: {
        Header,
        Subheader
    }
}

</script>

<style lang="scss" scoped>


    @media (min-width: 768px) {
        body {
            margin: 0; height: 100%; overflow: hidden;
        }

        div {
            background: url('../assets/mountains.jpg');
            background-size: 120vw;
            padding: 0;
            margin: 0;
            overflow: hidden;
            height: 100vh;
        }
    }
    @media (max-width: 767px) {
        div {
            background: url('../assets/mountains.jpg');
            overflow: hidden;
            height: 100vh;
        }
        body {
            margin: 0; height: 100%; overflow: hidden;
        }
    } 
</style>