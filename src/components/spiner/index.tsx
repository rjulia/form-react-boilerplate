import { WaveLoader } from 'react-loaders-kit'
import './spinner-styles.css'

const Spinner = ({ 
  loading,
  color = '#3BC6F4',
}: {
  loading: boolean,
  color?: string,
}) => {
  const loaderProps = {
    loading,
    size: 100,
    duration: 1,
    color, // #TODO change the color
  }
  return (
    <div className='spinner__container'>
      <WaveLoader {...loaderProps} />
    </div>
  )
}

export default Spinner