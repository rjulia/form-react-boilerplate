import {
  ContentText,
} from '../blocks'
import { BlockBuilder } from '../../types'

interface BlockLookup {
  [key: string]: React.ComponentType<any>;
}

const lookup: BlockLookup = {
  // 'block.hero': Hero,

  'block.content-text': ContentText,
}

const Block = ({ block, ...rest }: {
  block: BlockBuilder
  [key: string]: any
}) => {
  const { __component } = block
  const Component = lookup[__component]
  const props = { ...block, ...rest }

  return <Component {...props} />
}

const BlockManager = ({ 
  blocks, 
  ...rest 
}: {
  blocks: BlockBuilder[]
}) => (
  <div className='flex flex-col w-full'>
    {blocks.map((block) => <Block key={Math.random()} block={block} {...rest} />)}
  </div>

)


export default BlockManager