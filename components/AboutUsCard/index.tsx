import Image from 'next/image'

const AboutUsCard = () => {
  return (
    <div className="p-4 rounded-lg bg-transparent w-max h-max max-w-sm border backdrop-blur-3xl shadow-md space-y-4 border-rakhadi/50">
      <h2 className="text-rakhadi drop-shadow-md font-semibold text-2xl text-center">
        About Me,
      </h2>
      {/* Author Image */}
      <div className="w-44 h-44 p-2 mx-auto rounded-full relative">
        <Image
          src="/images/author.jpg"
          title="Sushant Garudkar"
          layout="fill"
          objectFit="contain"
          className="rounded-full shadow-mg drop-shadow-md"
        />
      </div>
      {/* Autor Title and Description */}
      <div className="space-y-1">
        <h2 className="text-laal/90 drop-shadow-md font-semibold text-center text-2xl">
          Sushant Garudkar
        </h2>
        <p className="text-rakhadi/80 text-center drop-shadow-sm font-medium">
          Savitribai Phule Pune University <strong>&middot;</strong>{' '}
          Wannapreneur <strong>&middot;</strong> Spiritual ~ Pune, MH, India
        </p>
      </div>
    </div>
  )
}

export default AboutUsCard
