'use client';

import { useState, useRef } from 'react';
import { Upload, X, Video, Play } from 'lucide-react';

interface VideoUploadProps {
  onUpload: (file: File, preview: string) => void;
  onRemove?: () => void;
  currentVideo?: string;
  label?: string;
  maxSize?: number; // in MB
  className?: string;
}

export function VideoUpload({
  onUpload,
  onRemove,
  currentVideo,
  label = 'Upload Video',
  maxSize = 50,
  className = '',
}: VideoUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentVideo || null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileSelect = (file: File) => {
    setError(null);
    setUploading(true);

    // Validate file type
    if (!file.type.startsWith('video/')) {
      setError('Please select a video file');
      setUploading(false);
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      setError(`File size must be less than ${maxSize}MB`);
      setUploading(false);
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreview(result);
      onUpload(file, result);
      setUploading(false);
    };
    reader.onerror = () => {
      setError('Failed to read file');
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemove = () => {
    setPreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      {preview ? (
        <div className="relative group">
          <div className="relative w-full rounded-lg overflow-hidden border-2 border-gray-300 bg-black">
            <video
              ref={videoRef}
              src={preview}
              controls
              className="w-full h-auto max-h-96"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`
            relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            transition-all duration-200
            ${isDragging 
              ? 'border-purple-500 bg-purple-50' 
              : 'border-gray-300 hover:border-purple-400 hover:bg-gray-50'
            }
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileInput}
            className="hidden"
          />
          
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-purple-100 rounded-full">
              <Video className="w-8 h-8 text-purple-600" />
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-900">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">
                MP4, MOV, AVI up to {maxSize}MB
              </p>
            </div>

            {uploading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                <span className="text-sm text-gray-600">Uploading...</span>
              </div>
            ) : (
              <button
                type="button"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Choose Video
              </button>
            )}
          </div>
        </div>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}