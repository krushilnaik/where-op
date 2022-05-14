import { GetServerSideProps } from "next";
import dbConnect from "../lib/db";
import Episode from "../models/Episode";

interface Props {
  episodeNumber: number;
}

const App = (props: Props) => {
  return (
    <main className="grid place-content-center bg-red-400">
      <span className="text-red-200 text-9xl font-mono">
        {props.episodeNumber}
      </span>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await dbConnect();

  const episode = await Episode.findOne({}, "-_id").lean().exec();

  return {
    props: { ...episode },
  };
};

export default App;
