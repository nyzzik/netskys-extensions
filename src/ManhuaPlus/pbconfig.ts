import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types"

export default {
    version: '1.0.0',
    name: 'ManhuaPlus',
    icon: 'icon.png',
    developers: [
        {
            name: "nyzzik",
            github: "nyzzik"
        }
    ],
    description: 'Extension that pulls manga from manhuaplus.com',
    contentRating: ContentRating.EVERYONE,
    badges: [{
        label: 'Buggy',
        textColor: 'black',
        backgroundColor: 'red'
    }],
    capabilities: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI | SourceIntents.MANGA_SEARCH
} satisfies SourceInfo