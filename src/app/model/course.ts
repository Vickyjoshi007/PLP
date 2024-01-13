export interface Course {
  courseId: number;
  courseName: string;
  filePath: string;
  instructorId: string;
  description: string;
  isActive: string;
  uploadDate: Date;
  materialName: string;
  file?: File;
  status?:string
}
