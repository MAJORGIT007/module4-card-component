import tech from "./assets/tech.jpg"

function App() {

  return (
    <main className="flex flex-col justify-center items-center h-screen w-full">
      <div className="w-[90%] max-w-[700px] flex flex-col sm:flex-row shadow-xl shadow-dark/40 rounded-xl">
        <img src={tech} alt="iphone and airpods on a macbook keyboard" className="object-cover basis-[200px] min-w-[0px] min-h-[0px] rounded-t-xl sm:rounded-none sm:rounded-l-xl sm:basis-[350px]" />
        <div className="p-5 bg-dark rounded-b-xl flex flex-col sm:rounded-none sm:rounded-r-xl">
          <h1 className="text-accent text-3xl sm:text-4xl font-black">7 tech tips and tricks that you need to know</h1>
          <p className="text-light sm:text-lg mt-2">Using these 7 proven tips from experts in the industry, you can save time, money and more!</p>
          <div className="mt-16 sm:mt-32 flex justify-between items-end">
            <p className="leading-4 text-light mt-auto sm:text-lg sm:leading-4"><span className="text-xl sm:text-2xl font-black">15</span><br /> minute <br />read</p>
            <a href="#" className="ml-2 bg-accent py-2 px-7 text-xl font-black tracking-wide rounded-md inline-block hover:bg-accent/80 focus:bg-accent/80">read more</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
