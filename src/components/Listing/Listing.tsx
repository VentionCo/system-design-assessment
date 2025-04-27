import { getVideos } from "@/apis/getVideos";
import { video } from "@/models/video.model"
import { Grid, Paper, Image, Text, Skeleton, Container, Flex } from "@mantine/core"
import { useQuery } from "@tanstack/react-query";
import { Error } from "../Error"
import { Link, useNavigate } from "react-router-dom";

export const Listing = () => {
const { data, isLoading, isError } = useQuery({queryKey: ['videos'], queryFn: getVideos});
const navigate = useNavigate();
        if (isLoading) {
            return (
                <Container>
                    <Skeleton ml={20} mr={20} h={200} />
                </Container>
                );
        }
        if (isError) {
            return <Error />;
        }
    return (
        <Paper>
            <Grid>
                {data.map((video: video) => (
                    <Grid.Col span={3} key={video.id}>
                        <Flex justify="center">
                            <div>
                                <Link to={`/video/${video.id}`}>
                                    <Image
                                        src={video.thumbnail}
                                        h={200}
                                        w={200}
                                        alt={video.title}
                                    />
                                </Link>
                            <Text ml={100}>{video.title}</Text>
                            </div>
                        </Flex>
                    </Grid.Col>
                ))}
            </Grid>
        </Paper>
    )
}