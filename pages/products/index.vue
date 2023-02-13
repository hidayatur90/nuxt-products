<template>
    <div>
        <Head>
            <Title>HD Products</Title>
            <Meta name="description" content="Product Page"/>
        </Head>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    const { data : products } = await useFetch('https://fakestoreapi.com/products')

    // useHead({
    //     title : 'HD Product',
    //     meta : [
    //         {name : 'description', content : 'Products Page'}
    //     ]
    // })

</script>