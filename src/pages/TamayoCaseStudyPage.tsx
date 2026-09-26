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
import { SEO } from '../components/SEO';

export function TamayoCaseStudyPage() {
  return (
    <>
      <SEO
        title="Tamayo 2.5D Engine | Case Study"
        description="Native C++20 2.5D rendering engine with layer-based parallax, timeline animation, and editor tooling. Parallel Unity 6 URP prototype. Native core: CMake, ECS, C++20, GLM, nlohmann/json."
        path="/projects/tamayo"
      />
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
    </>
  );
}

export default TamayoCaseStudyPage;