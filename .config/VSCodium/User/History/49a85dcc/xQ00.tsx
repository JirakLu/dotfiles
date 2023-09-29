import { NewsCardProps, NewsCardVariants } from './NewsCardProps';
import { classNames } from '@ui-monorepo/shared/utils';
import { forwardRef } from 'react';

const variantsMap: Record<NewsCardVariants, { body: string; date: string; title: string; text: string }> = {
  primary: {
    body: 'bg-surface-brand',
    date: 'text-text-tertiary',
    title: 'text-text-tertiary',
    text: 'text-text-tertiary/75',
  },
  secondary: {
    body: 'bg-surface-tertiary border border-border-brand',
    date: 'text-text-brand',
    title: 'text-text-secondary',
    text: 'text-text-primary',
  },
};

export const NewsCard = forwardRef<HTMLDivElement, NewsCardProps>((props, ref) => {
  const { date, title, text, button, variant, lng } = props;
  const activeVariant = variantsMap[variant];

  return (
    <div
      ref={ref}
      className={classNames(
        'flex h-full flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl p-7 lg:items-start lg:p-12',
        activeVariant.body,
      )}
    >
      <div className="space-y-5 text-center lg:text-left">
        <span className={classNames('lg:text-md', activeVariant.date)}>{new Date(date).toLocaleDateString(lng)}</span>
        <div className="space-y-2.5 text-center lg:text-left">
          <h2 className={classNames('text-md font-medium lg:text-lg', activeVariant.title)}>{title}</h2>
          <p className={classNames(activeVariant.text)}>{text}</p>
        </div>
      </div>
      {button}
    </div>
  );
});

export default NewsCard;
