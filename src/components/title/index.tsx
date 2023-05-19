// create react component in typescript with types and interface and props name, class has div and h3 



function Title({ className, text }: {className: { [
  key: string
] : string | undefined }, text: string | undefined}) {
  return (
    <div className={className.container} >
      <h3 className={className.text}>{text}</h3>
    </div>
  )
}

export default Title
