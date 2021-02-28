
import titleStyle from '../styles/Title.module.css'
const Title = ({title}) => {
  return (
    <div className={titleStyle.title}>
      <div className={titleStyle.titleContent}>
        <h2>{title}</h2>
        <span className={`btn ${titleStyle.scrollBtn}`}>
          scroll down <i className="bx bx-right-arrow-alt"></i>
        </span>
      </div>
    </div>
  );
};

export default Title;
