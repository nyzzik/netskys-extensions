import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types"

export default {
    version: '3.1.0',
    name: 'Mangahub',
    icon: 'icon.png',
    developers: [
        {
            name: "nyzzik",
            github: "nyzzik"
        }
    ],
    description: 'Extension that pulls manga from mangahub.io',
    contentRating: ContentRating.MATURE,
    badges: [{
        label: 'Buggy',
        textColor: 'black',
        backgroundColor: 'red'
    }],
    capabilities: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
} satisfies SourceInfo