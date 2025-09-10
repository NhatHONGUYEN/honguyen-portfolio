import HeroActionContact from './HeroActionContact';
import HeroInfo from './HeroInfo';
import HeroBanner from './HeroBanner';
import HeroImageProfil from './HeroImageProfil';

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto max-w-5xl">
        <div className="relative">
          <HeroBanner />
          <HeroImageProfil />
          <div className="border border-primary/10 bg-background pt-16 sm:pt-20 lg:pt-32 pb-8 px-4 sm:px-6 lg:pl-32 lg:pr-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mx-auto max-w-4xl">
              <HeroInfo />
              <HeroActionContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
