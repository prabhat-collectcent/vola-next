import CampaignCreatePage from './CampaignCreatePage';
import { CampaignProvider } from './context/CampaignContext';

export default function CreateCampaign() {

  return (
    <CampaignProvider>
      <CampaignCreatePage />
    </CampaignProvider>
  )
}
