import { ManhuaPlus as _ManhuaPlus } from "./ManhuaPlus";

import { CompatWrapper } from '@paperback/types/lib/compat/0.8'

export const AsuraScans = CompatWrapper(
    {registerHomeSectionsInInitialise: true},
    new _ManhuaPlus(undefined)
)