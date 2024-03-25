import styles from './Loader.module.scss';

interface LoaderProps {
  className: string;
}

function Loader(props: LoaderProps) {
  const { className } = props;

  return <div className={`${styles.loader} ${className}`}></div>;
}

export default Loader;
