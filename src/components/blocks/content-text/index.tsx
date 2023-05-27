/* eslint-disable @typescript-eslint/ban-ts-comment */
import MarkdownPreview from '@uiw/react-markdown-preview';

const ContentText = ({ content }: {content :string}) => {
 
  return (
    <div className={`body-font flex justify-center content-center `}>
      <div className='container px-5 md:px-0'>
        <MarkdownPreview 
          prefixCls="markdown"
          rehypeRewrite={(node, _index, parent) => {
            // @ts-expect-error
            if (node.tagName === "a" && parent && /^h(1|2|3|4|5|6)/.test(parent.tagName)) {
              parent.children = parent.children.slice(1)
            }
          }}
          source={content} />
      </div>
    </div>
  )
}

export default ContentText