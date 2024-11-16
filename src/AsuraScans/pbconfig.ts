import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types"

export default {
    version: '0.9.0',
    name: 'AsuraScans',
    icon: 'icon.png',
    developers: [
        {
            name: "nyzzik",
            github: "nyzzik"
        }
    ],
    description: 'Asura Scans',
    contentRating: ContentRating.EVERYONE,
    badges: [],
    capabilities: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.SETTINGS_UI | SourceIntents.MANGA_TRACKING | SourceIntents.MANGA_SEARCH
} satisfies SourceInfo