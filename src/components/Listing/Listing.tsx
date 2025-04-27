import { getVideos } from "@/apis/getVideos";
import { video } from "@/models/video.model"
import { Grid, Paper, Image, Text, Skeleton, Flex, Drawer, Button } from "@mantine/core"
import { useQuery } from "@tanstack/react-query";
import { Error } from "../Error"
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useFavouritesStore } from "@/hooks/useFavouritesStore";

export const Listing = () => {
const { data, isLoading, isError } = useQuery({queryKey: ['videos'], queryFn: getVideos});
const [opened, { open, close }] = useDisclosure(false);
const { favourites } = useFavouritesStore();
const result = data?.reduce((map:any, obj:any) => {
    map[obj.id] = { title: obj.title, thumbnail: obj.thumbnail, id: obj.id };
    return map;
}, {});

        if (isError) {
            return <Error />;
        }
    return (
        <Paper>
            { isLoading ?
                (<Skeleton ml={20} mr={20} h={2000} />)
            : (
                <>
                    <Drawer opened={opened} onClose={close} title="Favourites">
                        {favourites.entries().map((value) => {
                            if(result[value[0]]) {
                            return <Link key={result[value[0]].id} to={`/video/${result[value[0]].id}`}>
                                        <Text>{result[value[0]].title}</Text>
                                    </Link>
                            }
                            return null;
                        })}
                        <Text />
                    </Drawer>

                    <Button ml="20" variant="default" onClick={open}>
                        Favourites
                    </Button>
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
                                    <Text ml={80}>{video.title}</Text>
                                    </div>
                                </Flex>
                            </Grid.Col>
                        ))}
                    </Grid>
                </>
            )}
        </Paper>
    )
}