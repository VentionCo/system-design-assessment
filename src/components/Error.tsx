import { Center, Paper, Text, Title } from "@mantine/core"

export const Error = () => {
    return (
        <Center>
            <Paper shadow="xs" p="xl">
                <Center>
                <Title mb="md">ERROR</Title>
                </Center>
                <Text>
                    UH OH, SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.
                </Text>
                </Paper>
        </Center>
    )
}