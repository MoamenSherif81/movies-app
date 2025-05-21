import HomePageComponents from "@/components/pages/homePage/HomePageComponents"
import { getRequest } from "@/config/APIConfig"

export default async function Home() {
  const data = await getRequest("/shows")

  return (
    <div className={`container`}>
      <HomePageComponents data={data} />
    </div>
  )
}
