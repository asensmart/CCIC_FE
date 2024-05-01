import AboutContent from '@/app/components/about';
import React from 'react'

const BrandAboutUs = ({params}) => {
  console.log(params)
  return (
    <div>
      <AboutContent name={params?.brand} isHome={true} />
    </div>
  );
}

export default BrandAboutUs