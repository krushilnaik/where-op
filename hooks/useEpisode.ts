import { gql, useQuery } from "@apollo/client";

interface Response {
	episodeNumber: number;
}

export async function useEpisode() {
	const { data } = await useQuery<Response>(gql`
		query Episode {
			episode {
				episodeNumber
			}
		}
	`);
}
