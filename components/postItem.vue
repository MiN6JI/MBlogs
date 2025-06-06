<template>
    <div class="post-container p-8 rounded bg-white">
        <h3 class="text-3xl font-bold"><Nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</Nuxt-link></h3>
        <div class="post-meta text-gray-700-flex item-center space-x-2">
            <div class="py-2">
                {{ format(new Date(post.created_at), 'MMMM dd, yyyy') }} 
                | 
                {{ post.user.name }} 
            </div>
        </div>
        <div class="post-preview leading-relaxed mt-4 line-clamp-2">
            {{ post.body }}
        </div>
        <div class="mt-4">
            <Nuxt-link :to="`/posts/${post.id}`"
                class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">Read More</Nuxt-link>
        </div>
    </div>

</template>

<script setup>
import {format} from 'date-fns';
const props = defineProps({
    post: Object,
});

</script>