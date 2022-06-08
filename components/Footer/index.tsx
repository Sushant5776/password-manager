import Image from 'next/image'
import { FooterProps } from 'types/components/Footer'

const Footer = ({ name }: FooterProps) => {
  return (
    <footer className="sm:py-8 py-4 sm:space-y-0 space-y-1 sm:px-32 px-4 w-full flex sm:flex-row flex-col items-center justify-between h-max sm:h-32 backdrop-blur-3xl rounded-t-lg bg-rakhadi/60">
      {/* About Info */}
      <div className="w-max">
        <h3 className="font-semibold text-center drop-shadow-lg text-kaala/80">
          Designed &amp; Developed By
        </h3>
        <h4 className="text-white font-bold text-[1.75rem] sm:text-3xl drop-shadow-lg">
          Sushant Garudkar
        </h4>
      </div>
      {/* Contact */}
      <div className="w-max h-max">
        <h3 className="sm:font-semibold font-medium text-center drop-shadow-lg sm:mb-1 text-kaala/80">
          Contact
        </h3>
        {/* Social Icons */}
        <div className="-mb-4 sm:mb-0">
          <a
            href="https://twitter.com/SushantGarudkar"
            target="_blank"
            title="Sushant's Twitter"
            className="inline-block"
          >
            <Image
              src="/images/twitter.png"
              className="cursor-pointer"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            title="Sushant's LinkedIn"
            className="inline-block"
          >
            <Image
              src="/images/linkedIn.png"
              className="cursor-pointer"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://instagram.com/garudkar_sush"
            target="_blank"
            title="Sushant's Instagram"
            className="inline-block"
          >
            <Image
              src="/images/instagram.png"
              className="cursor-pointer"
              width={48}
              height={48}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
