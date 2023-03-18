<template>
    <div class="navigation">
        <div class="elements">
            <div class="levo">
                <a href="">Sončna očala</a>
                <a href="index">Trgovina</a>
            </div>
            <form action="." method="post">
                <input class="bar" type="text" name="search" id="search" placeholder="Search...">
            </form>
            <div class="desno">
                <a href="login"><img src="../assets/loginicon.jpg" style="width: 30px; height: 30px;"></a>
                <a href="cart"><img src="../assets/carticon.jpg" style="width: 30px; height: 30px;"></a>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.navigation {
    background-color: white;
    box-shadow: 0 4px 2px rgb(111 111 135 / 5%), 0 4px 10px rgb(111 111 135 / 25%);
    padding: 20px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100000;
    pointer-events: auto;
}
.elements {
    align-items: center;
    width: 1024px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.levo {
    display: flex;
    gap: 30px;
}
.desno {
    display:flex;
    gap: 20px;
}
a {
    text-decoration: none;
    --link-color: #000000;
    color: var(--link-color);
    font-size: 16px;
}
.bar {
    display: flex;
    height: 40px;
    width: 500px;
    margin-left: 20px;
    background-color: rgb(191, 191, 191);
    border-radius: 20px;
    outline: 0;
    border: 0;
    padding: 3px 16px;
}
</style>
