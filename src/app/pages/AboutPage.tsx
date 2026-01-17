import { AboutSection } from '../components/AboutSection';
import { MissionVisionSection } from '../components/MissionVisionSection';
import { SourcingQuality } from '../components/SourcingQuality';
import { WhyChooseSection } from '../components/WhyChooseSection';

export default function AboutPage() {
  return (
    <div className="pt-32">
      <AboutSection />
      <SourcingQuality />
      <MissionVisionSection />
      <WhyChooseSection />
    </div>
  );
}
