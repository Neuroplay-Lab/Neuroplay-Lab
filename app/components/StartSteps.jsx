import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter}`}>
    <div
      className={`${styles.flexCenter} rounded-[24px] bg-[#323F5D] self-start md:self-center`}
    >
      <p className="font-bold text-[20px] text-white m-3">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
