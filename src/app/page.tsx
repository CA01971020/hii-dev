export default function Home() {
  return (
    <div className=" relative top-28">
      <h1 className="relative text-center text-xl">Home</h1>

      <div className="relative mt-10 bg-amber-50 pt-2 pb-2 pr-4 pl-12 ml-8 mr-8 rounded-2xl">
        <h2 className="relatived text-base text-emerald-500 font-bold">
          Profile
        </h2>
        <p className="text-gray-800 text-sm">
          Web Engineer. <br />
          Ehime / Japan. | Next Tokyo. <br />
          Kawahara Computer Business College. <br />
          Sanno University.
        </p>
      </div>

      <div className="relative mt-16 bg-amber-50 pt-2 pb-2 pr-4 pl-12 ml-8 mr-8 rounded-2xl">
        <h2 className="relatived text-base text-emerald-500 font-bold">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-gray-800 text-sm">
            HTML5 <br />
            CSS3 <br />
            JavaScript <br />
            TypeScript <br />
            Python
          </p>
          <p className="text-gray-800 text-sm">
            React <br />
            Next.js <br />
            FastAPI <br />
            TailwindCSS <br />
            Azure <br />
            GitHub
          </p>
        </div>
      </div>
    </div>
  );
}
