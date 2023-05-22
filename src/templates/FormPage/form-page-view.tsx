import _ from 'lodash'
import { Data } from '../../types'
import Spinner from '../../components/spiner'
import BlockManager from '../../components/block-manager'
import { BlockBuilder } from '../../types'


function FormPAgeView({
  data,
  loading,
}: {
  data: Data
  loading: boolean
}) {
  const blocks: BlockBuilder[] = _.get(data, 'attributes.blocks', []) as BlockBuilder[]
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

export default FormPAgeView