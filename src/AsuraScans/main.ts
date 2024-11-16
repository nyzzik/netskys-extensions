import { AsuraScans as _AsuraScans } from "./AsuraScans";

import { CompatWrapper } from '@paperback/types/lib/compat/0.8'

export const AsuraScans = CompatWrapper(
    {registerHomeSectionsInInitialise: true},
    new _AsuraScans(undefined)
)