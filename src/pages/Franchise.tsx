import FranchiseHero from '../components/franchise/FranchiseHero';
import KeyDetails from '../components/franchise/KeyDetails';
import FranchiseModels from '../components/franchise/FranchiseModels';
import ProcessTimeline from '../components/franchise/ProcessTimeline';
import Testimonials from '../components/franchise/Testimonials';
import FranchiseContact from '../components/franchise/FranchiseContact';
// FAQ removed per request

export default function Franchise() {
  return (
    <div>
      <FranchiseHero />
      <KeyDetails />
      <FranchiseModels />
      <ProcessTimeline />
      <Testimonials />
      {/* Franchise FAQ section removed */}
      <FranchiseContact />
    </div>
  );
}
