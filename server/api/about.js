export default defineEventHandler( async (event) => {

    // Query params
    const { name } = getQuery(event) // getQuery

    // Post method
    const { age } = await readBody(event) //ReadBody

    return {
        name : name,
        age : age,
        message: `My name is ${name} and my age is ${age} years old.`,
    }
})