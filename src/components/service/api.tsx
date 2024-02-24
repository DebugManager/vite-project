export async function getData (){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        return await response.json()
    }catch (error){
        console.log(error.response)
    }
}

