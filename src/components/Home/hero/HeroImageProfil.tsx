import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function HeroImageProfil() {
  return (
    <div className="absolute md:top-1/2 left-40 md:left-16 lg:left-52 transform -translate-y-1/2 lg:-translate-x-1/2 z-10">
      <div className="relative">
        <Avatar className="w-40 h-40 border-4 border-white shadow-lg">
          <AvatarImage
            src="/images/Photo_profil.png"
            alt="Nhat-Quan Ho Nguyen"
            className="object-cover"
          />
        </Avatar>
      </div>
    </div>
  );
}
