import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  width: '10em',
  height: '10em',
  padding: '0',
  //   borderWidth: 2,
  borderRadius: '10px',
  //   borderColor: '#000000',
  //   borderStyle: 'dashed',
  border: '0.5px solid darkgray',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  //   transition: 'border .3s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    console.log('dropZone', acceptedFiles);
    props.onChangeImage(acceptedFiles);
    setFiles(
      acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
        style={{ width: '100%', height: '100%', borderRadius: '10px' }}
      />
    </div>
  ));

  // clean up
  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {thumbs}
      </div>
      <aside></aside>
    </section>
  );
}

export default DropzoneComponent;
