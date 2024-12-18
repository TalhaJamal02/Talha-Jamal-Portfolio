import { servicesData } from "@/app/Data/data"
import SectionsHeading from "../../Helper/SectionsHeading"
import ServiceCard from "./ServiceCard"

function Service() {
  return (
    <div className=" pt-16 pb-16 bg-[#0f0715]" id="service">
      <SectionsHeading>Services</SectionsHeading>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[75%] mx-auto items-center mt-20">
        {servicesData.map((service) => {
          return <div key={service.id}>
            <ServiceCard service={service}/>
          </div>
        })}
      </div>

    </div>
  )
}

export default Service