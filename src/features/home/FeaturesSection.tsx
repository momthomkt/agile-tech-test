import './FeaturesSection.scss'
import FeatureCard from './FeatureCard';
import { ReactComponent as HeroSectionImg } from '../../resources/images/heroSection.svg'
const FeaturesSection = () => {
  const features = [
    {
      title: 'Search Data',
      description:
        'Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time. Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.',
      imageUrl: '/images/search-data.png',
    },
    {
      title: '24 Hours Access',
      description:
        'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
      imageUrl: '/images/24-hours-access.png',
    },
    {
      title: 'Print Out',
      description:
        'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
      imageUrl: '/images/print-out.png',
    },
    {
      title: 'Security Code',
      description:
        'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.',
      imageUrl: '/images/security-code.png',
    },
  ];
  return (
    <section className="feature-section">
      <div className="hbox">
        <div className="head">
          <div className="title">
            Features
          </div>
          <p className="description">
            {/* <p>Some of the features and advantages that we provide for those of you</p>
            <p>who store data in this Data Warehouse.</p> */}
            Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
          </p>
          
        </div>
        <div className="body">
          {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
        />
      ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection