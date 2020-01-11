<template>
    <div id="subheader">
        <vue-particles color="#dedede"></vue-particles>
        <div class="c2a">
            <h1>Goan Hauquier</h1>
            <h3>Portfolio Front End Development</h3>
            <button><router-link to="/work">Opdrachten</router-link></button>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: 'subheader',
    
}

</script>

<style lang="scss" scoped>
// variables
$white: #fff;
$grey: #333333;
$lightgrey: #606060;

@keyframes c2a {
    0% {
        
    }
    25% {
        transform: translateX(-10px);
    }
    50% {
        transform: translateX(0px);
    }
    75% {
        transform: translateX(10px);
    }
    100% {

    }
}

@keyframes btn {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    80% {
        opacity: 1;
        transform: scale(1.1);
    }
    100%  {
        transform: scale(1);
    }
}

@keyframes header {
    0% {
        transform: translateY(-250px);
    }
    80% {
        transform: translateY(25px);
    }
    100% {
        transform: translateY(0px);
    }
}

header {
    animation: header 1s ease-in-out;
}

#subheader {
    height: 100vh;
    width: 100%;
    position: relative;
    justify-content: center;
    // align-items: center;
    display: flex;
    padding-top: 30vh;
}
#particles-js {
    height: 70vh;
    display: block;
    position: absolute;
    width: 100%;
    opacity: 0.2;
}

.c2a {
    
    display: block;
    position: relative;
    text-align: center;
    animation: c2a 10s infinite ease-in-out;
}

button {
    padding: 25px;
    width: 400px;
    font-size: 2em;
    font-family: 'Rubik Mono One', sans-serif;
    color: $white;
    background-color: $grey;
    border-radius: 10%;
    border: none;
    margin: 0.67em;
    transition: 0.3s ease;
    animation: btn 1s ease-in-out;
}
button a {
    color: $white;
    text-decoration: none;
}
button:hover {
    cursor: pointer;
    
    text-shadow: black 8px 1px;
    background-color: $lightgrey;
    transition: 0.2s ease;
}
button:active {
    cursor: progress;
    transform: scale(0.9);
}



h1 {
    font-size: 4em;
    color: $white;
    text-shadow: black 5px 5px ;
}
h3 {
    color: $white;
    margin: 0;
    text-shadow: black 5px 5px ;
}

@media (max-width: 741px)  {
    #subheader {
        height: 100vh;
        width: 100vw;
        position: relative;
        justify-content: center;
        // align-items: center;
        display: flex;
        padding-top: 20vh;
    }
    #particles-js {
        height: 70vh;
        display: block;
        position: absolute;
        width: 100%;
        opacity: 0.2;
    }
    .c2a {
        
        display: block;
        position: relative;
        text-align: center;
        animation: c2a 10s infinite ease-in-out;
    }

    h1 {
    font-size: 1.5em;
    color: $white;
    text-shadow: black 5px 5px ;
    }
    h3 {
        color: $white;
        margin: 0;
        text-shadow: black 5px 5px ;
        font-size: 0.8em;
    }

    button {
        margin-top: 25px;
        width: 250px;
        font-size: 0.8em;
        background-color: $white;
    }
    button a {
        color: $grey;
        text-decoration: none;
    }
}
</style>