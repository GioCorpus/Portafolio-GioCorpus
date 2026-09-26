import { QEOSHero } from '../components/qeos/QEOSHero';
import { QEOSOverview } from '../components/qeos/QEOSOverview';
import { QEOSArchitecture } from '../components/qeos/QEOSArchitecture';
import { QEOSKernel } from '../components/qeos/QEOSKernel';
import { QEOSMemory } from '../components/qeos/QEOSMemory';
import { QEOSHAL } from '../components/qeos/QEOSHAL';
import { QEOSDrivers } from '../components/qeos/QEOSDrivers';
import { QEOSIPC } from '../components/qeos/QEOSIPC';
import { QEOSTelemetry } from '../components/qeos/QEOSTelemetry';
import { QEOSSecurity } from '../components/qeos/QEOSSecurity';
import { QEOSPCIE } from '../components/qeos/QEOSPCIE';
import { QEOSGPU } from '../components/qeos/QEOSGPU';
import { QEOSQuantum } from '../components/qeos/QEOSQuantum';
import { QEOSEnergy } from '../components/qeos/QEOSEnergy';
import { QEOSDashboard } from '../components/qeos/QEOSDashboard';
import { QEOSCluster } from '../components/qeos/QEOSCluster';
import { QEOSObservability } from '../components/qeos/QEOSObservability';
import { QEOSTesting } from '../components/qeos/QEOSTesting';
import { QEOSDecisions } from '../components/qeos/QEOSDecisions';
import { QEOSStatus } from '../components/qeos/QEOSStatus';
import { QEOSPhase3 } from '../components/qeos/QEOSPhase3';
import { QEOSCritique } from '../components/qeos/QEOSCritique';
import { QEOSSummary } from '../components/qeos/QEOSSummary';
import { CaseStudyLayout } from '../components/case-study/CaseStudyLayout';
import { LocalNav } from '../components/case-study/LocalNav';
import { SEO } from '../components/SEO';

export function QEOSCaseStudyPage() {
  return (
    <>
      <SEO
        title="QuantumEnergyOS V.04 | Case Study"
        description="Capability-based microkernel OS for heterogeneous computing: Rust kernel, typed memory management, IPC channels, quantum runtime abstraction, energy telemetry. Research prototype — not a runnable OS."
        path="/projects/quantum-energy-os"
      />
      <CaseStudyLayout>
        <LocalNav />
        <QEOSHero />
        <QEOSOverview />
        <QEOSArchitecture />
        <QEOSKernel />
        <QEOSMemory />
        <QEOSHAL />
        <QEOSDrivers />
        <QEOSIPC />
        <QEOSTelemetry />
        <QEOSSecurity />
        <QEOSPCIE />
        <QEOSGPU />
        <QEOSQuantum />
        <QEOSEnergy />
        <QEOSDashboard />
        <QEOSCluster />
        <QEOSObservability />
        <QEOSTesting />
        <QEOSDecisions />
        <QEOSStatus />
        <QEOSPhase3 />
        <QEOSCritique />
        <QEOSSummary />
      </CaseStudyLayout>
    </>
  );
}

export default QEOSCaseStudyPage;