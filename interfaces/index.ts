import { ReactNode } from "react";

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;

  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  id?: string;
  min?: string;
  max?: string;
}

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "success"
    | "warning";
  size?: "extra-small" | "small" | "medium" | "large" | "extra-large" | "none";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  fullWidth?: boolean;
  rounded?: "default" | "none" | "full" | "large";
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  shape?: "circle" | "square";
  border?: boolean;
  className?: string;
}

export interface CategoryProps {
  label: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
}

export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface CardProps {
  property: PropertyProps;
  activeFilter?: string;
  setActiveFilter?: (filter: string) => void;
}
