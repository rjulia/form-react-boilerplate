// create react component in typescript with types and interface and props name, class has div and h3 



function Title({ className, label }: {className: { [
  key: string
] : string | undefined }, label: string | undefined}) {
  return (
    <div className={className.container} >
      <h3 className={className.text}>{label}</h3>
    </div>
  )
}

export default Title
