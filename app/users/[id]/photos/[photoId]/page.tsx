import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const SinglePhoto = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      SinglePhoto {id} + {photoId}
    </div>
  );
};

export default SinglePhoto;
