import { Suspense } from 'react';
import CreateAdPage from './CreateAd';

export default function CreateCampaign() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateAdPage />
    </Suspense>

  )
}
