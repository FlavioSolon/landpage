export interface ICategory {
  title: string;
  description: string;
  bullets: ICategoryBullet[];
  imageSrc: string;
}

export interface ICategoryBullet {
  title: string;
  description: string;
  icon: React.ReactNode; 
}