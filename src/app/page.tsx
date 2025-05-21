import HomePageComponents from "@/components/pages/homePage/HomePageComponents"
import { getRequest } from "@/lib/APIConfig"

export default async function Home() {
  const data = await getRequest("/shows")

  return (
    <div className={`container`}>
      <HomePageComponents data={data} />
    </div>
  )
}
