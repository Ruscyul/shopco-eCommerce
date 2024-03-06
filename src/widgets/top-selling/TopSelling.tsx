import ProductCard from '../../entities/product/ui/ProductCard';
import Section from '../../shared/section/Section';

function TopSelling() {
  return (
    <Section title="Top Selling" buttonText="View All">
      <ProductCard />
    </Section>
  );
}

export default TopSelling;
