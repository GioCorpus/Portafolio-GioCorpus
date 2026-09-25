import { WitchCraftHero } from '../components/witchcraft/WitchCraftHero';
import { WitchCraftOverview } from '../components/witchcraft/WitchCraftOverview';
import { WitchCraftArchitecture } from '../components/witchcraft/WitchCraftArchitecture';
import { WitchCraftGameSystems } from '../components/witchcraft/WitchCraftGameSystems';
import { WitchCraftCombat } from '../components/witchcraft/WitchCraftCombat';
import { WitchCraftGrid } from '../components/witchcraft/WitchCraftGrid';
import { WitchCraftTurns } from '../components/witchcraft/WitchCraftTurns';
import { WitchCraftMagic } from '../components/witchcraft/WitchCraftMagic';
import { WitchCraftNahual } from '../components/witchcraft/WitchCraftNahual';
import { WitchCraftProgression } from '../components/witchcraft/WitchCraftProgression';
import { WitchCraftAffinity } from '../components/witchcraft/WitchCraftAffinity';
import { WitchCraftNarrative } from '../components/witchcraft/WitchCraftNarrative';
import { WitchCraftUnity } from '../components/witchcraft/WitchCraftUnity';
import { WitchCraftPlatform } from '../components/witchcraft/WitchCraftPlatform';
import { WitchCraftStatus } from '../components/witchcraft/WitchCraftStatus';
import { WitchCraftDecisions } from '../components/witchcraft/WitchCraftDecisions';
import { WitchCraftRoadmap } from '../components/witchcraft/WitchCraftRoadmap';
import { WitchCraftRepository } from '../components/witchcraft/WitchCraftRepository';
import { CaseStudyLayout } from '../components/case-study/CaseStudyLayout';
import { WitchCraftLocalNav } from '../components/witchcraft/WitchCraftLocalNav';

export function WitchCraftCaseStudyPage() {
  return (
    <CaseStudyLayout>
      <WitchCraftLocalNav />
      <WitchCraftHero />
      <WitchCraftOverview />
      <WitchCraftArchitecture />
      <WitchCraftGameSystems />
      <WitchCraftCombat />
      <WitchCraftGrid />
      <WitchCraftTurns />
      <WitchCraftMagic />
      <WitchCraftNahual />
      <WitchCraftProgression />
      <WitchCraftAffinity />
      <WitchCraftNarrative />
      <WitchCraftUnity />
      <WitchCraftPlatform />
      <WitchCraftStatus />
      <WitchCraftDecisions />
      <WitchCraftRoadmap />
      <WitchCraftRepository />
    </CaseStudyLayout>
  );
}

export default WitchCraftCaseStudyPage;