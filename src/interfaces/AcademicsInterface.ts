export interface AcademicsInterface {
  id: number;
  row: {
    dates: string;
    title: string;
    cgpa?: number;
    text?: string;
    percentage?: number;
    organization: string;
  };
}
