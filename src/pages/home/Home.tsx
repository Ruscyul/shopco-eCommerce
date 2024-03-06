import NewArrivals from '../../widgets/new-arrivals/NewArrivals';
import TopSelling from '../../widgets/top-selling/TopSelling';
import HeroSection from './HeroSection';
import PartnersSection from './PartnersSection';

function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <NewArrivals />
      <TopSelling />
    </>
  );
}

export default Home;
