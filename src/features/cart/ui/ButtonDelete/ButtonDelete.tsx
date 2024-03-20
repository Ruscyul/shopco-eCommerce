import ButtonIcon from '../../../../shared/ui/button-icon/ButtonIcon';
import TrashcanIcon from '../../../../shared/assets/icons/trashcan.svg?react';

interface ButtonDeleteProps {
  className: string;
  onClick: () => void;
}

function ButtonDelete(props: ButtonDeleteProps) {
  const { className, onClick } = props;
  return <ButtonIcon icon={<TrashcanIcon />} className={className} onClick={onClick} />;
}

export default ButtonDelete;
