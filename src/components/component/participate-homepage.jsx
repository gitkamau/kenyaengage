/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eoPtf58iXE8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ParticipateHomepage() {
  return (
      <div className="flex flex-col min-h-screen">
        <Tabs defaultValue="home">
          <TabsList className="sticky top-0 z-10 bg-background">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Empowering Citizen Engagement
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our public participation platform connects citizens with their local government, enabling meaningful
                    dialogue and collaborative decision-making.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                  <div className="flex gap-2">
                    <Button>Get Started</Button>
                    <Button variant="secondary">Learn More</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Secure and private. No account required.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-primary p-3 text-primary-foreground">🗣️</div>
                    <h3 className="text-lg font-bold">Public Meetings</h3>
                    <p className="text-sm text-muted-foreground">Attend virtual town halls and provide feedback.</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-accent p-3 text-accent-foreground">📝</div>
                    <h3 className="text-lg font-bold">Surveys</h3>
                    <p className="text-sm text-muted-foreground">Share your opinions and ideas through surveys.</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-secondary p-3 text-secondary-foreground">📋</div>
                    <h3 className="text-lg font-bold">Proposals</h3>
                    <p className="text-sm text-muted-foreground">Submit your own proposals for community projects.</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-muted p-3 text-muted-foreground">🗳️</div>
                    <h3 className="text-lg font-bold">Petitions</h3>
                    <p className="text-sm text-muted-foreground">Start or sign petitions to advocate for change.</p>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
          <TabsContent value="dashboard">
            <main className="flex-1 bg-muted/40">
              <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="h-7 gap-1 text-sm">
                      <MenuIcon className="h-4 w-4" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link href="/participate/resources" prefetch={false}>
                        more information on upcoming events
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/participate/engagement" prefetch={false}>
                        Engage
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" prefetch={false}>
                        Privacy
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </header>
              <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    <Card className="sm:col-span-2" x-chunk="dashboard-06-chunk-0">
                      <CardHeader>
                        <CardTitle>My Participation</CardTitle>
                        <CardDescription>
                          Manage your public participation activities and track your submissions.
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button>View Activities</Button>
                      </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-06-chunk-1">
                      <CardHeader className="pb-2">
                        <CardDescription>Upcoming</CardDescription>
                        <CardTitle className="text-4xl">3</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-muted-foreground">Public meetings this week</div>
                      </CardContent>
                      <CardFooter>
                        <Progress value={75} aria-label="75% of upcoming events" />
                      </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-06-chunk-2">
                      <CardHeader className="pb-2">
                        <CardDescription>Submissions</CardDescription>
                        <CardTitle className="text-4xl">12</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-muted-foreground">Surveys, proposals, and petitions</div>
                      </CardContent>
                      <CardFooter>
                        <Progress value={90} aria-label="90% of submissions completed" />
                      </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-06-chunk-3">
                      <CardHeader className="pb-2">
                        <CardDescription>Feedback</CardDescription>
                        <CardTitle className="text-4xl">7</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-muted-foreground">Responses from local government</div>
                      </CardContent>
                      <CardFooter>
                        <Progress value={60} aria-label="60% of feedback received" />
                      </CardFooter>
                    </Card>
                  </div>
                  <Tabs defaultValue="public-meetings">
                    <div className="flex items-center">
                      <TabsList>
                        <TabsTrigger value="public-meetings">Public Meetings</TabsTrigger>
                        <TabsTrigger value="surveys">Surveys</TabsTrigger>
                        <TabsTrigger value="proposals">Proposals</TabsTrigger>
                        <TabsTrigger value="petitions">Petitions</TabsTrigger>
                      </TabsList>
                      <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                              <div className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only">Filter</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>Upcoming</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>Past</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>Submitted</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                          <div className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only">Export</span>
                        </Button>
                      </div>
                    </div>
                    <TabsContent value="public-meetings">
                      <Card x-chunk="dashboard-06-chunk-4">
                        <CardHeader className="px-7">
                          <CardTitle>Public Meetings</CardTitle>
                          <CardDescription>Upcoming and past public meetings you've attended.</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Topic</TableHead>
                                <TableHead className="hidden sm:table-cell">Date</TableHead>
                                <TableHead className="hidden sm:table-cell">Status</TableHead>
                                <TableHead className="text-right">Feedback</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow className="bg-accent">
                                <TableCell>
                                  <div className="font-medium">Proposed Budget for 2023/2024</div>
                                  <div className="hidden text-sm text-muted-foreground sm:inline">Town Hall Meeting</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">June 15, 2023</TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Badge className="text-xs" variant="secondary">
                                    Upcoming
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                                    Submit
                                  </Button>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <div className="font-medium">Proposed Housing Development</div>
                                  <div className="hidden text-sm text-muted-foreground sm:inline">Virtual Meeting</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">May 25, 2023</TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Badge className="text-xs" variant="outline">
                                    Past
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                                    View Feedback
                                  </Button>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  <div className="font-medium">Proposed Waste Management Plan</div>
                                  <div className="hidden text-sm text-muted-foreground sm:inline">Town Hall Meeting</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">April 10, 2023</TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Badge className="text-xs" variant="secondary">
                                    Past
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                                    View Feedback
                                  </Button>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="surveys">
                      <Card x-chunk="dashboard-06-chunk-5">
                        <CardHeader className="px-7">
                          <CardTitle>Surveys</CardTitle>
                          <CardDescription>Surveys you've participated in and their status.</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead className="hidden sm:table-cell">Deadline</TableHead>
                                <TableHead className="hidden sm:table-cell">Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow className="bg-accent">
                                <TableCell>
                                  <div className="font-medium">Community Satisfaction Survey</div>
                                  <div className="hidden text-sm text-muted-foreground sm:inline">
                                    Feedback on local services
                                  </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">June 30, 2023</TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Badge className="text-xs" variant="secondary">
                                    Pending
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                                    Respond
                                  </Button>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </main>
          </TabsContent>
        </Tabs>
      </div>
  )
}

function MenuIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
  )
}