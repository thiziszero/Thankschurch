import { Box, Text } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";

const worshipTableRows = [
  {
    name: "주일예배 1부",
    time: "08:00 am",
    place: "본당",
  },
  {
    name: "주일예배 2부",
    time: "10:00 am",
    place: (
      <>
        본당
        <br />
        <Text as="span" color="blue.600">
          통역*: 영어, 중국어
        </Text>
      </>
    ),
  },
  {
    name: "주일예배 3부",
    time: "12:00 pm",
    place: (
      <>
        본당
        <br />
        <Text as="span" color="blue.600">
          통역*: 영어, 일본어
        </Text>
      </>
    ),
  },
  {
    name: "주일예배 4부",
    time: "02:30 pm",
    place: "본당",
  },
];

const sundaySchoolRows = [
  {
    name: "영아부",
    time: "10:00 am - 12:00 pm",
    place: (
      <>
        사무엘홀2(S302)
        <br />
        <Text as="span" color="blue.600">
          0~3세 영아 및 부모
        </Text>
      </>
    ),
  },
  {
    name: "유아부",
    time: "10:00 am - 12:00 pm",
    place: (
      <>
        사무엘홀1(S301)
        <br />
        <Text as="span" color="blue.600">
          4~5세
        </Text>
      </>
    ),
  },
  {
    name: "유치부",
    time: "10:00 am - 12:00 pm",
    place: (
      <>
        요한홀1(S401)
        <br />
        <Text as="span" color="blue.600">
          6~7세
        </Text>
      </>
    ),
  },
  {
    name: "유년부",
    time: (
      <>
        08:00 am
        <br />
        10:00 am
        <br />
        12:00 pm
      </>
    ),
    place: (
      <>
        다윗홀1(S501)
        <br />
        <Text as="span" color="blue.600">
          초등 1~2학년
        </Text>
      </>
    ),
  },
  {
    name: "초등부",
    time: (
      <>
        08:00 am
        <br />
        10:00 am
        <br />
        12:00 pm
      </>
    ),
    place: (
      <>
        다니엘홀1(S601)
        <br />
        <Text as="span" color="blue.600">
          초등 3~4학년
        </Text>
      </>
    ),
  },
];

export function GreetingPresentation() {
  const evenRowBg = "blue.100";
  const oddRowBg = "white";

  return (
    <Box p={8} bg="blue.50" borderRadius="lg" boxShadow="md">
      <Box mb={10}>
        <Text fontSize="2xl" fontWeight="bold" color="blue.900" mb={4}>
          정기예배
        </Text>
        <Table.Root size="md">
          <Table.Header>
            <Table.Row bg="blue.200">
              <Table.ColumnHeader color="blue.900" fontWeight="bold">
                예배
              </Table.ColumnHeader>
              <Table.ColumnHeader color="blue.900" fontWeight="bold">
                시간
              </Table.ColumnHeader>
              <Table.ColumnHeader color="blue.900" fontWeight="bold">
                장소
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {worshipTableRows.map((row, idx) => (
              <Table.Row
                key={row.name}
                bg={idx % 2 === 0 ? evenRowBg : oddRowBg}
              >
                <Table.Cell fontWeight="semibold" color="blue.900">
                  {row.name}
                </Table.Cell>
                <Table.Cell>{row.time}</Table.Cell>
                <Table.Cell>{row.place}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" color="blue.900" mb={4}>
          주일학교예배
        </Text>
        <Table.Root size="md">
          <Table.Header>
            <Table.Row bg="blue.200">
              <Table.ColumnHeader color="blue.900" fontWeight="bold">
                부서
              </Table.ColumnHeader>
              <Table.ColumnHeader color="blue.900" fontWeight="bold">
                시간
              </Table.ColumnHeader>
              <Table.ColumnHeader color="blue.900" fontWeight="bold">
                장소
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sundaySchoolRows.map((row, idx) => (
              <Table.Row
                key={row.name}
                bg={idx % 2 === 0 ? evenRowBg : oddRowBg}
              >
                <Table.Cell fontWeight="semibold" color="blue.900">
                  {row.name}
                </Table.Cell>
                <Table.Cell>{row.time}</Table.Cell>
                <Table.Cell>{row.place}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
}

export default GreetingPresentation;
