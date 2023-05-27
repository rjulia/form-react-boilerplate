import _ from 'lodash'
import { Data } from '../../types'
import Spinner from '../../components/spiner'
import BlockManager from '../../components/block-manager'
import { BlockBuilder } from '../../types'
import { Link } from 'react-router-dom'


function FormPAgeView({
  data,
  dataForms,
  loading,
}: {
  data: Data
  dataForms?: Data[]
  loading: boolean
}) {
  
  const blocks: BlockBuilder[] = _.get(data, 'attributes.blocks', []) as BlockBuilder[]
  if (loading) return <Spinner loading={loading} />
  if (!data) return null

  return (
    <div className="max-w-">
      <div className='py-5'>
        {blocks && <BlockManager blocks={blocks} />}
      </div>
      <div>
      <ul className="list-disc list-inside">
        {
          dataForms && dataForms.map((form: Data) => {
            return (
              <li 
                key={form.id}
                className="text-xl font-bold text-gray-700">
                  <Link to={`/form/${form.id}`}>
                    <span className='text-xl'>{form.attributes.name}</span>
                  </Link>
              </li>
            )
          })
        }
      </ul>
      </div>
    </div>
  )
}

export default FormPAgeView