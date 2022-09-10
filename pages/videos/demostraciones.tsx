import { Layout, VideoPage } from "../../components";
import { Video } from "../../interfaces";

const videos: Video[] = [
  {
    code: "nziA33FrhoI",
    title: "Lorem ipsum dolor",
  },
  {
    code: "nziA33FrhoI",
    title: "Lorem ipsum dolor",
  },
  {
    code: "nziA33FrhoI",
    title: "Lorem ipsum dolor",
  },
];

const Videos = () => {
  return (
    <Layout
      title="Curso Tractor - Videos"
      description="Videos de Demostraciones"
    >
      <VideoPage title="Videos de Demostraciones" videos={videos} />
    </Layout>
  );
};

export default Videos;
