"use server"

 export async function createTodo(formdata){
    "use server"
    const title = formdata.get("title")
    console.log("Creating a todo",title);
  }