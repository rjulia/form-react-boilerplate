import { WaveLoader } from 'react-loaders-kit'
import './spinner-styles.css'

const Spinner = ({ loading }: {
  loading: boolean
}) => {
  const loaderProps = {
    loading,
    size: 100,
    duration: 1,
    color: '#3BC6F4', // #TODO change the color
  }
  return (
    <div>
      <WaveLoader {...loaderProps} />
    </div>
  )
}

export default Spinner