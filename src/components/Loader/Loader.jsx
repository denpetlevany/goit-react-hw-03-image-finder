import { Oval } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </div>
  );
}