import { Suspense } from 'react';
import EditAdPage from './CreateAd';

export default function CreateCampaign() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditAdPage />
    </Suspense>

  )
}
