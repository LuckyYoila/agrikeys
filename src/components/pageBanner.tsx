import Meta from "./Meta"
interface PageBannerProps {
    location?:string
}

const PageBanner = ({location}: PageBannerProps) => {
  return (
    <div className="flex justify-center items-center h-40 bg-green-900 text-white text-3xl">
        <Meta page={location} />
        <h2>{location ? location : "Welcome"}</h2>
    </div>
  )
}
export default PageBanner