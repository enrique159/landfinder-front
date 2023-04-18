<template>
    <section class="mb-5">
        <div class="detail-comp">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" v-for="(item, index) in detailList" :key="index">
                    <h2 class="accordion-header" :id="`heading${index}`">
                        <button class="accordion-button ps-0 tc-text ff-secondary" :class="{ 'collapsed': index !== 0 }" type="button"
                            data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true"
                            :aria-controls="`collapse${index}`">
                            {{ item.title }}
                        </button>
                    </h2>
                    <div :id="`collapse${index}`" class="accordion-collapse collapse" :class="{ show: index === 0 }"
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body ps-5">
                            {{ item.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        detailList: [
            {
                title: "Anális Legal",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum atque deserunt sed ex, inventore quos ipsum nulla sapiente laboriosam similique error natus nobis minus blanditiis, aliquam dolor neque autem excepturi."
            },
            {
                title: "Anális Técnico",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum atque deserunt sed ex, inventore quos ipsum nulla sapiente laboriosam similique error natus nobis minus blanditiis, aliquam dolor neque autem excepturi."
            },
            {
                title: "Anális Comercial",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum atque deserunt sed ex, inventore quos ipsum nulla sapiente laboriosam similique error natus nobis minus blanditiis, aliquam dolor neque autem excepturi."
            }
        ]
    }),
}
</script>

<style lang="scss" scoped>
.detail-comp {
    padding: 0;
    margin: 0 auto;
}

.accordion-item {
    border: none;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    color: var(--color-white-2);
}

.accordion-button {
    background-color: transparent;
    box-shadow: none;
}

.accordion-button {
    background-color: transparent;
    box-shadow: none;
    font-size: var(--h3-font-size);
    color: var(--color-text-ligh);
    font-weight: var(--font-medium);
}

.accordion-button:not(.collapsed) {
    color: var(--color-white-2);
}

.accordion-body {
    font-size: 1rem;
}

.arrow-invert {
    transform: rotate(90deg);
}
</style>