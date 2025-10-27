'use client';

import { useState, useEffect } from 'react';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';
import { DocumentUpload } from '@/components/DocumentUpload';
import { Upload, Download, CheckCircle, AlertCircle, Package, FileSpreadsheet } from 'lucide-react';

export default function BulkCreateShipmentPage() {
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'shipper') {
      window.location.href = '/login';
    }
  }, []);

  const handleDownloadTemplate = () => {
    // In production, this would download a CSV template
    alert('Downloading CSV template...');
  };

  const handleProcess = () => {
    setProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setResults({
        total: 25,
        successful: 23,
        failed: 2,
        errors: [
          { row: 5, error: 'Invalid pickup address' },
          { row: 12, error: 'Missing temperature requirements' },
        ],
      });
      setProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <DashboardNavigation role="shipper" />
      <DemoDataBadge />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Bulk Shipment Creation</h1>
          <p className="text-gray-300 mt-2">Upload a CSV file to create multiple shipments at once</p>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-blue-900 mb-3">How to Use Bulk Upload:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-blue-700">
            <li>Download the CSV template below</li>
            <li>Fill in your shipment details (one shipment per row)</li>
            <li>Upload the completed CSV file</li>
            <li>Review and confirm the shipments</li>
            <li>All valid shipments will be created automatically</li>
          </ol>
        </div>

        {/* Download Template */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <FileSpreadsheet className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-white">CSV Template</h3>
                <p className="text-sm text-gray-300">Download the template to get started</p>
              </div>
            </div>
            <button
              onClick={handleDownloadTemplate}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Template
            </button>
          </div>
        </div>

        {/* Upload Area */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6 mb-6">
          <h3 className="font-semibold text-white mb-4">Upload CSV File</h3>
          
          <DocumentUpload
            onUpload={(docs) => setUploadedFile(docs[0])}
            maxFiles={1}
            maxSize={5}
            label=""
            acceptedTypes={['.csv', '.xlsx', '.xls']}
          />

          {uploadedFile && !results && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleProcess}
                disabled={processing}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 disabled:opacity-50"
              >
                {processing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Process Shipments
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        {results && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
            <h3 className="font-semibold text-white mb-6">Processing Results</h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">{results.total}</p>
                <p className="text-sm text-gray-300 mt-1">Total Rows</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">{results.successful}</p>
                <p className="text-sm text-gray-300 mt-1">Successful</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-red-600">{results.failed}</p>
                <p className="text-sm text-gray-300 mt-1">Failed</p>
              </div>
            </div>

            {results.errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Errors Found
                </h4>
                <ul className="space-y-2">
                  {results.errors.map((error: any, index: number) => (
                    <li key={index} className="text-sm text-red-700">
                      Row {error.row}: {error.error}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setUploadedFile(null);
                  setResults(null);
                }}
                className="px-6 py-2 border border-white/30 text-gray-200 rounded-lg hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors font-medium"
              >
                Upload Another File
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Create {results.successful} Shipments
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}