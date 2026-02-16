import {
  Anchor,
  Badge,
  Container,
  Divider,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { cv } from '../data/cvData'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack gap={8} className="sectionBlock">
      <Group gap="sm" align="center">
        <Badge variant="outline" color="dark" radius="xl" size="lg">
          {title}
        </Badge>
        <Divider style={{ flex: 1 }} />
      </Group>
      {children}
    </Stack>
  )
}

export default function App() {
  return (
    <div className="page">
      <Container size="xl" className="content">
        <div className="layout">
          <Paper className="sidebar" radius="md" p="lg">
            <div className="photoWrap">
              <Image src={cv.photo} alt={`${cv.name} headshot`} fit="cover" />
            </div>

            <Stack gap={6} mt="md">
              <Title order={2}>{cv.name}</Title>
              <Stack gap={6} align="center" className="headlineBubbles">
                {cv.headline.split(',').map((item) => {
                  const label = item.trim()
                  if (!label) return null
                  return (
                    <Badge key={label} variant="light" color="dark" radius="xl">
                      {label}
                    </Badge>
                  )
                })}
              </Stack>
              <Text size="sm" c="dimmed">
                {cv.address}
              </Text>
            </Stack>

            <Stack gap={6} mt="md">
              {cv.contacts.map((contact) => (
                <Anchor key={contact.label} href={contact.href} className="sideLink">
                  {contact.value}
                </Anchor>
              ))}
              {cv.links.map((link) => (
                <Anchor
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="sideLink"
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </Paper>

          <Stack className="cvColumn" gap="xl">
            <Stack gap={6}>
              <Title order={1}>Curriculum Vitae</Title>
              <Text c="dimmed">{cv.summary}</Text>
            </Stack>

            {cv.sections.map((section) => (
              <Section key={section.title} title={section.title}>
                <Stack gap="md">
                  {section.items.map((item) => (
                    <Stack key={item.title} gap={6}>
                      <Title order={4}>{item.title}</Title>
                      <Text size="sm" c="dimmed">
                        {item.meta}
                      </Text>
                      {item.body.length ? (
                        <List spacing={4} size="sm">
                          {item.body.map((b) => {
                            if (typeof b === 'string') {
                              return <List.Item key={b}>{b}</List.Item>
                            }

                            return (
                              <List.Item key={b.text}>
                                {b.text}
                                {b.sub?.length ? (
                                  <List spacing={4} size="sm" mt={6} withPadding>
                                    {b.sub.map((sub) => (
                                      <List.Item key={sub}>{sub}</List.Item>
                                    ))}
                                  </List>
                                ) : null}
                              </List.Item>
                            )
                          })}
                        </List>
                      ) : null}
                    </Stack>
                  ))}
                </Stack>
              </Section>
            ))}

            <Text size="xs" c="dimmed">
              Last updated {cv.lastUpdated}
            </Text>
          </Stack>
        </div>
      </Container>
    </div>
  )
}
