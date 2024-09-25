import { Card, Text, Group, Image, Paper, Flex, Button } from "@mantine/core";
import { IconBookmark, IconWorld, IconArrowRight } from "@tabler/icons-react";
import { BsBookmark, BsArrowUpLeftSquare } from "react-icons/bs";
import { PiUsers, PiBuilding } from "react-icons/pi";
import "../../assets/fonts/Zain/Zain-Black.ttf";
export function CardForm({ logo, name, webSite, description, users, type }) {
  return (
    <Paper>
      <Card withBorder radius="md" p="md" mt={'20'} style={{ width:'304px',height:'400px' }}>
        <Group display={Flex} justify="space-between" mt="sm" position="apart">
          <BsBookmark color="red" size={"1.5rem"} />

          <Group>
            <Text style={{ fontWeight: "bold" }}>{name}</Text>
            <Image
              src={logo}
              alt="company logo"
              style={{ width: 40, height: 40 }}
            />
          </Group>
        </Group>
        <Group
          mt="sm"
          sx={{ justifyContent: "flex-start" }}
          style={{ direction: "rtl", marginBottom: "15px" }}
        >
          <Group>
            <IconWorld />
            <Text style={{ fontWeight: "bold" }}>{webSite}</Text>
            <BsArrowUpLeftSquare />
          </Group>
        </Group>
        <Group spacing="md" mb={40}>
          <Text
            style={{ fontFamily: "Zain,sans-serif", direction: "rtl" }}
            size="lg"
            weight={900}
          >
            {description}
          </Text>
        </Group>

        <Group
          justify="center"
          style={{ direction: "rtl", marginBottom: "15px" }}
          gap={"25px"}
        >
          <Group>
            <PiUsers color="rgb(250, 82, 82)" size={"2rem"} />
            <Text
              style={{ fontFamily: "Zain,sans-serif", fontWeight: "bold" }}
              size="lg"
            >
              {users}
            </Text>
          </Group>

          <Group>
            <PiBuilding color="rgb(250, 82, 82)" size={"2rem"} />
            <Text
              size="lg"
              style={{ fontFamily: "Zain,sans-serif", fontWeight: "bold" }}
            >
              {type}
            </Text>
          </Group>
        </Group>
        <Button style={{fontFamily:'Zain'}}
          fullWidth
          mt="md"
          variant="outline"
          color="red"
          styles={(theme) => ({
            root: {
              borderColor: theme.colors.red[6],
              color: theme.colors.red[6],
            },
          })}
        >
          قراءة المزيد
        </Button>
      </Card>
    </Paper>
  );
}
