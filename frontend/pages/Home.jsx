import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Post from "../components/Post";
import AddPost from "../components/AddPost";

export default function Home({ posts}) {

  return (

<Box
    sx={{
        overflow: 'auto',
        height: 1000,
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
    }}
>

        <AddPost />
        {
        !!posts.length && posts.map((post) => <Post key={post.id} post={post} />)
          }
    </Box>
  );
}

