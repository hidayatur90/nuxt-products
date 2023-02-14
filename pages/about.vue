<template>
    <div>
        <Head>
            <Title>HD | About</Title>
            <Meta name="description" content="About page"/>
        </Head>
        <h2 class="text-2xl font-bold pb-3">About {{ data.name }}</h2>
        <p>He's <span class="font-bold text-red-500"> {{ data.age }}</span> years old. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure est perferendis quae rem. Incidunt voluptate soluta fugiat odio blanditiis quo unde consectetur error quae aliquam consequatur exercitationem adipisci officiis natus totam, maxime tempore accusamus ex dolore quidem inventore doloremque dicta repudiandae. Mollitia harum soluta aperiam, excepturi nesciunt, veritatis temporibus voluptas dolores omnis corrupti ullam. Perspiciatis nulla error, quod possimus saepe, eveniet, deleniti totam distinctio molestias quisquam dignissimos modi alias tempora. Commodi, reiciendis provident necessitatibus quos illo ab aliquid nihil quasi laboriosam nesciunt repudiandae saepe eos accusamus exercitationem, unde animi incidunt similique. Itaque, iste! Autem voluptatibus perspiciatis delectus earum rem!</p>
    </div>
    <div class="text-3xl font-bold">
        {{ data.message }}
    </div>
</template>

<script setup>

    // const { params } = this.$route.query.name

    const { data } = await useFetch('/api/about?name=Hida', {
        method: 'post',
        body: { age: 31 }
    })
</script>