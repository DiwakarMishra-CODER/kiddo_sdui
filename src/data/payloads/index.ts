import type { CampaignMeta } from '@/types';

export { defaultPayload } from './default';
export { backToSchoolPayload } from './backToSchool';
export { summerPlayhousePayload } from './summerPlayhouse';
export { mysteryCarnivalPayload } from './mysteryCarnival';

import { defaultPayload } from './default';
import { backToSchoolPayload } from './backToSchool';
import { summerPlayhousePayload } from './summerPlayhouse';
import { mysteryCarnivalPayload } from './mysteryCarnival';

export const campaigns: CampaignMeta[] = [
  { id: 'default', label: 'Default', payload: defaultPayload },
  { id: 'back-to-school', label: 'Back to School', payload: backToSchoolPayload },
  { id: 'summer-playhouse', label: 'Summer Playhouse', payload: summerPlayhousePayload },
  { id: 'mystery-carnival', label: 'Mystery Carnival', payload: mysteryCarnivalPayload },
];
