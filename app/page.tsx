import { getChartsData, getKpiData } from '@/lib/data';
import { KpiRow } from '@/components/dashboard/kpiRow';
import { ChartsSection } from '@/components/dashboard/chartsSection';

export default async function DashboardPage() {
  const [kpiData, chartsData] = await Promise.all([
    getKpiData(),
    getChartsData(),
  ]);

  return (
    <main className='flex gap-4 min-h-screen flex-col'>
      <div className='flex-1 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full'>
        <KpiRow {...kpiData} />
        <ChartsSection {...chartsData} />
      </div>
    </main>
  );
}
