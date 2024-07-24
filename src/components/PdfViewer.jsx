import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useLocation } from 'react-router-dom';

const PdfViewer = ({ fileUrl }) => {
    const location = useLocation();
  const pdfUrl = location.state?.pdfUrl || '/default.pdf'; // Default URL
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: '750px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl={pdfUrl}
          plugins={[
            defaultLayoutPluginInstance,
          ]}
        />
      </Worker>
    </div>
  );
};

export default PdfViewer;
