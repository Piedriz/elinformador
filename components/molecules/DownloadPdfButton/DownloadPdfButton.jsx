'use client'
import { PdfIcon } from "../../atoms/PdfIcon/PdfIcon"
import PropTypes from 'prop-types'
export const DownloadPdfButton = ({pdf}) => {
    const handleDownload = () => {
        const base64Data = pdf.split(',')[1];
        const blob = base64toBlob(base64Data, 'application/pdf');
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    const base64toBlob = (base64Data, contentType) => {

        
        const sliceSize = 512;
        const byteCharacters = window.atob(base64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, { type: contentType });
    };
  return (
    <button type="button" onClick={handleDownload}>
        <p className="pt-4 text-blue-800 font-bold">Descargar pdf</p>
        <PdfIcon/>
    </button>
  )
}
DownloadPdfButton.propTypes = {
    pdf: PropTypes.string
}