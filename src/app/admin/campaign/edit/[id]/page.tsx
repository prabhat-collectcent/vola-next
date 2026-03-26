import CampaignEditPage from './CampaignEditPage';
import { CampaignProvider } from './context/CampaignContext';

export default function EditCampaign( {params}: any) {
  return (
    <CampaignProvider>
      <CampaignEditPage queryParams={params} />
    </CampaignProvider>
  )
}
