import "./Card.css";

interface CardProps {
  children?: React.ReactNode;
  variant?: "day1" | "day2";
}

export const Card = ({ children, variant = "day1" }: CardProps) => {
  return (
    <>
      <div className={`card__${variant}`}>{children}</div>
    </>
  );
};
