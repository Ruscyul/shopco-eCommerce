import NewArrivals from '../../widgets/new-arrivals/NewArrivals';
import TopSelling from '../../widgets/top-selling/TopSelling';
import DressStyle from './DressStyleSection';
import HeroSection from './HeroSection';
import PartnersSection from './PartnersSection';

function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
    </>
  );
}

export default Home;
