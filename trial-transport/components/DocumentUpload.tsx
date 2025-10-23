'use client';

import { useState, useRef } from 'react';
import { Upload, X, FileText, Download } from 'lucide-react';

interface Document {
  id: string;
  file: File;
  name: string;
  size: string;
  type: string;
}

interface DocumentUploadProps {
  onUpload: (documents: Document[]) => void;
  maxFiles?: number;
  maxSize?: number; // in MB
  label?: string;
  acceptedTypes?: string[];
  className?: string;
}

export function DocumentUpload({
  onUpload,
  maxFiles = 5,
  maxSize = 10,
  label = 'Upload Documents',
  acceptedTypes = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'],
  className = '',
}: DocumentUploadProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleFileSelect = (files: FileList) => {
    setError(null);

    const filesArray = Array.from(files);

    // Check if adding these files would exceed max
    if (documents.length + filesArray.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    const newDocuments: Document[] = [];

    filesArray.forEach((file) => {
      // Validate file size
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > maxSize) {
        setError(`Each file must be less than ${maxSize}MB`);
        return;
      }

      // Validate file type
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!acceptedTypes.includes(fileExtension)) {
        setError(`File type ${fileExtension} not supported`);
        return;
      }

      const doc: Document = {
        id: `${Date.now()}-${Math.random()}`,
        file,
        name: file.name,
        size: formatFileSize(file.size),
        type: fileExtension,
      };

      newDocuments.push(doc);
    });

    if (newDocuments.length > 0) {
      setDocuments((prev) => {
        const updated = [...prev, ...newDocuments];
        onUpload(updated);
        return updated;
      });
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files);
    }
  };

  const handleRemove = (id: string) => {
    setDocuments((prev) => {
      const updated = prev.filter((doc) => doc.id !== id);
      onUpload(updated);
      return updated;
    });
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return '📄';
    if (type.includes('doc')) return '📝';
    if (type.includes('jpg') || type.includes('jpeg') || type.includes('png')) return '🖼️';
    return '📎';
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <span className="text-xs text-gray-500">
          {documents.length} / {maxFiles} files
        </span>
      </div>

      {/* Upload Area */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedTypes.join(',')}
          multiple
          onChange={handleFileInput}
          className="hidden"
        />
        
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-blue-100 rounded-full">
            <Upload className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-sm font-medium text-gray-900">
            Click to upload documents
          </p>
          <p className="text-xs text-gray-500">
            {acceptedTypes.join(', ')} up to {maxSize}MB each
          </p>
        </div>
      </div>

      {/* Document List */}
      {documents.length > 0 && (
        <div className="mt-4 space-y-2">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-2xl">{getFileIcon(doc.type)}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {doc.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {doc.size}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(doc.id)}
                className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}