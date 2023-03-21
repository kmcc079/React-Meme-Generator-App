import Background from '../assets/images/bg_make_anything2.jpg'

const Home = () => {
  return (
    <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className="flex flex-row justify-center mx-auto bg-cover bg-fixed">
      <div className="flex place-items-start pt-[14%] h-screen">
        <h1 className="p-5 bg-green-200 text-green-800 text-shadow font-bold rounded-xl text-xl border-4 border-teal-400 shadow-2xl">Welcome to the House of Memes</h1>
      </div>
    </div>
  )
}

export default Home