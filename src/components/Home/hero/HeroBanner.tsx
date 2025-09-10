import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="w-full h-64 sm:h-72 lg:h-80">
      <Image
        src={'/images/Background_pic.jpg'}
        alt="banner-img"
        width={1080}
        height={267}
        className="w-full h-full object-cover "
      />
    </div>
  );
}
