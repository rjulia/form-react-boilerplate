/* eslint-disable @typescript-eslint/ban-ts-comment */
import _ from 'lodash'
import MarkdownPreview from '@uiw/react-markdown-preview';
import { getStrapiMedia } from '../../../utils'
import { Image } from '../../../types'

function HeroImage({
  title,
  image,
}: {
  image: Image;
  title: string;
}) {

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-center my-5"
      style={{
        height: 'calc(50vh - 64px)',
        backgroundImage: `url(${getStrapiMedia(_.get(image, 'data.attributes.url'))}`,
      }}
    >
      <div className='text-right p-5'>
        <MarkdownPreview 
          prefixCls="markdown"
          source={title} 
          rehypeRewrite={(node, _index, parent)=> {
            // @ts-expect-error
            if (node.tagName === "a" && parent && /^h(1|2|3|4|5|6)/.test(parent.tagName)) {
              parent.children = parent.children.slice(1)
            }
          }}
        />
      </div>
    </div>
  )
}

export default HeroImage