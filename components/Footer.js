import Link from 'next/link'
import * as Config from '../_siteConfig'

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className=" bg-neutral-700 pt-8 pb-6 text-neutral-300 ">
        <div className="container mx-auto flex flex-col px-6 py-2 md:flex-row  2xl:max-w-[1280px]">
          <div className="basis-1/3 px-4">
            <h2 className="border-b border-neutral-400 pb-2 text-neutral-300">
              Latest News
            </h2>
            <p>cool things are happening</p>
          </div>
          <div className="basis-1/3 px-4">
            <h2 className="border-b border-neutral-400 pb-2 text-neutral-300">
              Quick Links
            </h2>
            <ul>
              <li className="pb-2">
                <Link href="/">
                  <a className="border-b border-dotted border-neutral-200 text-neutral-300 hover:border-b-0 hover:text-neutral-200">
                    cool things are happening
                  </a>
                </Link>
              </li>
              <li className="pb-2">
                <Link href="/">
                  <a className="border-b border-dotted border-neutral-200 text-neutral-300 hover:border-b-0 hover:text-neutral-200">
                    cool things are happening
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/3 px-4">
            <h2 className="border-b border-neutral-400 pb-2 text-neutral-300">
              Contact Us
            </h2>
            <address>
              {Config.businessName}
              <br />
              {Config.streetAddress}
              <br />
              {Config.city}, {Config.state} {Config.zip}
              <br />
              <a
                className="border-b border-dotted border-neutral-200 text-neutral-300 hover:border-b-0 hover:text-neutral-200"
                href={`mailto:${Config.email}`}
              >
                {Config.email}
              </a>
              <br />
              {Config.phone}
              <br />
              {Config.hours}
            </address>
          </div>
        </div>
      </div>

      <div className="bg-neutral-800 p-4 text-center text-sm text-neutral-400">
        &copy; Copyright {Config.dctermsrightsHolder} {new Date().getFullYear()}
      </div>
    </footer>
  )
}
