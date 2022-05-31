import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="py-8 px-32 w-full flex items-center justify-between h-32 backdrop-blur-3xl rounded-t-lg bg-rakhadi/60">
      {/* About Info */}
      <div className="w-max">
        <h3 className="font-semibold text-center drop-shadow-lg text-kaala/80">
          Designed & Developed By
        </h3>
        <h4 className="text-white font-bold text-3xl drop-shadow-lg">
          Sushant Garudkar
        </h4>
      </div>
      {/* Contact */}
      <div>
        <h3 className="font-semibold text-center drop-shadow-lg mb-1 text-kaala/80">
          Contact
        </h3>
        {/* Social Icons */}
        <div>
          <a
            href="https://twitter.com/SushantGarudkar"
            target="_blank"
            title="Sushant's Twitter"
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
