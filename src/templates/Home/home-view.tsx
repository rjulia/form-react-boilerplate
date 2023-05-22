import _ from 'lodash'
import BlockManager from '../../components/block-manager'
import Spinner from '../../components/spiner'
import { Data } from '../../types'
import { BlockBuilder } from '../../types'

function HomeView({
  data,
  loading,
}: {
  data: Data
  loading: boolean
}) {
  console.log("🚀 ~ file: home-view.tsx:13 ~ data:", data)
  const blocks: BlockBuilder[] = _.get(data, 'attributes.blocks', []) as BlockBuilder[]
  console.log("🚀 ~ file: home-view.tsx:18 ~ blocks:", blocks)
  if(loading) return <Spinner loading={loading} />
  if(!data) return null

  return (
    <div className="max-w-">
    <div className='py-5'>
      { blocks && <BlockManager blocks={blocks} />}
    </div>
  </div >
  )
}

export default HomeView