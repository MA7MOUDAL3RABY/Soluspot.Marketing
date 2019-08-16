<template>
<section id="SuccessStories">
    <h3 class="heading text-center mt-5 mb-5">Success Stories</h3>
    <div id="app">
        <div class="title-container">
            <div>
                <h3 class="title">
                    Our Projects
                </h3>
            </div>
            <div class="filters">
                <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" @click="setFilter('ALL')">ALL</span>
                <span class="filter" v-bind:class="{ active: currentFilter === 'ART' }" @click="setFilter('ART')">ART</span>
                <span class="filter" v-bind:class="{ active: currentFilter === 'WORKSHOPS' }" @click="setFilter('WORKSHOPS')">WORKSHOPS</span>
                <span class="filter" v-bind:class="{ active: currentFilter === 'FUN' }" @click="setFilter('DOODLES')">DOODLES</span>
            </div>
        </div>

        <transition-group class="projects" name="projects">
            <div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'">
                <div v-for="project in projects" v-bind:key="project.title">
                    <div class="project-image-wrapper">
                        <img class="project-image" v-bind:src="project.image">
                        <div class="gradient-overlay"></div>
                        <div class="circle">
                            <span class="project-title">{{project.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>

</section>
</template>

<script>
export default {
    name: 'SuccessStories',
    data() {
        return {
            currentFilter: 'ALL',
            projects: [{
                    title: 'Artwork',
                    image: 'https://picsum.photos/g/200?image=122',
                    category: 'ART',
                },
                {
                    title: 'Charcoal',
                    image: 'https://picsum.photos/g/200?image=116',
                    category: 'ART',
                },
                {
                    title: 'Sketching',
                    image: 'https://picsum.photos/g/200?image=121',
                    category: 'DOODLES',
                },
                {
                    title: 'Acrillic',
                    image: 'https://picsum.photos/g/200?image=133',
                    category: 'WORKSHOPS',
                },
                {
                    title: 'Pencil',
                    image: 'https://picsum.photos/g/200?image=134',
                    category: 'DOODLES',
                },
                {
                    title: 'Pen',
                    image: 'https://picsum.photos/g/200?image=115',
                    category: 'ART',
                },
                {
                    title: 'Inking',
                    image: 'https://picsum.photos/g/200',
                    category: 'WORKSHOPS',
                },
            ],
        };
    },
    methods: {
        setFilter(filter) {
            this.currentFilter = filter;
        },
    },

};
</script>

<style lang="scss" scoped>
section#SuccessStories {
    .heading {
        font-size: 2em;
    }

    .title-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-family: 'Dawning of a New Day', cursive;
        font-size: 30pt;
        font-weight: normal;
    }

    .project-title {
        font-size: 16pt
    }

    .filter {
        font-family: arial;
        padding: 6px 6px;
        cursor: pointer;
        border-radius: 6px;
        transition: all 0.35s;
    }

    .filter.active {
        box-shadow: 0px 1px 3px 0px #00000026;
    }

    .filter:hover {
        background: lightgray;
    }

    .projects {
        margin-bottom: 50px;
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .projects-enter {
        transform: scale(0.5) translatey(-80px);
        opacity: 0;
    }

    .projects-leave-to {
        transform: translatey(30px);
        opacity: 0;
    }

    .projects-leave-active {
        position: absolute;
        z-index: -1;
    }

    .circle {
        text-align: center;
        position: absolute;
        bottom: -38px;
        left: 40px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        /*  border:1px solid black; */
        display: flex;
        box-shadow: 0px -4px 3px 0px #494d3257;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        /*  box-shadow:0px -3px 3px #484848a6; */
    }

    .project {
        transition: all .35s ease-in-out;
        margin: 10px;
        box-shadow: 0px 2px 8px lightgrey;
        border-radius: 3px;
        width: 180px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-image-wrapper {
        position: relative;
    }

    .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 150px;
        opacity: 0.09;
        background:
            linear-gradient(to bottom, rgba(0, 210, 247, 0.65) 0%, rgba(0, 210, 247, 0.64) 1%, rgba(0, 0, 0, 0) 100%),
            linear-gradient(to top, rgba(247, 0, 156, 0.65) 0%, rgba(247, 0, 156, 0.64) 1%, rgba(0, 0, 0, 0) 100%);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .project-image {
        width: 100%;
        height: 150px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
}
</style>
