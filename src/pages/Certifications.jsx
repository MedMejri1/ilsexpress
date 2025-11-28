import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import CtaSection from "@/components/CtaSection/CtaSection";

// PDF Viewer imports
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// PDF worker that matches your installed version
import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";

// Viewer styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function Certifications() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <BreadCrumb title={"Our Engagements"} />

      <div style={{ padding: "40px 0" }} className="container">
        <div style={{ height: "800px", border: "1px solid #ccc" }}>
          
          <Worker workerUrl={workerSrc}>
            <Viewer 
              fileUrl="/assets/DASDIR0200-Politique-QE.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>

        </div>
      </div>

      <CtaSection style={"style2"} />
    </>
  );
}

export default Certifications;
