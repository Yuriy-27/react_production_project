import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';

interface IStarRatingProps {
  className?: string;
  size?: number;
  onSelect?: (starCount: number) => void;
  selectedStar?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: IStarRatingProps) => {
  const {
    className,
    size = 30,
    selectedStar = 0,
    onSelect,
  } = props;

  const [currentStarCount, setCurrentStarCount] = useState(selectedStar);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStar));

  const onHover = (starCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };

  const onClick = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount);
      setCurrentStarCount(starCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((star) => (
        <Icon
          key={star}
          className={
            classNames(cls.Star, { [cls.selected]: isSelected }, [currentStarCount >= star ? cls.hovered : cls.normal])
          }
          Svg={StarIcon}
          width={size}
          height={size}
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          onClick={onClick(star)}
        />
      ))}
    </div>
  );
});
