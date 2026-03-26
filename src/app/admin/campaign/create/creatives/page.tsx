import { Suspense } from 'react';
import CampaignCreatePage from './CreateAd';

export default function CreateCampaign() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CampaignCreatePage />
    </Suspense>

  )
}
