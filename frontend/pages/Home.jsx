import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Post from "../components/Post";
import AddPost from "../components/AddPost";

export default function Home({ posts}) {

  return (
    <Box paddingTop="10px">

<Box
    sx={{
        overflow: 'auto',
        height: 1000,
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
         borderRadius: '16px'
    }}

>       
<Box
          sx={{
            background: "#1A202C",
            borderRadius: "15px",
            padding: "10px 20px",
          }}
        >
                  <AddPost />

        </Box>

        {
        !!posts.length && posts.map((post) => <Post key={post.id} post={post} />)
          }
    </Box>
    </Box>

  );
}

