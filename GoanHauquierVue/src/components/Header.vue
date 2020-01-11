<template>
    <div id="myheader">
        <header>
            <div class="headerdiv">
                <router-link to="/">
                <div class="initials">
                    <h1>G</h1>
                    <h1>H</h1>
                </div>
                </router-link>
                <div class="empty"></div>
                <nav>
                    <ul>
                        
                        <li><router-link to="/work">Opdrachten</router-link></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    </div>
</template>

<script>

export default {
    name: 'vheader',
    
}

</script>

<style lang="scss" scoped>
@keyframes hdr {
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


$white: #fff;
$grey: #333333;

#myheader {
    height: 120px;
    position: relative;
    background-color: $grey;
    
}

a:first-child {
    text-decoration: none;
    color: $white;
    text-align: center;
}

.headerdiv {
    width: 70vw;
    height: 100%;
    margin: auto;
    display: flex;
}

nav {
    color: $white;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    text-align: right;
    animation: hdr 2s ease-in-out;
}

ul {
    padding: 0;
    margin: auto;
    
}

li {
    list-style: none;
    
    font-size: 1em;
    text-shadow: black 5px 5px ;
}

li a {
    color: $white;
    text-decoration: none;
}

.empty {
    width: 33%;
}

.initials {
    display: flex;
    margin: auto;
    animation: hdr 2s ease-in-out;
}


h1:first-child:hover {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    text-shadow: none;
    transform: rotate(360deg);
}

h1 {
    transition: 0.5s ease-in-out;
    color: $white;
    font-size: 3em;
    text-shadow: black 5px 5px ;
}


</style>