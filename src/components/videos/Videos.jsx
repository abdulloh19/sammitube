import { Box, Stack } from "@mui/material";
import VideoCard from "../videoCard/VideoCard";
import ChannelCard from "../channelCard/ChannelCard";
import Loader from "../loader/Loader";

const Videos = ({ videos }) => {
  if (!videos.length) return <Loader />;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={1}
    >
      {videos.map((item, idx) => (
        <Box item xs={2} sm={4} md={4} key={idx}>
          {item.id.videoId && <VideoCard videos={item} />}
          {item.id.channelId && <ChannelCard videos={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
