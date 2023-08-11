import cybertruckImage from '../assets/cybertruck.jpg';
import teslaChargerImage from '../assets/tesla-charger.jpg';
import ImageBackgroundSection from '../components/ImageBackgroudSection/ImageBackgroudSection';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroudNoText';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
  { title: '2.3s 0-60', description: 'very fast' },
];

const CybertruckPage = () => {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Cybertruck"
          description="View inventory"
          backgroundImage={cybertruckImage}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={teslaChargerImage} />
      </section>
      <section className="section">
        <ImageGrid
          image1={cybertruckImage}
          image2={teslaChargerImage}
          text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
      </section>
    </div>
  );
};

export default CybertruckPage;
