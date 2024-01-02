import React from 'react'

type Props = {
    Name : string;
}

const ButtonCommon = ({Name}: Props) => {
  return (
    <a href="#" className="mt-4 px-6 py-2 bg-orange-500 hover:bg-black rounded-md text-white text-center mx-40   uppercase">{Name}</a>
  )
}

export default ButtonCommon