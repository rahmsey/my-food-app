import React from "react";

interface ServiceDetailPageProps {
  params: {
    id: string;
  };
}

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const id = params.id;

  return (
    <div>
      ServiceDetailPage {id}
    </div>
  );
};

export default ServiceDetailPage;
