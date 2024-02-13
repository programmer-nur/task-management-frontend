import React, { useRef } from 'react';

const ProfilePhotoUpload = () => {
  const previewImgRef = useRef(null);
    console.log(previewImgRef)
  const loadFile = (event) => {
    const input = event.target;
    const file = input.files[0];
    const type = file.type;
    console.log(type,file)
    const output = previewImgRef.current;

    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <form>
      <div className="flex flex-col items-center space-x-6">
        <div id='imageOne' className="shrink-0">
          <img
            id="preview_img"
            ref={previewImgRef}
            className="h-16 w-16 object-cover rounded-full"
            src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
            alt="Current profile photo"
          />
        </div>
        <label htmlFor='imageOne' className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            onChange={loadFile}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
          />
        </label>
      </div>
    </form>
  );
};

export default ProfilePhotoUpload;
