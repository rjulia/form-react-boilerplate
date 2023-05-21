import HeroImage from '../../components/hero-image'
import image from '../../assets/images/jake-weirick-hieOkhzGyCE-unsplash.jpg'
import BlockManager from '../../components/block-manager'

function HomeView({
  data
}: {
  data: any
}) {
  return (
    <div className="max-w-">
    <HeroImage src={image}>
      <div className='text-right p-5'>
        <h1>LIVE</h1>
        <h1>CREATE</h1>
        <h1>WORK</h1>
      </div>
    </HeroImage>
    <div className='py-5'>
      <BlockManager blocks={data} />
    </div>
  </div >
  )
}

export default HomeView