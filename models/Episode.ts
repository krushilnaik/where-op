import mongoose from "mongoose";

const EpisodeSchema = new mongoose.Schema(
  {
    episodeNumber: {
      type: Number,
    },
  },
  {
    collection: "episode",
  }
);

export default mongoose.models.Episode ||
  mongoose.model("Episode", EpisodeSchema);
