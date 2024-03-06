import ProductCard from '../../entities/product/ui/ProductCard';
import Section from '../../shared/section/Section';

function NewArrivals() {
  return (
    <Section title="New Arrivals" buttonText="View All">
      <ProductCard />
    </Section>
  );
}

export default NewArrivals;
