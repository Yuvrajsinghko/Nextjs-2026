import { createTodo } from "@/actions/actions";


const Home = () => {
  
  return (
    <div className="h-screen bg-black text-5xl  text-amber-600 font-bold">
      <form action={createTodo} className="flex flex-col items-center justify-center h-screen gap-14">
        <input name="title" className="border border-amber-300" />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Home