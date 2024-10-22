<template>

    <section @click="replace">
        <div class="up">
            <div id="ellipse">
            </div>
        </div>
        <div id="down">
            <h1>{{ comReport }}</h1>
        </div>
    </section>

</template>
<script>
export default {
    props: {
        comReport: String
    },
    methods: {
        replace() {

            // alert("Em desenvolvimento")
            window.location.replace(process.env.NUXT_ENV_URL_MATRIZ)

        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 18.8em;
    padding: 0.09em 0.10em;
    border-radius: 0.96em;
    background-color: #ffffff;
    border: 1.067px solid var(--border);
    max-width: 100%;
    cursor: pointer;
    transition: border-color 0.3s ease;
}

section:hover {
    border: 3px solid var(--border);
    padding: 0;
}

section:active {
    border: 3px solid #b3b3b3;
    padding: 0;
}

a {
    display: block;
    text-decoration: none;
    width: 18.8em;
}

.up {
    width: 18.8em;
    height: 7em;
    border-radius: 0.74em;
    background: var(--default-color);

}

#ellipse {
    margin-left: auto;
    height: 7em;
    width: 8.5em;
    background-image: url("../../assets/img/Ellipses.svg");
    background-repeat: no-repeat;
}

#down {
    padding: 0.60em;
    border-radius: 0.96em;
    margin-top: 0.14em;
}

h1 {
    color: #1E1E1E;
    font-family: Poppins;
    font-weight: 400;
    line-height: 115.987%;
    font-style: normal;
    font-size: 1.3em;
}
</style>