import Image from "next/image"

export default function QRCard() {
  return (
    <article className="max-w-[320px] bg-white p-4 text-center rounded-[20px]">
      <div className="relative mb-6 aspect-square h-[288px] rounded-[10px] overflow-hidden bg-blue">
        <Image
          src={"/images/image-qr-code.png"}
          fill={true}
          priority={true}
          sizes="288px"
          alt="QR Code for frontendmentor.io"
        />
      </div>
      <header className="px-4 mb-6">
        <h1 className="mb-4 text-[22px] font-bold leading-[28px] text-dark-blue">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-grayish-blue tracking-[calc(-0.19_*_0.01em)] leading-[18px]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </header>
    </article>
  )
}
