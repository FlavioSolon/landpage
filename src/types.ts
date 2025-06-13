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

export interface ILogos {
  title: string;
  imageSrc: string;
}