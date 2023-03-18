<template>
    <div class="banner"></div>
    <div class="skupno">
        <div class="left">
            <p style="text-align:center; padding-top: 5%;">FILTRI</p>
            <hr class="podfiltri">
            <form class="form">
                <label for="firm">Brands:</label>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="Ray Ban" name="Ray Ban" value="Ray Ban">
                        <label for="Ray Ban"></label>
                    </div>
                    <div>
                        <label for="Ray Ban">Ray Ban</label>
                    </div>
                </div>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="Oakley" name="Oakley" value="Oakley">
                        <label for="Oakley"></label>
                    </div>
                    <div>
                        <label for="Oakley">Oakley</label>
                    </div>
                </div>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="Tom Ford" name="Tom Ford" value="Tom Ford">
                        <label for="Tom Ford"></label>
                    </div>
                    <div>
                        <label for="Tom Ford">Tom Ford</label>
                    </div>
                </div>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="Carrera" name="Carrera" value="Carrera">
                        <label for="Carrera"></label>
                    </div>
                    <div>
                        <label for="Carrera">Carrera</label>
                    </div>
                </div>
                <hr class="medfiltri">
                <label for="price">Price:</label>
                <input type="range" min="0" max="1000" value="0" class="slider" id="priceRange" name="priceRange">
                <hr class="medfiltri">
                <label for="gender">Gender:</label>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="male" name="male" value="male">
                        <label for="male"></label>
                    </div>
                    <div>
                        <label for="male">Male</label>
                    </div>
                </div>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="female" name="female" value="female">
                        <label for="female"></label>
                    </div>
                    <div>
                        <label for="female">Female</label>
                    </div>
                </div>
                <hr class="medfiltri">
                <button type="submit">Filter</button>
            </form>
        </div>
        <div class="right">
            <div class="mid">
                <div>
                    <img src="../assets/aviator2.jpg" class="slikaizdelka">
                    <p style="text-align: center;">cena</p>
                </div>
            </div>
            <div class="mid"></div>
            <div class="mid"></div>
            <div class="mid"></div>
            <div class="mid"></div>
            <div class="mid"></div>
        </div>
    </div>

</template>

<script>
export default {
    data: () => {
        return {      
        };
    },
};
</script>

<style scoped>
.left {
    background-color: white;
    width: 300px;
    height: 500px;
    border-right: 1px solid rgb(179, 179, 182);
    margin-left: 130px;
}

.right {
    background-color: white;
    width: 1000px;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
    padding: 30px;
}

.mid {
    display: flex;
    justify-content: center;
    height: 300px;
    width: 300px;
    /*background-color: rgb(212, 212, 212);*/
    margin-bottom: 10px;
    align-items: center;
    border-radius: 1%;
    border: 0;
    transition: 0.1s;
}

.slikaizdelka {
    /*display: inline-block;
    min-width: 290px;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid transparent;
    text-align: center;*/
    height: 170px;
    width: 280px;
}

.mid:hover {
    box-shadow: 0 0 5px rgb(39, 39, 39);
    -moz-box-shadow: 0 0 5px rgb(39, 39, 39);
    -webkit-box-shadow: 0 0 5px rgb(39, 39, 39);
    border-color: rgb(66, 65, 65);
    border: 1px solid rgb(119, 118, 118);
}

.skupno {
    display: flex;
    margin-top: 80px;
    gap: 30px;
    max-width: 100%;
}

.banner {
    width: 1000px;
    height: 300px;
    background-image: url("../assets/banner.jpg");
    background-size: cover;
    margin: auto;
    margin-top: 90px;
}

.medfiltri {
    opacity: 65%;
    margin-right: 8px;
    margin-top: 20px;
}

.podfiltri {
    opacity: 65%;
    margin-top: 10px;
    margin-bottom: 15px;
}

.form {
    width: 300px;
    padding: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="checkbox"] {
    padding: 0;
}

.checkboxes {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    cursor: pointer;
}

button,
input {
    overflow: visible;
}

button[type="submit"] {
    width: 100%;
    background-color: #1aaaaf;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0a56bb;
}

.filter-row {
    display: flex;
}

.filter-row input[type="checkbox"] {
    margin-right: 10px;
}

.filter-row label {
    margin-right: 10px;
}
</style>