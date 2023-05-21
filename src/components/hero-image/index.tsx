import React from 'react'

function HeroImage({
  src,
  children,
}: {
  src: string;
  children?: React.ReactNode;
}) {
  return (
    <div
        className="relative bg-white overflow-hidden rounded-lg bg-cover bg-center"
        style={{
          height: 'calc(50vh - 64px)',
          backgroundImage: `url(${src})`,
        }}
      >
        {children}
      </div>
  )
}

export default HeroImage