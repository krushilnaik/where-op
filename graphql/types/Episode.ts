import { extendType, objectType } from "nexus";

export const Episode = objectType({
	name: "Episode",
	definition(t) {
		t.id("id");
		t.int("episodeNumber");
	},
});

export const EpisodeQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("episode", {
			type: "Episode",
			async resolve(parent, args, context) {
				return await context.prisma.episode.findFirst({});
			},
		});
	},
});
