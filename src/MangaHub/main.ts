import { Mangahub as _Mangahub } from "./Mangahub";

import { CompatWrapper } from '@paperback/types/lib/compat/0.8'

export const AsuraScans = CompatWrapper(
    {registerHomeSectionsInInitialise: true},
    new _Mangahub(undefined)
)