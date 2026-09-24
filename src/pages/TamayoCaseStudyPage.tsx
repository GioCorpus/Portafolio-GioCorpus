import { TamayoHero } from '../components/tamayo/TamayoHero';
import { TamayoOverview } from '../components/tamayo/TamayoOverview';
import { TamayoWhy25D } from '../components/tamayo/TamayoWhy25D';
import { TamayoNativeVsUnity } from '../components/tamayo/TamayoNativeVsUnity';
import { TamayoArchitecture } from '../components/tamayo/TamayoArchitecture';
import { TamayoScene } from '../components/tamayo/TamayoScene';
import { TamayoLayers } from '../components/tamayo/TamayoLayers';
import { TamayoTransforms } from '../components/tamayo/TamayoTransforms';
import { TamayoStatus } from '../components/tamayo/TamayoStatus';
import { CaseStudyLayout } from '../components/case-study/CaseStudyLayout';
import { TamayoLocalNav } from '../components/tamayo/TamayoLocalNav';

export function TamayoCaseStudyPage() {
  return (
    <CaseStudyLayout>
      <TamayoLocalNav />
      <TamayoHero />
      <TamayoOverview />
      <TamayoWhy25D />
      <TamayoNativeVsUnity />
      <TamayoArchitecture />
      <TamayoScene />
      <TamayoLayers />
      <TamayoTransforms />
      <TamayoStatus />
    </CaseStudyLayout>
  );
}

export default TamayoCaseStudyPage;