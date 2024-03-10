import Input from '../../shared/ui/input/Input';
import icon from '../../shared/assets/icons/search.svg';

interface SearchBarProps {
  className?: string;
  text?: string;
}

function SearchBar(props: SearchBarProps) {
  const { className = '', text = '' } = props;

  return <Input text={text} className={className} icon={icon} />;
}

export default SearchBar;
