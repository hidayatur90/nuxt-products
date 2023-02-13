<template>
    <div class="card max-w-sm mt-7 mx-auto text-center">
        <div class="green">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
        </div>
        <div class="text-2xl text-center">Ooopps... {{ error.message }}</div>
        <div class="text-5xl text-center font-bold">{{ error.statusCode }}</div>
        <button class="btn mt-7" @click="handleClearError">Back Home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({
        redirect : '/'
    })

</script>

<style scoped>
    .green {
        color: #12b488;
    }
</style>