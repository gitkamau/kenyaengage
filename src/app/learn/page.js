import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {ModuleOverview} from "@/components/component/module-overview"
import {VideoFeed} from "@/components/component/video-feed"

export default function CivicEducationPage() {
    return (
        <div>
            <h1>Civic Education</h1>
            <Tabs defaultValue="overview">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="modules">Modules</TabsTrigger>
                    <TabsTrigger value="videos">Short Videos</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <p>Welcome to Civic Education. Here you can learn about...</p>
                </TabsContent>
                
                <TabsContent value="modules">
                    <ModuleOverview />
                </TabsContent>
                <TabsContent value="videos">
                    <VideoFeed />
                </TabsContent>
            </Tabs>
        </div>
    )
}