import './FeatureCard.scss'
import { ReactComponent as Trapezoid } from '../../resources/images/trapezoid.svg'
import { ReactComponent as SearchData } from '../../resources/images/searchData.svg'

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl }) => {
const FeatureCard = ({ title, description, imageUrl } : FeatureCardProps) => {
  return (
    <div className="feature-card">
      {/* <Trapezoid className='trapezoid' /> */}
      <div className="content">
        <div className="img-container">
          <SearchData className='img'/>
        </div>
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#" className="learn-more">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
