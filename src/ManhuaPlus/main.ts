import { ManhuaPlus as _ManhuaPlus } from "./ManhuaPlus";

import { CompatWrapper } from '@paperback/types/lib/compat/0.8'

export const ManhuaPlus = CompatWrapper(
    {registerHomeSectionsInInitialise: true},
    new _ManhuaPlus(undefined)
)