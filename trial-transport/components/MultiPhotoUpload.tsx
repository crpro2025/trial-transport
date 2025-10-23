'use client';

import { useState, useRef } from 'react';
import { Upload, X, Plus } from 'lucide-react';
import Image from 'next/image';

interface Photo {
  id: string;
  file: File;
  preview: string;
}

interface MultiPhotoUploadProps {
  onPhotosChange: (photos: Photo[]) => void;
  maxPhotos?: number;
  maxSize?: number; // in MB
  label?: string;
  className?: string;
}

export function MultiPhotoUpload({
  onPhotosChange,
  maxPhotos = 10,
  maxSize = 5,
  label = 'Upload Photos',
  className = '',
}: MultiPhotoUploadProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList) => {
    setError(null);

    const newPhotos: Photo[] = [];
    const filesArray = Array.from(files);

    // Check if adding these files would exceed max
    if (photos.length + filesArray.length > maxPhotos) {
      setError(`Maximum ${maxPhotos} photos allowed`);
      return;
    }

    filesArray.forEach((file) => {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select only image files');
        return;
      }

      // Validate file size
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > maxSize) {
        setError(`Each file must be less than ${maxSize}MB`);
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const photo: Photo = {
          id: `${Date.now()}-${Math.random()}`,
          file,
          preview: reader.result as string,
        };
        
        setPhotos((prev) => {
          const updated = [...prev, photo];
          onPhotosChange(updated);
          return updated;
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files);
    }
  };

  const handleRemove = (id: string) => {
    setPhotos((prev) => {
      const updated = prev.filter((photo) => photo.id !== id);
      onPhotosChange(updated);
      return updated;
    });
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <span className="text-xs text-gray-500">
          {photos.length} / {maxPhotos} photos
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative group">
            <div className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-gray-300">
              <Image
                src={photo.preview}
                alt="Upload preview"
                fill
                className="object-cover"
              />
            </div>
            <button
              onClick={() => handleRemove(photo.id)}
              className="absolute top-1 right-1 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}

        {photos.length < maxPhotos && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-blue-600"
          >
            <Plus className="w-6 h-6" />
            <span className="text-xs font-medium">Add Photo</span>
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileInput}
        className="hidden"
      />

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}

      <p className="mt-2 text-xs text-gray-500">
        Upload up to {maxPhotos} photos. Each file must be less than {maxSize}MB.
      </p>
    </div>
  );
}