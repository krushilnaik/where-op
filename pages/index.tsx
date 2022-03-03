import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import apolloClient from "../lib/apollo";

interface Props {
	episode: {
		episodeNumber: number;
	};
}

const App = (props: Props) => {
	return <div>{props.episode.episodeNumber}</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { data } = await apolloClient.query<Props>({
		query: gql`
			query Episode {
				episode {
					episodeNumber
				}
			}
		`,
	});

	return { props: data };
};

export default App;
