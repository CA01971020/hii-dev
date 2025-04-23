import NextLink from "next/link";
import CustomButton from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" relative top-28">
      <h1 className="relative text-center">Home</h1>

      <div className="relative mt-10 bg-white pt-4 pb-5 pr-8 pl-8 ml-8 mr-8 rounded-2xl">
        <h2 className="relatived">Profile</h2>
        <p className="text-gray-800 text-sm mt-1">
          Web Engineer. <br />
          Ehime / Japan. | Next Tokyo. <br />
          Kawahara Computer Business College. <br />
          Sanno University.
        </p>
      </div>

      <div className="relative mt-16 bg-white pt-4 pb-5 pr-8 pl-8 ml-8 mr-8 rounded-2xl">
        <h2 className="relatived">Skills</h2>
        <div className="grid grid-cols-2 gap-4 mt-1">
          <p>
            HTML5 <br />
            CSS3 <br />
            JavaScript <br />
            TypeScript <br />
            Python
          </p>
          <p>
            React <br />
            Next.js <br />
            FastAPI <br />
            TailwindCSS <br />
            Azure <br />
            GitHub
          </p>
        </div>
      </div>

      <div className="relative mt-10 bg-white pt-4 pb-6 pr-8 pl-8 ml-8 mr-8 rounded-2xl">
        <h2 className="relatived">Blog</h2>
        <p className="mt-1">Zenn / 14 Article / 40 Likes / 3 Flowers</p>
        <a
          href="https://zenn.dev/aputech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton buttontext="Visit Zenn" />
        </a>
        <p className="mt-1">note / 3 Article / 21 Likes 6500 Views</p>
        <a
          href="https://note.com/hii_hgmt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton buttontext="Visit note" />
        </a>
      </div>

      <div className="relative mt-10 bg-white pt-4 pb-6 pr-8 pl-8 ml-8 mr-8 rounded-2xl">
        <h2 className="relatived">Portfolio</h2>
        <div className="mt-2">
          <NextLink href="/portfolio">
            <CustomButton buttontext="My Portfolios" />
          </NextLink>
        </div>
      </div>

      <div className="relative mt-10 bg-white pt-4 pb-6 pr-8 pl-8 ml-8 mr-8 rounded-2xl">
        <h2 className="relatived">SNS</h2>
        <div className="grid grid-cols-2 gap-4 mt-1">
          <p>
            Twitter <br />
            GitHub
          </p>
          <div>
            <CustomButton buttontext="My Portfolios" />
            <CustomButton buttontext="My Portfolios" />
          </div>
        </div>
      </div>

      <div className="relative mt-10 bg-white pt-4 pb-6 pr-8 pl-8 ml-8 mr-8 rounded-2xl">
        <h2 className="relatived">Contact</h2>
        <a
          href="mailto:CA01971020@st.kawahara.ac.jp"
          className="text-gray-800 text-sm"
        >
          E-Mail
        </a>
        <p>Twitter DM</p>
      </div>
    </div>
  );
}
