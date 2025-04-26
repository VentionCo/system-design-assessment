import { Grid, Paper, Image, Text } from "@mantine/core"

const videos = [{
    title: "Title",
    thumbnail: "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c9/TotK_Princess_Zelda_Artwork.png",
    url: ""
},
{
    title: "Title",
    thumbnail: "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c9/TotK_Princess_Zelda_Artwork.png",
    url: ""
}]

export const Listing = () => {
    return (
        <Paper pl={200}>
            <Grid>
                {videos.map((video) => (
                    <Grid.Col span={3}>
                    <Image
                        src={video.thumbnail}
                        h={200}
                        w={200}
                    />
                    <Text ml={100}>{video.title}</Text>
                    </Grid.Col>
                ))}
            </Grid>
        </Paper>
    )
}