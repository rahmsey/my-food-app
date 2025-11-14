import React from 'react'

const ServiceDetailPage = async ({ params }) => {
    const id = (await params).id;
    return (
    <div>ServiceDetailPage {id}</div>
  )
}

export default ServiceDetailPage