<template>
<div class="locale-changer">
    <select class="select" v-model="$i18n.locale">
        <v-icon>mdi-home</v-icon>
        <option class="langSelect w-100" v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.name">
                <flag :iso="lang.flag" /> {{ lang.title }}
        </option>
    </select>


</div>
</template>

<script>
export default {
    name: 'LangSwitcher',
    data() {
        return {

            langs: [{
                    flag: "eg",
                    name: "ar",
                    title: "العربية"
                },
                {
                    flag: "us",
                    name: "en",
                    title: "English"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
select {
    appearance: menulist-button !important;
    padding: 5px;
    margin: 0;

    option {
        width: 100%;
        height: 100%;
    }
}
</style>
