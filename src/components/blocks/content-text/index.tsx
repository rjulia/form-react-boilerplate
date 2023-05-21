import MarkdownPreview from '@uiw/react-markdown-preview';

const ContentText = ({ content }: {content :string}) => {
 
  return (
    <div className={`body-font flex justify-center content-center `}>
      <div className='container px-5 md:px-0'>
        <MarkdownPreview source={content} />
      </div>
    </div>
  )
}

export default ContentText