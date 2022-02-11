import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'grid',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  cursor: 'pointer',
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
  const [hide, setHide] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    setHide(acceptedFiles.map(e => e.name));
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
    <div
      key={file.name}
      style={{
        height: '9.9em',
        gridColumn: '1/2',
        gridRow: '1/2',
        zIndex: '10',
      }}
    >
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
        {hide !== '' ? (
          <span
            style={{
              display: 'none',
            }}
          >
            Upload Image
          </span>
        ) : (
          <span
            style={{
              padding: '65px 22px',
              gridColumn: '1/2',
              gridRow: '1/2',
              zIndex: '1',
            }}
          >
            Upload Image
          </span>
        )}

        {thumbs}
      </div>
      <aside></aside>
    </section>
  );
}

export default DropzoneComponent;
