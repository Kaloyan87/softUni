import * as request from "./requester";

const baseUrl = "http://localhost:8000/api/recipes/"


// get all recipes
export const getAll = async () => await request.get(baseUrl);

// delete recipes
export const deleteRecipe = async (id) => await request.del(`${baseUrl}${id}/`);

//create recipes
export const create = async (data)=> await request.post(baseUrl,data);



// post without requester
// export const create = async (data) => {
//     const response = await fetch(baseUrl, {
//         headers: { 'Content-Type': 'application/json' },
//         method: 'POST',
//         mode: 'cors',
//         body: JSON.stringify(data)
//     })
//
//     const result = await response.json()
//     return result
// }
