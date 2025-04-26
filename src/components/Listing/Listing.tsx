import { getVideos } from "@/apis/getVideos";
import { video } from "@/models/video.model"
import { Grid, Paper, Image, Text, Skeleton, Container } from "@mantine/core"
import { useQuery } from "@tanstack/react-query";
import { Error } from "../Error"

export const Listing = () => {
const { data, isLoading, isError } = useQuery({queryKey: ['videos'], queryFn: getVideos});
        if (isLoading) {
            return (
                <Container>
                    <Skeleton ml={20} mr={20} h={200}>
                        this is a test
                    </Skeleton>
                </Container>
                );
        }
        if (isError) {
            return <Error />;
        }
    return (
        <Paper pl={200}>
            <Grid>
                {data.map((video: video) => (
                    <Grid.Col span={3} key={video.id}>
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